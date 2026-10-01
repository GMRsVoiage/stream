/* Nostalgia.exe — Streamlabs Chat Box MSN buddies.
 * Per-message classification from (1) message event metadata and (2) visible badges.
 * IMPORTANT: do NOT freeze a message as viewer before its badges arrive.
 * If Streamlabs hides both metadata and badge names, viewer remains the safe default.
 */
const BUDDY_BASE = "https://raw.githubusercontent.com/GMRsVoiage/stream/main/buddy/";
const CHANNEL_LOGIN = "gmrsvoiage";
const ROLE_RANK = { viewer:0, vip:1, sub:2, founder:3, artist:4, mod:5, broadcaster:6 };
const pendingById = new Map();
const pendingByName = new Map();
const timeoutByEntry = new WeakMap();
let buddyObserver = null;

function extractBadges(data) {
  const result = new Set();
  function collect(v) {
    if (!v) return;
    if (typeof v === "string") {
      v.split(/[ ,]+/).forEach(token => {
        const name = token.split("/")[0].trim().toLowerCase();
        if (name) result.add(name);
      });
      return;
    }
    if (Array.isArray(v)) { v.forEach(collect); return; }
    if (typeof v === "object") {
      // Twitch's badges array often uses objects {type, version, url, description}.
      if (v.type || v.name || v._id) {
        collect(v.type || v.name || v._id);
        if (v.description) collect(v.description);
      } else if (v.id && typeof v.id === "string" && !v.url) {
        collect(v.id);
      } else {
        Object.keys(v).forEach(k => result.add(k.toLowerCase()));
      }
    }
  }
  const containers = [data, data.data, data.tags, data.message, data.event];
  containers.filter(v => v && typeof v === "object").forEach(v => {
    collect(v.badges);
    collect(v.badge_info);
    collect(v["badge-info"]);
    const flags = v.tags && typeof v.tags === "object" ? v.tags : v;
    collect(flags.badges);
    const userType = flags["user-type"] || v.userType || v.role;
    if (userType) collect(String(userType));
    if (v.mod === true || v.mod === 1 || v.mod === "1" || v.isModerator === true || flags.mod === "1") result.add("moderator");
    if (v.subscriber === true || v.subscriber === 1 || v.subscriber === "1" || flags.subscriber === "1") result.add("subscriber");
    if (v.vip === true || v.vip === "1" || v.isVip === true || flags.vip === "1") result.add("vip");
    if (v.isBroadcaster === true || v.isStreamer === true) result.add("broadcaster");
  });
  return result;
}

function roleFromNames(names) {
  const b = [...names].join(" ").toLowerCase();
  if (/(^|[^a-z])(broadcaster|channel-owner)([^a-z]|$)/.test(b)) return "broadcaster";
  if (/(^|[^a-z])(moderator|mod)([^a-z]|$)/.test(b)) return "mod";
  if (/(^|[^a-z])artist([_-]badge)?([^a-z]|$)/.test(b)) return "artist";
  if (/(^|[^a-z])(founder|founders)([^a-z]|$)/.test(b)) return "founder";
  if (/(^|[^a-z])(subscriber|sub)([^a-z]|$)/.test(b)) return "sub";
  if (/(^|[^a-z])vip([^a-z]|$)/.test(b)) return "vip";
  return "viewer";
}

function classifyEvent(data) {
  return roleFromNames(extractBadges(data));
}

function classifyRendered(entry) {
  const badges = entry.querySelectorAll(".badges img, .badges .badge, .badges [title], .badges [aria-label]");
  const names = [];
  badges.forEach(node => {
    ["alt","title","aria-label","data-badge","data-type"].forEach(a => {
      const v = node.getAttribute(a); if (v) names.push(v);
    });
    if (node.className && typeof node.className === "string") names.push(node.className);
    // URLs from custom badge providers sometimes contain a readable role name.
    const src = node.getAttribute("src");
    if (src) names.push(src.split(/[/?#=_\\-]/).join(" "));
  });
  return roleFromNames(names);
}

function senderName(data) {
  const source = data.data && typeof data.data === "object" ? data.data : data;
  return String(source.nick || source.displayName || source.from || source.username ||
    (source.tags && source.tags["display-name"]) || "").trim().toLowerCase();
}

function effectiveRole(entry) {
  const name = String(entry.dataset.from || entry.querySelector(".name")?.textContent || "").trim().toLowerCase();
  const fromId = pendingById.get(String(entry.dataset.id || "")) || "viewer";
  const fromName = pendingByName.get(name) || "viewer";
  const fromBadges = classifyRendered(entry);
  const fromChannel = name === CHANNEL_LOGIN ? "broadcaster" : "viewer";
  return [fromId, fromName, fromBadges, fromChannel].reduce(
    (best, role) => ROLE_RANK[role] > ROLE_RANK[best] ? role : best, "viewer"
  );
}

function applyBuddy(entry, role) {
  if (entry.classList.contains("deleted")) return;
  const img = entry.querySelector("img.buddy");
  if (!img) return;
  // Upgrade a previous viewer assignment if badges arrive later.
  const current = entry.dataset.buddyRole || "viewer";
  if (entry.dataset.buddyInitialized && ROLE_RANK[role] <= ROLE_RANK[current]) return;
  entry.dataset.buddyInitialized = "1";
  entry.dataset.buddyRole = role;
  const oldTimeout = timeoutByEntry.get(entry);
  if (oldTimeout) clearTimeout(oldTimeout);
  img.onerror = () => {
    img.onerror = null;
    img.src = BUDDY_BASE + "viewer_idle.svg";
  };
  img.src = BUDDY_BASE + role + "_talk.svg";
  img.classList.remove("is-speaking");
  void img.offsetWidth;
  img.classList.add("is-speaking");
  timeoutByEntry.set(entry, setTimeout(() => {
    if (!entry.isConnected || entry.dataset.buddyRole !== role) return;
    img.src = BUDDY_BASE + role + "_idle.svg";
    img.classList.remove("is-speaking");
  }, 900));
}

function syncBuddies() {
  document.querySelectorAll("#log > .chat-item").forEach(entry => {
    // Messages start as viewer but can be upgraded when Streamlabs adds badge images.
    applyBuddy(entry, effectiveRole(entry));
  });
}

function messagePayload(detail) {
  const event = detail.event || {};
  return event.data && typeof event.data === "object" ? event.data : event;
}

document.addEventListener("onLoad", () => {
  const log = document.getElementById("log");
  if (!log) return;
  buddyObserver = new MutationObserver(syncBuddies);
  buddyObserver.observe(log, {childList:true, subtree:true, attributes:true,
    attributeFilter:["alt","title","aria-label","class","src"]});
  syncBuddies();
});

document.addEventListener("onEventReceived", obj => {
  const detail = obj.detail || {};
  if (detail.listener !== "message" && detail.type !== "message") return;
  const data = messagePayload(detail);
  const event = detail.event || {};
  const id = data.msgId || data.messageId || data.id || (data.tags && data.tags.id) || event.messageId;
  const name = senderName(data);
  const role = classifyEvent(data);
  if (id != null) pendingById.set(String(id), role);
  if (name) pendingByName.set(name, role);
  syncBuddies();
  requestAnimationFrame(syncBuddies);
  // Streamlabs may render the HTML after this event.
  setTimeout(syncBuddies, 200);
  setTimeout(() => {
    if (id != null) pendingById.delete(String(id));
    if (name && pendingByName.get(name) === role) pendingByName.delete(name);
  }, 5000);
});

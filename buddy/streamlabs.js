/* Nostalgia.exe: buddy follows EACH Streamlabs chat message.
   Badge priority: broadcaster > moderator > artist > founder > subscriber > VIP > viewer.
   Missing/unknown badges fall back to viewer; streamer and moderator flags are also checked. */
const BUDDY_BASE = "https://raw.githubusercontent.com/GMRsVoiage/stream/main/buddy/";
const BUDDY_ROLES = new Set(["viewer", "vip", "sub", "founder", "artist", "mod", "broadcaster"]);
const pendingRoles = new Map();
const pendingNames = new Map();
const fallbackTimers = new WeakMap();

function normalizeBadgeNames(data) {
  const found = new Set();
  function collect(value) {
    if (!value) return;
    if (typeof value === "string") {
      value.split(/[ ,]+/).forEach(part => {
        const badge = part.split("/")[0].trim().toLowerCase();
        if (badge) found.add(badge);
      });
    } else if (Array.isArray(value)) {
      value.forEach(collect);
    } else if (typeof value === "object") {
      if (value.type || value.name || value.id || value._id) {
        collect(value.type || value.name || value.id || value._id);
      } else {
        Object.entries(value).forEach(([key, val]) => { found.add(key.toLowerCase()); });
      }
    }
  }
  collect(data.badges);
  collect(data.tags && data.tags.badges);
  collect(data.badge_info);
  collect(data.tags && data.tags["badge-info"]);
  const flags = data.tags || {};
  if (data.mod === true || data.isModerator === true || flags.mod === "1") found.add("moderator");
  if (data.subscriber === true || flags.subscriber === "1") found.add("subscriber");
  if (data.isVip === true || flags.vip === "1") found.add("vip");
  if (data.isBroadcaster === true || data.isStreamer === true) found.add("broadcaster");
  const userType = String(flags["user-type"] || data.userType || "").toLowerCase();
  if (userType) found.add(userType);
  return found;
}
function roleFor(data) {
  const b = normalizeBadgeNames(data);
  const has = (...names) => names.some(name => b.has(name));
  if (has("broadcaster", "channel-owner")) return "broadcaster";
  if (has("moderator", "mod")) return "mod";
  // Twitch's Artist role can appear as artist or artist-badge.
  if (has("artist", "artist-badge", "artist_badge")) return "artist";
  if (has("founder", "founders")) return "founder";
  if (has("subscriber", "sub")) return "sub";
  if (has("vip")) return "vip";
  return "viewer";
}
function buddyFor(el, role) {
  if (!el || el.classList.contains("deleted")) return;
  role = BUDDY_ROLES.has(role) ? role : "viewer";
  const img = el.querySelector(".buddy");
  if (!img || el.dataset.buddyReady === role) return;
  const old = fallbackTimers.get(el);
  if (old) clearTimeout(old);
  el.dataset.buddyReady = role;
  img.onerror = () => { if (role !== "viewer") img.src = BUDDY_BASE + "viewer_idle.svg"; };
  img.src = BUDDY_BASE + role + "_talk.svg";
  img.classList.remove("is-speaking");
  void img.offsetWidth;
  img.classList.add("is-speaking");
  fallbackTimers.set(el, window.setTimeout(() => {
    if (el.isConnected && el.dataset.buddyReady === role) {
      img.src = BUDDY_BASE + role + "_idle.svg";
      img.classList.remove("is-speaking");
    }
  }, 900));
}
function roleFromRenderedBadges(el) {
  const badges = [...el.querySelectorAll(".badges img, .badge")].map(n =>
    [n.getAttribute("alt"), n.getAttribute("title"), n.className].filter(Boolean).join(" ").toLowerCase()
  ).join(" ");
  if (/broadcaster/.test(badges)) return "broadcaster";
  if (/moderator|\bmod\b/.test(badges)) return "mod";
  if (/artist/.test(badges)) return "artist";
  if (/founder/.test(badges)) return "founder";
  if (/subscriber|\bsub\b/.test(badges)) return "sub";
  if (/\bvip\b/.test(badges)) return "vip";
  return "viewer";
}
function syncPending() {
  document.querySelectorAll("#log > .chat-item").forEach(el => {
    if (el.dataset.buddyReady) return;
    const id = el.dataset.id;
    const name = (el.dataset.from || "").toLowerCase();
    if (id && pendingRoles.has(id)) {
      buddyFor(el, pendingRoles.get(id)); pendingRoles.delete(id); return;
    }
    if (name && pendingNames.has(name)) {
      buddyFor(el, pendingNames.get(name)); pendingNames.delete(name); return;
    }
    // Allows Streamlabs to add message metadata first, without showing the wrong role immediately.
    if (!el.dataset.buddyWaiting) {
      el.dataset.buddyWaiting = "1";
      window.setTimeout(() => {
        if (el.isConnected && !el.dataset.buddyReady) buddyFor(el, roleFromRenderedBadges(el));
      }, 120);
    }
  });
}
document.addEventListener("onLoad", () => {
  const log = document.getElementById("log");
  if (log) new MutationObserver(syncPending).observe(log, { childList: true });
  syncPending();
});
document.addEventListener("onEventReceived", obj => {
  const detail = obj.detail || {};
  if (detail.listener !== "message") return;
  const event = detail.event || {};
  const data = event.data || event;
  const role = roleFor(data);
  const id = data.msgId || data.messageId || data.id || event.messageId;
  const name = String(data.nick || data.displayName || data.from || data.username || "").toLowerCase();
  if (id != null) pendingRoles.set(String(id), role);
  if (name) pendingNames.set(name, role);
  syncPending();
  requestAnimationFrame(syncPending);
  // Prevent accumulation if Streamlabs omits IDs on some events.
  window.setTimeout(() => {
    if (id != null) pendingRoles.delete(String(id));
    if (name) pendingNames.delete(name);
  }, 4000);
});

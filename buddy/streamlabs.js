/* Streamlabs Chat Box > Custom JS. Each message has its OWN MSN buddy.
   Role precedence: sub/founder > VIP > viewer. If both badges exist, sub wins.
   Streamlabs event shapes can vary; unknown/missing badges safely fall back to viewer. */
const BUDDY_BASE = "https://raw.githubusercontent.com/GMRsVoiage/stream/main/buddy/";
const seen = new Map();

function badgeNames(data) {
  const found = [];
  const collect = value => {
    if (!value) return;
    if (typeof value === "string") { value.split(",").forEach(x => found.push(x.split("/")[0].trim().toLowerCase())); return; }
    if (Array.isArray(value)) { value.forEach(collect); return; }
    if (typeof value === "object") {
      if (value.type || value.name || value.id) { found.push(String(value.type || value.name || value.id).toLowerCase()); return; }
      Object.keys(value).forEach(k => found.push(k.toLowerCase()));
    }
  };
  collect(data.badges); collect(data.tags && data.tags.badges);
  return found;
}
function roleFor(data) {
  const badges = badgeNames(data);
  if (badges.some(x => x === "subscriber" || x === "founder")) return "sub";
  if (badges.includes("vip")) return "vip";
  return "viewer";
}
function buddyFor(entry, role) {
  if (!entry || entry.dataset.buddyReady === role) return;
  const img = entry.querySelector("img.buddy");
  if (!img) return;
  entry.dataset.buddyReady = role;
  img.src = BUDDY_BASE + role + "_talk.svg";
  img.classList.remove("is-speaking");
  void img.offsetWidth;
  img.classList.add("is-speaking");
  window.setTimeout(() => {
    if (entry.isConnected && entry.dataset.buddyReady === role) {
      img.src = BUDDY_BASE + role + "_idle.svg";
      img.classList.remove("is-speaking");
    }
  }, 900);
}
function findEntry(id) {
  return [...document.querySelectorAll("#log > .chat-item")].find(el => el.dataset.id === String(id));
}
function syncPending() {
  document.querySelectorAll("#log > .chat-item").forEach(el => {
    const id = el.dataset.id;
    if (!el.dataset.buddyReady && !seen.has(id)) buddyFor(el, "viewer");
    if (seen.has(id)) { buddyFor(el, seen.get(id)); seen.delete(id); }
  });
}
document.addEventListener("onLoad", () => {
  const log = document.getElementById("log");
  if (log) new MutationObserver(syncPending).observe(log, {childList:true});
});
document.addEventListener("onEventReceived", obj => {
  const detail = obj.detail || {};
  if (detail.listener !== "message") return;
  const event = detail.event || {};
  const data = event.data || event;
  const id = data.msgId || data.messageId || data.id || event.messageId;
  if (id == null) return;
  seen.set(String(id), roleFor(data));
  syncPending();
  requestAnimationFrame(syncPending);
});

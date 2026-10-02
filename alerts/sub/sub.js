/* Nostalgia.exe Sub: normalize Streamlabs name styling and fit long names.
 * No API, credentials or network access. This widget's message template is {name}.
 */
(function () {
  "use strict";
  function install() {
    const nameNode = document.getElementById("alert-message");
    if (!nameNode) return false;
    let lastName = "", lastWidth = 0, busy = false;

    function update() {
      if (busy) return;
      busy = true;
      try {
        const name = (nameNode.textContent || "").trim();
        if (!name || name === "{messageTemplate}") return;
        if (nameNode.childElementCount || nameNode.textContent !== name) {
          nameNode.textContent = name;
        }
        const available = nameNode.clientWidth;
        if (!available) return;
        if (name === lastName && available === lastWidth) return;
        lastName = name; lastWidth = available;
        nameNode.title = name;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let fontSize = 17;
        while (fontSize > 10) {
          ctx.font = "700 " + fontSize + "px Tahoma";
          if (ctx.measureText(name).width <= available - 2) break;
          fontSize--;
        }
        nameNode.style.setProperty("font-size", fontSize + "px", "important");
        // CSS ellipsis prevents overflow when even 10px is insufficient.
      } finally { busy = false; }
    }
    new MutationObserver(update).observe(nameNode, {
      childList:true, subtree:true, characterData:true
    });
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(update).observe(nameNode);
    }
    update();
    return true;
  }
  if (!install()) {
    document.addEventListener("DOMContentLoaded", install, {once:true});
  }
})();

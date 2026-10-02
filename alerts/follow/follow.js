/* Nostalgia.exe • Follow: keep long Twitch names on one line.
   No external requests, Twitch API, or event listeners required.
   Streamlabs can wrap the name in spans and apply its 40px font setting.
   CSS handles the normal case; this script sizes long names responsively.
*/
(function () {
  "use strict";

  function install() {
    const element = document.getElementById("alert-message");
    if (!element) return false;

    let lastName = "";
    let lastWidth = 0;
    let updating = false;

    function fitName() {
      if (updating) return;
      updating = true;
      try {
        const name = (element.textContent || "").trim();
        // The message template in Streamlabs MUST be exactly {name}.
        if (!name || name === "{messageTemplate}") return;
        // Streamlabs may split or wrap each character into styled spans.
        // Collapse to plain text once so its animation and font overrides
        // cannot turn names into vertical columns.
        if (element.childElementCount > 0 ||
            element.textContent !== name) {
          element.textContent = name;
        }

        const available = element.clientWidth;
        if (!available) return;
        if (name === lastName && available === lastWidth) return;
        lastName = name;
        lastWidth = available;
        element.title = name;

        const style = window.getComputedStyle(element);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) return;

        let size = 19;
        const minSize = 11;
        while (size > minSize) {
          context.font = "700 " + size + "px Tahoma";
          if (context.measureText(name).width <= available - 2) break;
          size--;
        }
        element.style.setProperty("font-size", size + "px", "important");
        // For unusually wide names, CSS ellipsis is the last fallback.
      } finally {
        updating = false;
      }
    }

    const observer = new MutationObserver(fitName);
    observer.observe(element, {
      childList: true,
      subtree: true,
      characterData: true
    });
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(fitName).observe(element);
    }
    fitName();
    return true;
  }

  if (!install()) {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  }
})();

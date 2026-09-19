(() => {
  const params = new URLSearchParams(window.location.search);

  const state = {
    name: params.get("name") || "RAFAELMANU001",
    game: params.get("game") || "GMRsVoiage",
    status: params.get("status") || "AO VIVO"
  };

  const apply = () => {
    document.querySelectorAll("[data-scene-name]").forEach((el) => {
      el.textContent = state.name;
    });

    document.querySelectorAll("[data-scene-game]").forEach((el) => {
      el.textContent = state.game;
    });

    document.querySelectorAll("[data-scene-status]").forEach((el) => {
      el.textContent = state.status;
    });
  };

  window.AquaWave = {
    get config() {
      return { ...state };
    },
    set(next = {}) {
      Object.assign(state, next);
      apply();
      window.dispatchEvent(new CustomEvent("aquawave:change", { detail: { ...state } }));
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply, { once: true });
  } else {
    apply();
  }
})();

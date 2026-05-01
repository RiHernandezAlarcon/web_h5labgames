/**
 * Privacy policy pages: persist language when switching EN/ES via link.
 * Uses the same localStorage key as js/i18n.js ("h5lab-lang").
 * Language sync on load is handled by the small inline script in each policy <head>.
 */
(function () {
  var KEY = "h5lab-lang";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[data-set-lang], button[data-set-lang]").forEach(function (el) {
      el.addEventListener("click", function () {
        var lang = el.getAttribute("data-set-lang");
        localStorage.setItem(KEY, lang === "es" ? "es" : "en");
      });
    });
  });
})();

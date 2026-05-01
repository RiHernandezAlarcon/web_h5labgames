/**
 * H5lab static i18n — EN / ES, preference in localStorage ("h5lab-lang").
 */
(function () {
  var STORAGE_KEY = "h5lab-lang";

  var STRINGS = {
    "common.logo_aria": { en: "H5lab home", es: "Inicio H5lab" },
    "common.nav_main": { en: "Main", es: "Principal" },
    "common.lang_aria": { en: "Language", es: "Idioma" },
    "common.footer_play": { en: "H5lab on Google Play", es: "H5lab en Google Play" },

    "nav.about": { en: "About", es: "Acerca de" },
    "nav.games": { en: "Games", es: "Juegos" },
    "nav.apps": { en: "Apps", es: "Apps" },

    "about.h1": { en: "Behind H5lab", es: "Detrás de H5lab" },
    "about.lead": {
      en: "One independent developer — casual games and purposeful Android apps, built with care.",
      es: "Un desarrollador independiente: juegos casuales y apps Android con intención, hechos con mimo.",
    },
    "about.story_h2": { en: "Independent & player-focused", es: "Independiente y cercano a quien juega" },
    "about.story_p1": {
      en: "H5lab is a solo studio: I make games and utilities I would want to use myself — approachable design, fair challenge, and respect for your time. I’m always looking for ideas that feel a little different, whether that’s a tricky puzzle or a calm tool for everyday habits.",
      es: "H5lab lo llevo yo solo. Hago juegos y utilidades pensando en lo que a mí me gustaría usar: interfaces sencillas, un reto que se sienta justo y que no te coma la tarde. Me gusta cuando el proyecto se sale un poco de lo típico, ya sea un puzzle que te haga pensar o una app tranquila para el día a día.",
    },
    "about.story_p2": {
      en: "Every install, rating, and message matters. Your support keeps releases improving and motivates each update. Thank you for playing and for trying what I ship.",
      es: "Cuando instalas algo, dejas una reseña o me escribes, en serio que ayuda. Es lo que me empuja a seguir mejorando y sacando actualizaciones. Gracias por jugar y por darle una oportunidad a lo que publico.",
    },
    "about.ship_h2": { en: "What I ship", es: "Qué publico" },
    "about.games_h3": { en: "Games", es: "Juegos" },
    "about.games_p": {
      en: "Casual Android titles with trailers, screenshots, and links to Google Play — puzzles, guessing games, and more.",
      es: "Títulos casuales para Android con tráilers, capturas y enlaces a Google Play: puzzles, adivinanzas y más.",
    },
    "about.games_cta": { en: "View games", es: "Ver juegos" },
    "about.apps_h3": { en: "Apps", es: "Apps" },
    "about.apps_cta": { en: "View apps", es: "Ver apps" },
    "about.connect_h2": { en: "Where to find H5lab", es: "Dónde encontrar a H5lab" },
    "about.play_dev": { en: "Google Play developer", es: "Google Play (desarrollador)" },

    "games.h1": { en: "Games", es: "Juegos" },
    "games.lead": {
      en: "Casual Android titles from an indie studio — trailers, screenshots, and links to Google Play.",
      es: "Títulos casuales desde un estudio indie: tráilers, capturas y enlaces a Google Play.",
    },
    "games.twins_desc": {
      en: "Your objective is to navigate each ball to its destination through a series of obstacle-filled levels.",
      es: "Guía cada bola hasta su destino a través de niveles llenos de obstáculos.",
    },
    "games.dog_desc": {
      en: "Discover the names of adorable dogs! In each level, you will be presented with a beautiful image of a dog and you have to guess its name.",
      es: "¡Adivina el nombre de perritos adorables! En cada nivel verás una foto y deberás acertar su nombre.",
    },
    "games.cat_desc": {
      en: "In each level, captivating images of cats will be presented, and your challenge will be to guess their names.",
      es: "En cada nivel verás gatos fascinantes y tu reto será adivinar sus nombres.",
    },

    "apps.h1": { en: "Apps", es: "Apps" },
    "apps.lead": {
      en: "Android apps from H5lab — store listings, screenshots, and privacy documentation for each release.",
      es: "Apps Android de H5lab: fichas en la tienda, capturas y política de privacidad por título.",
    },
    "apps.ebe_desc": {
      en: "Track what you eat across categories (vegetables, fruits, proteins, carbs, legumes, healthy fats and more). Set flexible goals, see the week at a glance, explore charts by category and variety, and read nutrition tips on the home screen. Customize categories, foods, colours and targets. Light and dark mode. Spanish and English. Not a substitute for professional medical or nutrition advice.",
      es: "Registra lo que comes por categorías (verduras, frutas, proteínas, carbohidratos, legumbres, grasas saludables y más). Metas flexibles, la semana de un vistazo, gráficos por categoría y variedad, y consejos en el inicio. Personaliza categorías, alimentos, colores y objetivos. Modo claro y oscuro. Español e inglés. No sustituye el consejo médico o nutricional profesional.",
    },
    "apps.badge": { en: "Coming soon", es: "Próximamente" },
    "apps.play_btn_title": { en: "Coming soon on Google Play", es: "Próximamente en Google Play" },
    "apps.privacy": { en: "Privacy policy", es: "Política de privacidad" },

    "more.h1": { en: "More games", es: "Más juegos" },
    "more.lead": {
      en: "Additional titles on Google Play — trailers and screenshots.",
      es: "Más títulos en Google Play: tráilers y capturas.",
    },
    "more.destroy_desc": {
      en: "Switch colours and shoot as fast as you can — destroy enemies and bosses to save the day.",
      es: "Cambia de color y dispara todo lo rápido que puedas: elimina enemigos y jefes para salvar el día.",
    },
    "more.double_desc": {
      en: "Dual-ball platforming with simultaneous controls — collect stars and reach the goal.",
      es: "Plataformas con dos bolas y control simultáneo: reúne estrellas y llega a la meta.",
    },
    "more.dodge_desc": {
      en: "Dodge enemies and grab objectives — simple controls, skill-based levels.",
      es: "Esquiva enemigos y atrapa objetivos: controles simples, niveles de habilidad.",
    },

    "cta.google_play": { en: "Google Play", es: "Google Play" },
    "cta.privacy": { en: "Privacy policy", es: "Política de privacidad" },
  };

  var HTML_STRINGS = {
    "about.apps_p": {
      en: 'Tools beyond gaming: <strong>Easy Balanced Eating</strong> (coming soon on Google Play) for simple, visual meal logging and weekly habits.',
      es: 'Herramientas más allá de los juegos: <strong>Easy Balanced Eating</strong> (próximamente en Google Play) para un registro de comidas visual y hábitos semanales sencillos.',
    },
    "about.connect_p": {
      en: 'Open the developer page on Google Play for all listings. For general enquiries you can email <a href="mailto:h5labgames@gmail.com">h5labgames@gmail.com</a>. For app-specific issues, the contact options on each Play Store listing are often the fastest route.',
      es: 'Abre la página del desarrollador en Google Play para ver todas las fichas. Para consultas generales escribe a <a href="mailto:h5labgames@gmail.com">h5labgames@gmail.com</a>. Para temas de una app concreta, las opciones de contacto en cada ficha de Play suelen ser la vía más rápida.',
    },
  };

  var DOC = {
    about: {
      title: { en: "H5lab — About", es: "H5lab — Acerca de" },
      desc: {
        en: "H5lab is an independent developer making casual Android games and thoughtful apps — learn more and find store links.",
        es: "H5lab es un desarrollador independiente de juegos casuales y apps para Android — conócelo y enlaces a las tiendas.",
      },
    },
    games: {
      title: { en: "H5lab — Games", es: "H5lab — Juegos" },
      desc: {
        en: "H5lab casual Android games — trailers, screenshots, and Google Play links.",
        es: "Juegos casuales H5lab para Android: tráilers, capturas y enlaces a Google Play.",
      },
    },
    apps: {
      title: { en: "H5lab — Apps", es: "H5lab — Apps" },
      desc: {
        en: "H5lab mobile apps — listings, screenshots, and privacy policies. Includes Easy Balanced Eating for Android.",
        es: "Apps móviles H5lab: fichas, capturas y políticas de privacidad. Incluye Easy Balanced Eating para Android.",
      },
    },
    more: {
      title: { en: "H5lab — More games", es: "H5lab — Más juegos" },
      desc: {
        en: "More H5lab Android games — Destroy Walls, Double Mission, Dodge and Grab on Google Play.",
        es: "Más juegos H5lab para Android: Destroy Walls, Double Mission y Dodge and Grab en Google Play.",
      },
    },
  };

  var HREFS = {
    "apps.privacy": {
      en: "../privacy%20policy/easy_balanced_eating/privacy-policy-en.html",
      es: "../privacy%20policy/easy_balanced_eating/privacy-policy-es.html",
    },
  };

  function getLang() {
    var s = localStorage.getItem(STORAGE_KEY);
    return s === "es" ? "es" : "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang === "es" ? "es" : "en");
    apply();
  }

  function apply() {
    var lang = getLang();
    document.documentElement.lang = lang === "es" ? "es" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (STRINGS[k] && STRINGS[k][lang] !== undefined) {
        el.textContent = STRINGS[k][lang];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (HTML_STRINGS[k] && HTML_STRINGS[k][lang] !== undefined) {
        el.innerHTML = HTML_STRINGS[k][lang];
      }
    });

    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-href");
      if (HREFS[k] && HREFS[k][lang]) {
        el.setAttribute("href", HREFS[k][lang]);
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach(function (part) {
        var pair = part.split("|").map(function (s) {
          return s.trim();
        });
        if (pair.length === 2) {
          var attr = pair[0];
          var key = pair[1];
          if (STRINGS[key] && STRINGS[key][lang] !== undefined) {
            el.setAttribute(attr, STRINGS[key][lang]);
          }
        }
      });
    });

    var page = document.body.getAttribute("data-i18n-page");
    if (page && DOC[page]) {
      if (DOC[page].title && DOC[page].title[lang]) {
        document.title = DOC[page].title[lang];
      }
      var meta = document.querySelector('meta[name="description"]');
      if (meta && DOC[page].desc && DOC[page].desc[lang]) {
        meta.setAttribute("content", DOC[page].desc[lang]);
      }
    }

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("lang-switcher__btn--active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
    apply();
  });
})();

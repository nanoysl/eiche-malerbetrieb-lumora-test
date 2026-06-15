const images = {
  hero: "url('https://www.eiche-malerbetrieb.de/files/images/team-2025/Eicher-Malerbetrieb-Dueren-Gruppenfoto-2025-a.jpg')",
  house: "https://www.eiche-malerbetrieb.de/files/images/maler-dueren-eiche-meisterbetrieb-startbild-wohnhaus.jpg",
  team: "https://www.eiche-malerbetrieb.de/files/images/team-2025/Eiche-Malerbetrieb-Streichorchester-2025.jpg",
  room: "https://www.eiche-malerbetrieb.de/assets/images/7/Deckengestlaung-de4183ae.jpg",
  facade: "https://www.eiche-malerbetrieb.de/assets/images/d/fassadenanstrich-maler-eiche-dueren-001-8011ef19.jpg",
  facade2: "https://www.eiche-malerbetrieb.de/assets/images/f/fassadenanstrich-maler-eiche-dueren-002-2405b0b8.jpg",
  wallpaper: "https://www.eiche-malerbetrieb.de/assets/images/6/tapezierarbeiten-maler-eiche-dueren-001-9ee6d69d.jpg",
  digital: "https://www.eiche-malerbetrieb.de/assets/images/f/digitaldruck-001-998da260.jpg",
  digital2: "https://www.eiche-malerbetrieb.de/assets/images/5/digitaldruck-002-9156bd38.jpg",
  wood: "https://www.eiche-malerbetrieb.de/assets/images/9/holzschutz-maler-eiche-dueren-001-1c2e4645.jpg",
  concrete: "https://www.eiche-malerbetrieb.de/assets/images/1/betonsanierung-maler-eiche-dueren-12-7288b5c6.jpg",
  clay: "https://www.eiche-malerbetrieb.de/assets/images/6/lehmfarben-maler-eiche-dueren-001-8d59f669.jpg",
  colorWorld: "https://www.eiche-malerbetrieb.de/assets/images/9/farbtrends-2024-4-8ce682d9.jpg",
  colorWorld2: "https://www.eiche-malerbetrieb.de/assets/images/9/picture-2600-29-70d23649.jpeg",
  concept: "https://www.eiche-malerbetrieb.de/files/images/farb-konzepte.jpeg",
  serviceHoliday: "https://www.eiche-malerbetrieb.de/files/images/urlaubsservice-maler-eiche-dueren.jpg",
  serviceTax: "https://www.eiche-malerbetrieb.de/files/images/service-steuern-sparen.jpg",
  serviceCare: "https://www.eiche-malerbetrieb.de/files/images/service-wartung.jpg"
};

const team = [
  ["Roland Eiche", "Meister und Restaurator im Malerhandwerk", "https://www.eiche-malerbetrieb.de/assets/images/e/Roland-Eiche-2025-f2f7e52d.jpg"],
  ["Katharina Eiche", "Geschäftsführung und Personalentwicklung", "https://www.eiche-malerbetrieb.de/assets/images/1/Katharina-Eiche-2025-5042fa3c.jpg"],
  ["Johnny Eiche", "Junior-Chef", "https://www.eiche-malerbetrieb.de/assets/images/8/Johnny-Eiche-2025-72e9fbaf.jpg"],
  ["Alex Mertens", "Vorarbeiter", "https://www.eiche-malerbetrieb.de/assets/images/6/Alex-Mertens-2025-7a8a3c41.jpg"],
  ["Sebastian Thomas", "Malergeselle", "https://www.eiche-malerbetrieb.de/assets/images/1/Sebastian-2025-7cd2092e.jpg"],
  ["Dirk Müller", "Malergeselle", "https://www.eiche-malerbetrieb.de/assets/images/7/Dirk-Mu%CC%88ller-2025-81ede4dd.jpg"],
  ["Marcus Bonnes", "Malergeselle", "https://www.eiche-malerbetrieb.de/assets/images/2/Marcus-2025-cafb1383.jpg"],
  ["Nik Prinz", "Team EICHE", "https://www.eiche-malerbetrieb.de/assets/images/b/Nik-Prinz-5982553b.jpg"]
];

const services = [
  {
    key: "malerarbeiten",
    title: "Malerarbeiten",
    path: "/leistungen/malerarbeiten",
    image: images.room,
    summary: "Farbwirkung, Untergrund, Materialeigenschaften und Ausführung werden vorab sauber beraten.",
    detail: "Im Vorfeld klärt EICHE die gewünschte Farbwirkung und informiert zu Witterungsbeständigkeit, Nachhaltigkeit und Abriebfestigkeit, damit der neue Anstrich lange Freude macht."
  },
  {
    key: "fassadenanstrich",
    title: "Fassadenanstrich",
    path: "/leistungen/fassadenanstrich",
    image: images.facade,
    summary: "Schutz und Gestaltung für die Fassade als Gesicht und Schutzschild des Hauses.",
    detail: "Frost, Wind, Sonne, Moos und Algen verlangen eine Fassade, die technisch geschützt und gestalterisch durchdacht ist."
  },
  {
    key: "tapezierarbeiten",
    title: "Tapezierarbeiten",
    path: "/leistungen/tapezierarbeiten",
    image: images.wallpaper,
    summary: "Rundum-Service von Tapetenauswahl bis Entfernen, Grundieren, Spachteln und Aufbringen.",
    detail: "EICHE begleitet Neutapezierungen von der Auswahl bis zur fachmännischen Vorbereitung und passgenauen Verarbeitung."
  },
  {
    key: "digitaldruck-tapeten",
    title: "Digitaldruck-Tapeten",
    path: "/leistungen/digitaldruck-tapeten",
    image: images.digital,
    summary: "Individuelle Motive, Landschaften oder eigenes Bildmaterial als Wandbelag.",
    detail: "Digitaldrucktapeten schaffen für Wohnräume und Geschäftsbereiche ein besonderes Flair mit individuellen Motiven."
  },
  {
    key: "holzschutz",
    title: "Holzschutz",
    path: "/leistungen/holzschutz",
    image: images.wood,
    summary: "Fachmännisches Lackieren und Lasieren von Türen, Fenstern und Holzelementen.",
    detail: "Mit passenden Lacken und Lasuren werden Gebrauchsspuren beseitigt und Holzelemente langfristig geschützt."
  },
  {
    key: "betonsanierung",
    title: "Betonsanierung",
    path: "/leistungen/betonsanierung",
    image: images.concrete,
    summary: "Spezialanstriche, Rissbehandlung und Schutz für Betonoberflächen.",
    detail: "Risse und Hohlräume werden frühzeitig behandelt, damit keine größeren Schäden entstehen."
  },
  {
    key: "lehmfarben",
    title: "Ökologische Lehmfarben",
    path: "/leistungen/lehmfarben",
    image: images.clay,
    summary: "Natürliche Claytec Lehmfarbe für wohngesundes, farbintensives Raumklima.",
    detail: "Lehmfarbe ist atmungsaktiv, feuchtigkeitsregulierend, geruchsabsorbierend und setzt selbst keine Wohngifte frei."
  }
];

const extraRoutes = {
  "/leistungen/bodenverlegung": {
    title: "Bodenverlegung",
    text: "Bodenverlegung wird als Teil der Farb-Projekte geführt. Diese Testseite verlinkt sauber zur Anfrage und zum Leistungsüberblick."
  },
  "/leistungen/denkmalpflege": {
    title: "Denkmalpflege",
    text: "Denkmalpflege verlangt Substanzgefühl, Materialwissen und ruhige Handwerksarbeit."
  },
  "/leistungen/badezimmer-tapeten": {
    title: "Badezimmer-Tapeten",
    text: "Badezimmer-Tapeten bringen robuste Oberflächen und individuelle Motive in Feuchträume."
  },
  "/downloads": {
    title: "Downloads",
    text: "Serviceunterlagen, Formulare und Informationen sind hier als sauber verlinkte Testseite vorbereitet."
  },
  "/stellenangebote": {
    title: "Stellenangebote",
    text: "EICHE zeigt sich als familienfreundlicher Arbeitgeber mit starkem Team und handwerklicher Zukunft."
  },
  "/presse": {
    title: "Presse",
    text: "Presseberichte und Auszeichnungen rund um Werte, Arbeitskultur und Wachstumskurs."
  },
  "/impressum": {
    title: "Impressum",
    text: "EICHE Malerbetrieb GmbH, Schillingsstraße 106, 52355 Düren."
  },
  "/datenschutz": {
    title: "Datenschutz",
    text: "Datenschutzinformationen der Testseite. Externe Rechtsinhalte werden hier nicht erfunden."
  }
};

const faqGroups = {
  allgemein: [
    ["Wie starte ich ein Projekt mit EICHE?", "Am besten über Telefon, E-Mail oder das Kontaktformular. Danach kann der Bedarf konkret aufgenommen werden."],
    ["Arbeitet EICHE fuer Privat- und Gewerbekunden?", "Ja, die Referenzen reichen von privaten Renovierungen bis zu gewerblichen Projekten."],
    ["Was zeichnet den Betrieb aus?", "EICHE verbindet Tradition seit 1913 mit aktuellen Farbtrends, hochwertigen Produkten und sauberer Ausführung."]
  ],
  leistungen: [
    ["Was kostet eine Malerstunde?", "Auf der bestehenden Website wird für Malerarbeiten ein Bereich von etwa 55 bis 58 Euro pro Stunde genannt, zuzüglich Material."],
    ["Gibt es nachhaltige Materialien?", "Ja, unter anderem ökologische Lehmfarben mit wohngesunden Eigenschaften."],
    ["Kann ich ein individuelles Motiv als Tapete nutzen?", "Ja, Digitaldrucktapeten können mit Landschaften, Reisemotiven oder eigenem Bildmaterial umgesetzt werden."]
  ],
  kontakt: [
    ["Wie erreiche ich den Betrieb?", "Telefonisch unter +49 2421 81325 oder per E-Mail an info@eiche-malerbetrieb.de."],
    ["Wo sitzt EICHE?", "Schillingsstraße 106, 52355 Düren."],
    ["Was passiert nach dem Formular?", "In dieser Testseite wird das Formular lokal validiert und bestätigt, ohne Daten extern zu senden."]
  ]
};

const testimonials = [
  {
    quote: "Qualität, Beratung und Sauberkeit haben bei unserem Projekt genau gepasst. Man merkt die Erfahrung im Detail.",
    author: "Privatkunde aus Düren",
    title: "Innenanstrich und Tapezierung",
    avatar: "https://www.eiche-malerbetrieb.de/files/bewertungen/kundenreferenzen1.jpeg"
  },
  {
    quote: "Die Fassade wurde persönlich beraten und termingerecht umgesetzt. Das Haus wirkt wieder gepflegt und geschützt.",
    author: "Eigentümerfamilie",
    title: "Fassadenanstrich",
    avatar: "https://www.eiche-malerbetrieb.de/files/bewertungen/kundenreferenzen2.jpeg"
  },
  {
    quote: "Vom Farbkonzept bis zum letzten Pinselstrich war alles nachvollziehbar, freundlich und handwerklich stark.",
    author: "Gewerbekunde",
    title: "Farb-Konzept",
    avatar: "https://www.eiche-malerbetrieb.de/files/bewertungen/kundenreferenzen3.jpeg"
  }
];

let testimonialIndex = 0;
let faqCategory = "allgemein";

function route(path) {
  if (path === window.location.pathname && !window.location.hash) return;
  history.pushState({}, "", path);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isCurrent(path) {
  return window.location.pathname === path ? " aria-current=\"page\"" : "";
}

function nav() {
  return `
    <header class="site-nav" data-nav>
      <div class="nav-inner">
        <a class="brand-link" href="/" data-link${isCurrent("/")}>
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">EICHE <small>Meisterbetrieb</small></span>
        </a>
        <nav class="nav-links" aria-label="Hauptnavigation">
          <a href="/" data-link${isCurrent("/")}>Start</a>
          <a href="/leistungen" data-link${isCurrent("/leistungen")}>Farb-Projekte</a>
          <a href="/team" data-link${isCurrent("/team")}>Farb-Profis</a>
          <a href="/farbwelten" data-link${isCurrent("/farbwelten")}>Farb-Welten</a>
          <a href="/kontakt" data-link${isCurrent("/kontakt")}>Kontakt</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-phone" href="tel:+49242181325">+49 2421 81325</a>
          <a class="btn btn-light" href="/kontakt" data-link>Projekt anfragen</a>
          <button class="menu-button" type="button" data-menu-open aria-label="Menü öffnen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" data-mobile-menu>
      <button class="mobile-menu__close" type="button" data-menu-close aria-label="Menü schließen">×</button>
      <nav class="mobile-menu__links" aria-label="Mobile Navigation">
        <a href="/" data-link>Start</a>
        <a href="/leistungen" data-link>Farb-Projekte</a>
        <a href="/team" data-link>Farb-Profis</a>
        <a href="/farbwelten" data-link>Farb-Welten</a>
        <a href="/kontakt" data-link>Kontakt</a>
      </nav>
    </div>
  `;
}

function footer() {
  return `
    <footer class="site-footer" data-prompt-id="stark-minimal-footer">
      <div class="footer-dots" aria-hidden="true"><div class="footer-dots__line"></div></div>
      <div class="footer-inner">
        <div class="footer-top">
          <h2 class="display">Exklusive Farbe, präzises Handwerk und ein Team, das seit Generationen für Düren arbeitet.</h2>
          <nav class="footer-nav" aria-label="Leistungen">
            <a href="/leistungen/malerarbeiten" data-link>Malerarbeiten</a>
            <a href="/leistungen/fassadenanstrich" data-link>Fassadenanstrich</a>
            <a href="/leistungen/tapezierarbeiten" data-link>Tapezierarbeiten</a>
            <a href="/leistungen/digitaldruck-tapeten" data-link>Digitaldruck</a>
            <a href="/leistungen/lehmfarben" data-link>Lehmfarben</a>
          </nav>
          <nav class="footer-nav" aria-label="Unternehmen">
            <a href="/team" data-link>Unser Team</a>
            <a href="/bewertungen" data-link>Kundenbewertungen</a>
            <a href="/zertifikate" data-link>Zertifikate</a>
            <a href="/stellenangebote" data-link>Stellenangebote</a>
            <a href="/presse" data-link>Presse</a>
          </nav>
          <nav class="footer-nav" aria-label="Kontakt">
            <a href="tel:+49242181325">+49 2421 81325</a>
            <a href="tel:+491722677131">+49 172 26 77 131</a>
            <a href="mailto:info@eiche-malerbetrieb.de">info@eiche-malerbetrieb.de</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Schillingsstra%C3%9Fe%20106%2C%2052355%20D%C3%BCren" target="_blank" rel="noreferrer">Route planen</a>
            <a href="/kontakt" data-link>Kontaktformular</a>
          </nav>
        </div>
        <a class="footer-brand" href="/" data-link aria-label="EICHE Startseite">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="footer-wordmark">EICHE</span>
        </a>
        <div class="footer-legal">
          <p>© 2026 EICHE Malerbetrieb GmbH. Testseite.</p>
          <a href="/impressum" data-link>Impressum</a>
          <a href="/datenschutz" data-link>Datenschutz</a>
        </div>
      </div>
    </footer>
  `;
}

function hero() {
  return `
    <section class="hero" data-prompt-id="bold-studio" style="--hero-image:${images.hero}">
      <div class="hero-content">
        <div class="hero-kicker eyebrow">Meisterbetrieb seit 1913 aus Düren</div>
        <h1 class="hero-title display">Exklusiv.<br>Innovativ.<br>Creativ.</h1>
        <p class="hero-copy">EICHE Malerbetrieb verbindet traditionelle Handwerkskunst, hochwertige Produkte und aktuelle Farbideen für Malerarbeiten in, am und ums Haus.</p>
        <div class="hero-ctas">
          <a class="btn btn-light" href="/kontakt" data-link>Projekt anfragen</a>
          <a class="btn btn-outline" href="/leistungen" data-link>Leistungen ansehen</a>
          <a class="btn btn-outline" href="tel:+49242181325">Direkt anrufen</a>
        </div>
        <div class="hero-stats" aria-label="EICHE Fakten">
          <div class="stat"><strong>1913</strong><span>Meisterbetrieb</span></div>
          <div class="stat"><strong>3./4.</strong><span>Generation</span></div>
          <div class="stat"><strong>Düren</strong><span>Schillingsstraße 106</span></div>
        </div>
      </div>
    </section>
  `;
}

function aboutSection() {
  return `
    <section class="about-section" data-prompt-id="axion-about">
      <div class="section-inner">
        <div class="section-badge"><span class="badge-number">1</span><span>Aus Erfahrung wird es gut</span></div>
        <h2 class="about-heading display">Familienbetrieb mit Liebe zum Handwerk, hochwertigen Produkten und einem Blick für zeitgemäße Farbwelten.</h2>
        <div class="about-grid">
          <img class="media media-small" src="${images.house}" alt="Wohnhaus mit EICHE Malerarbeiten">
          <div class="about-card-copy">
            <p>EICHE geht exklusiv auf Kundenwünsche ein, setzt Ideen creativ um und arbeitet fachlich korrekt, sauber und termingerecht.</p>
            <a class="btn btn-dark" href="/team" data-link>Farb-Profis kennenlernen</a>
          </div>
          <img class="media media-large" src="${images.team}" alt="Team des EICHE Malerbetriebs">
        </div>
      </div>
    </section>
  `;
}

function servicesSection(limit = services.length) {
  return `
    <section class="services-section" id="leistungen" data-prompt-id="agency-services">
      <div class="section-inner">
        <h2 class="services-title">Leistungen</h2>
        <div class="service-list">
          ${services.slice(0, limit).map((service, index) => `
            <article class="service-row">
              <div class="service-number">${String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>${service.title}</h3>
                <p>${service.summary}</p>
              </div>
              <a class="circle-link" href="${service.path}" data-link aria-label="${service.title} ansehen">→</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function projectsSection() {
  const cards = [
    {
      index: "01",
      title: "Malerarbeiten",
      label: "Innenräume und Farbwirkung",
      href: "/leistungen/malerarbeiten",
      imgs: [images.room, "https://www.eiche-malerbetrieb.de/assets/images/8/malerarbeiten-eiche-dueren-002-475cb4fe.jpeg", "https://www.eiche-malerbetrieb.de/assets/images/3/malerarbeiten-eiche-dueren-003-c728f441.jpg"]
    },
    {
      index: "02",
      title: "Fassadenanstrich",
      label: "Schutz fuer Immobilien",
      href: "/leistungen/fassadenanstrich",
      imgs: [images.facade, images.facade2, "https://www.eiche-malerbetrieb.de/assets/images/b/fassadenanstrich-maler-eiche-dueren-003-290bec11.jpg"]
    },
    {
      index: "03",
      title: "Digitaldruck-Tapeten",
      label: "Motive für Wohn- und Geschäftsräume",
      href: "/leistungen/digitaldruck-tapeten",
      imgs: [images.digital, images.digital2, "https://www.eiche-malerbetrieb.de/assets/images/4/digitaldruck-003-2ea1dc80.jpg"]
    }
  ];
  return `
    <section class="projects-section" data-prompt-id="projects-catalog">
      <div class="section-inner">
        <h2 class="projects-title display">Farb-Projekte</h2>
        <div class="project-stack">
          ${cards.map((card) => `
            <article class="project-card">
              <div class="project-head">
                <div class="project-index">${card.index}</div>
                <div><h3>${card.title}</h3><span>${card.label}</span></div>
                <a class="btn btn-outline" href="${card.href}" data-link>Projekt ansehen</a>
              </div>
              <div class="project-images">
                <div class="project-col">
                  <img src="${card.imgs[0]}" alt="${card.title} Detail 1">
                  <img src="${card.imgs[1]}" alt="${card.title} Detail 2">
                </div>
                <img class="project-tall" src="${card.imgs[2]}" alt="${card.title} Detail 3">
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function testimonialsSection() {
  const item = testimonials[testimonialIndex];
  return `
    <section class="feedback-section" data-prompt-id="arceage-testimonial">
      <div class="section-inner">
        <div class="feedback-top">
          <h2>Kundenfeedback</h2>
          <a class="btn btn-outline" href="/bewertungen" data-link>Referenzen ansehen</a>
        </div>
        <div class="quote display">«${item.quote}»</div>
        <div class="feedback-controls">
          <div class="person">
            <img src="${item.avatar}" alt="${item.author}">
            <div><strong>${item.author}</strong><br><span>${item.title}</span></div>
          </div>
          <div class="arrow-buttons">
            <button class="arrow-button" type="button" data-testimonial-prev aria-label="Vorheriges Feedback">←</button>
            <button class="arrow-button" type="button" data-testimonial-next aria-label="Nächstes Feedback">→</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function faqSection() {
  const labels = { allgemein: "Allgemein", leistungen: "Leistungen", kontakt: "Kontakt" };
  return `
    <section class="faq-section" data-prompt-id="rocket-faq">
      <div class="section-inner">
        <div class="faq-header">
          <div>
            <span class="eyebrow">FAQ</span>
            <h2 class="display">Antworten auf Fragen, die vor einem Farbprojekt auftauchen.</h2>
          </div>
          <p>Die Fragen greifen Informationen aus den Leistungsseiten auf und bleiben bewusst praktisch: Projektstart, Kostenrahmen, Material, Kontakt.</p>
        </div>
        <div class="faq-grid">
          <div class="faq-tabs" role="tablist" aria-label="FAQ Kategorien">
            ${Object.keys(labels).map((key) => `
              <button type="button" class="faq-tab ${faqCategory === key ? "is-active" : ""}" data-faq-tab="${key}" role="tab" aria-selected="${faqCategory === key}">${labels[key]}</button>
            `).join("")}
          </div>
          <div class="accordion-list">
            ${faqGroups[faqCategory].map(([q, a], index) => `
              <article class="accordion-item ${index === 0 ? "is-open" : ""}">
                <button type="button" class="accordion-trigger" data-accordion-trigger aria-expanded="${index === 0}">
                  <span>${q}</span><span aria-hidden="true">⌄</span>
                </button>
                <div class="accordion-content">${a}</div>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactSection(compact = false) {
  return `
    <section class="contact-section" data-prompt-id="arceage-contact-us">
      <div class="section-inner">
        <div class="contact-panel">
          <h2 class="display">Lassen Sie uns Ihr Projekt besprechen.</h2>
          <p>${compact ? "Kurze Nachricht, schneller Rückruf." : "Nutzen Sie bequem das Kontaktformular. In dieser Testseite prüfen wir Eingaben lokal und zeigen eine direkte Bestätigung."}</p>
          <form class="form" data-contact-form novalidate>
            <div class="form-row">
              <div class="field">
                <label for="name">Ihr Name*</label>
                <input id="name" name="name" autocomplete="name" required placeholder="Wer schreibt uns?">
                <small data-error-for="name"></small>
              </div>
              <div class="field">
                <label for="email">E-Mail*</label>
                <input id="email" name="email" type="email" autocomplete="email" required placeholder="name@example.de">
                <small data-error-for="email"></small>
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <label for="phone">Telefon*</label>
                <input id="phone" name="phone" type="tel" autocomplete="tel" required placeholder="+49 2421 81325">
                <small data-error-for="phone"></small>
              </div>
              <div class="field">
                <label for="project">Projektart</label>
                <input id="project" name="project" placeholder="Malerarbeiten, Fassade, Tapeten ...">
                <small data-error-for="project"></small>
              </div>
            </div>
            <div class="field">
              <label for="message">Ihre Nachricht</label>
              <textarea id="message" name="message" placeholder="Was sollen wir für Sie vorbereiten?"></textarea>
              <small data-error-for="message"></small>
            </div>
            <button class="btn btn-dark" type="submit">Nachricht prüfen</button>
            <div class="form-message" data-form-message aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function pageHero(title, eyebrow, text, image = images.house) {
  return `
    <section class="page-hero" data-prompt-id="bold-studio">
      <div class="section-inner">
        <div>
          <span class="eyebrow">${eyebrow}</span>
          <h1 class="display">${title}</h1>
          <p>${text}</p>
          <div class="section-ctas">
            <a class="btn btn-light" href="/kontakt" data-link>Projekt anfragen</a>
            <a class="btn btn-outline" href="tel:+49242181325">Anrufen</a>
          </div>
        </div>
        <img class="media media-large" src="${image}" alt="${title}">
      </div>
    </section>
  `;
}

function homePage() {
  return [
    hero(),
    aboutSection(),
    servicesSection(),
    projectsSection(),
    testimonialsSection(),
    faqSection(),
    contactSection(true),
    footer()
  ].join("");
}

function servicesPage() {
  return [
    pageHero("Farb-Projekte", "Leistungsspektrum", "Malerarbeiten, Fassadenanstrich, Tapezierarbeiten, Digitaldruck, Holzschutz, Betonsanierung und wohngesunde Lehmfarben.", images.facade),
    servicesSection(),
    `<section class="route-section" data-prompt-id="projects-catalog"><div class="section-inner"><div class="detail-grid">
      ${services.map((service) => `
        <a class="detail-card" href="${service.path}" data-link>
          <img src="${service.image}" alt="${service.title}">
          <div><h3>${service.title}</h3><p>${service.detail}</p></div>
        </a>
      `).join("")}
    </div></div></section>`,
    faqSection(),
    footer()
  ].join("");
}

function serviceDetailPage(service) {
  return [
    pageHero(service.title, "Farb-Projekt", service.detail, service.image),
    `<section class="route-section" data-prompt-id="axion-about">
      <div class="section-inner">
        <div class="about-grid">
          <img class="media media-small" src="${service.image}" alt="${service.title}">
          <div class="about-card-copy">
            <div class="section-badge"><span class="badge-number">1</span><span>Beratung</span></div>
            <p>Vor Beginn wird geklärt, welche Wirkung, Beanspruchung und Materialqualität für Ihr Objekt sinnvoll ist.</p>
            <a class="btn btn-dark" href="/kontakt" data-link>Anfrage vorbereiten</a>
          </div>
          <img class="media media-large" src="${service.image}" alt="${service.title} Referenz">
        </div>
      </div>
    </section>`,
    `<section class="services-section" data-prompt-id="agency-services">
      <div class="section-inner">
        <h2 class="services-title">Ablauf</h2>
        <div class="service-list">
          ${["Projekt aufnehmen", "Material und Farbe festlegen", "Sauber ausführen", "Ergebnis übergeben"].map((step, index) => `
            <article class="service-row">
              <div class="service-number">${String(index + 1).padStart(2, "0")}</div>
              <div><h3>${step}</h3><p>Ein klarer Schritt im EICHE-Prozess für termingerechte und fachlich korrekte Umsetzung.</p></div>
              <a class="circle-link" href="/kontakt" data-link aria-label="Kontakt aufnehmen">→</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>`,
    contactSection(true),
    footer()
  ].join("");
}

function teamPage() {
  return [
    pageHero("Farb-Profis", "Unser Team", "Menschen mit Erfahrung, Lieblingsfarben und Verantwortung fuer gutes Handwerk.", images.team),
    aboutSection(),
    `<section class="route-section" data-prompt-id="projects-catalog">
      <div class="section-inner">
        <div class="team-grid">
          ${team.map(([name, title, photo]) => `
            <article class="team-member">
              <img src="${photo}" alt="${name}">
              <div><h3>${name}</h3><p>${title}</p></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>`,
    testimonialsSection(),
    footer()
  ].join("");
}

function colorWorldsPage() {
  const worlds = [
    ["Farb-Trends", "Aktuelle Farben für Wohnen, Arbeiten und Zusammenleben.", images.colorWorld],
    ["Farb-Welten", "Inspirationen von Berge bis Sylt fuer besondere Raumstimmungen.", images.colorWorld2],
    ["Farb-Konzepte", "Stimmige Raumkonzepte lassen jedes Zimmer anders wirken.", images.concept],
    ["Urlaubsservice", "Serviceideen fuer Renovierung, wenn Sie selbst unterwegs sind.", images.serviceHoliday],
    ["Steuersparservice", "Hinweise rund um Handwerkerleistungen und Service.", images.serviceTax],
    ["Wartung", "Pflege und Erhalt für Oberflächen, Fassaden und Werte.", images.serviceCare]
  ];
  return [
    pageHero("Farb-Welten", "Trends und Konzepte", "Farben können Räume vergrößern, Ruhe schaffen, Eleganz geben oder Energie setzen.", images.colorWorld),
    `<section class="route-section" data-prompt-id="projects-catalog">
      <div class="section-inner">
        <div class="gallery-grid">
          ${worlds.map(([title, text, img]) => `
            <article class="gallery-item">
              <img src="${img}" alt="${title}">
              <div><h3>${title}</h3><p>${text}</p></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>`,
    contactSection(true),
    footer()
  ].join("");
}

function contactPage() {
  return [
    pageHero("Kontakt", "Ihr Maler in Düren", "EICHE Malerbetrieb GmbH, Schillingsstraße 106, 52355 Düren.", images.house),
    `<section class="route-section" data-prompt-id="axion-about">
      <div class="section-inner">
        <div class="facts-grid">
          <div class="fact-box"><strong>Telefon</strong><a href="tel:+49242181325">+49 2421 81325</a><br><a href="tel:+491722677131">+49 172 26 77 131</a></div>
          <div class="fact-box"><strong>E-Mail</strong><a href="mailto:info@eiche-malerbetrieb.de">info@eiche-malerbetrieb.de</a></div>
          <div class="fact-box"><strong>Adresse</strong><a href="https://www.google.com/maps/search/?api=1&query=Schillingsstra%C3%9Fe%20106%2C%2052355%20D%C3%BCren" target="_blank" rel="noreferrer">Schillingsstraße 106, 52355 Düren</a></div>
        </div>
      </div>
    </section>`,
    contactSection(),
    footer()
  ].join("");
}

function certificatesPage() {
  const certs = [
    "https://www.eiche-malerbetrieb.de/assets/images/7/Urkunde-Johannes-Eiche-Seminar-KI-11-2025-e81d6f6c.png",
    "https://www.eiche-malerbetrieb.de/assets/images/f/Meisterbrief-8e67b2e2.jpg",
    "https://www.eiche-malerbetrieb.de/assets/images/9/Eifel-Award%202022-ce5aebcc.jpg",
    "https://www.eiche-malerbetrieb.de/assets/images/d/Qualit%C3%A4tssiegel%20familienfreundlicher%20Arbeitgeber%202022-9b758231.jpg"
  ];
  return [
    pageHero("Zertifikate", "Proof", "Nachweise und Auszeichnungen zeigen Kompetenz, Familienfreundlichkeit und kontinuierliche Entwicklung.", certs[1]),
    `<section class="route-section" data-prompt-id="projects-catalog"><div class="section-inner"><div class="certificate-grid">${certs.map((src) => `<img src="${src}" alt="EICHE Zertifikat">`).join("")}</div></div></section>`,
    footer()
  ].join("");
}

function reviewsPage() {
  return [
    pageHero("Kundenbewertungen", "Referenzen", "Referenzen zeigen, wie EICHE private und gewerbliche Projekte begleitet.", "https://www.eiche-malerbetrieb.de/files/bewertungen/kundenreferenzen4.jpeg"),
    testimonialsSection(),
    contactSection(true),
    footer()
  ].join("");
}

function simplePage(routeData) {
  return [
    pageHero(routeData.title, "EICHE", routeData.text, images.house),
    `<section class="route-section" data-prompt-id="axion-about"><div class="section-inner"><h2 class="about-heading display">${routeData.title}</h2><p style="max-width:760px;line-height:1.7;color:var(--muted)">${routeData.text}</p><div class="section-ctas"><a class="btn btn-dark" href="/kontakt" data-link>Kontakt aufnehmen</a><a class="btn btn-outline" href="/leistungen" data-link>Leistungen ansehen</a></div></div></section>`,
    footer()
  ].join("");
}

function renderRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const detail = services.find((service) => service.path === path);
  if (path === "/") return homePage();
  if (path === "/leistungen") return servicesPage();
  if (detail) return serviceDetailPage(detail);
  if (path === "/team" || path === "/roland-eiche" || path === "/katharina-eiche") return teamPage();
  if (path === "/farbwelten") return colorWorldsPage();
  if (path === "/kontakt") return contactPage();
  if (path === "/bewertungen") return reviewsPage();
  if (path === "/zertifikate") return certificatesPage();
  if (extraRoutes[path]) return simplePage(extraRoutes[path]);
  return `
    <section class="not-found">
      <div>
        <p class="eyebrow">404</p>
        <h1 class="display">Diese Route ist in der Testseite nicht angelegt.</h1>
        <div class="section-ctas" style="justify-content:center">
          <a class="btn btn-dark" href="/" data-link>Zur Startseite</a>
          <a class="btn btn-outline" href="/kontakt" data-link>Kontakt</a>
        </div>
      </div>
    </section>
    ${footer()}
  `;
}

function render() {
  document.getElementById("app").innerHTML = `<div class="app-shell">${nav()}${renderRoute()}</div>`;
  document.body.classList.remove("menu-open");
  bindInteractions();
  updateNav();
}

function bindInteractions() {
  document.querySelectorAll("a[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      event.preventDefault();
      route(href);
    });
  });

  document.querySelectorAll("[data-menu-open]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("[data-mobile-menu]")?.classList.add("is-open");
      document.body.classList.add("menu-open");
    });
  });

  document.querySelectorAll("[data-menu-close]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("[data-mobile-menu]")?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });

  document.querySelectorAll("[data-testimonial-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
      render();
      document.querySelector(".feedback-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-testimonial-next]").forEach((button) => {
    button.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      render();
      document.querySelector(".feedback-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-faq-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      faqCategory = button.getAttribute("data-faq-tab");
      render();
      document.querySelector(".faq-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-accordion-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const list = item?.parentElement;
      list?.querySelectorAll(".accordion-item").forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector("[data-accordion-trigger]")?.setAttribute("aria-expanded", "false");
        }
      });
      item?.classList.toggle("is-open");
      button.setAttribute("aria-expanded", item?.classList.contains("is-open") ? "true" : "false");
    });
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      validateForm(form);
    });
    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateForm(form, false));
      field.addEventListener("input", () => {
        const error = form.querySelector(`[data-error-for="${field.name}"]`);
        if (error) error.textContent = "";
        const msg = form.querySelector("[data-form-message]");
        if (msg) msg.textContent = "";
      });
    });
  });
}

function validateForm(form, showSuccess = true) {
  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());
  const errors = {
    name: values.name?.trim() ? "" : "Bitte Namen eintragen.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "") ? "" : "Bitte gültige E-Mail eintragen.",
    phone: /^\+?[\d\s\-()]{7,22}$/.test(values.phone || "") ? "" : "Bitte Telefonnummer eintragen.",
    project: "",
    message: ""
  };
  Object.entries(errors).forEach(([name, message]) => {
    const node = form.querySelector(`[data-error-for="${name}"]`);
    if (node) node.textContent = message;
  });
  const isValid = Object.values(errors).every((message) => !message);
  const msg = form.querySelector("[data-form-message]");
  if (msg && showSuccess) {
    msg.textContent = isValid
      ? "Danke. Die Eingaben sind gültig. In der Testseite wird nichts extern versendet."
      : "Bitte prüfen Sie die markierten Pflichtfelder.";
  }
  return isValid;
}

function updateNav() {
  const navNode = document.querySelector("[data-nav]");
  const apply = () => {
    navNode?.classList.toggle("is-solid", window.scrollY > 40);
    const lightTop = !document.querySelector(".hero, .page-hero");
    navNode?.classList.toggle("nav-on-light", lightTop);
  };
  apply();
}

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("popstate", render);

render();

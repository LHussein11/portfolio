// ---- Data ----
const translations = {
  sv: {
    navAbout: 'Om Mig', navStack: 'Tech Stack', navContact: 'Kontakt', langLabel: 'EN',
    heroKicker: 'Power Platform / CRM Developer · Stockholm',
    heroTitle: 'Välkommen!',
    heroP1: 'Jag heter Liban och är en Power Platform- och CRM-utvecklare baserad i Stockholm, med över tre års erfarenhet av att bygga affärsapplikationer och automatiseringar inom Microsofts ekosystem.',
    heroP2: 'Mitt fokus ligger på Power Apps, Power Automate, Dataverse och Power Fx — jag levererar helhetslösningar, bland annat i komplexa Dynamics 365 CRM-system inom Sales, Field Service och Customer Service.',
    heroP3: 'Jag är även bekväm med API:er och har grundläggande kunskaper i JavaScript, vilket hjälper mig att omvandla affärsbehov till fungerande, underhållbara lösningar.',
    cvButton: 'Hämta CV', expTitle: 'Erfarenhet', eduTitle: 'Utbildning', stackTitle: 'Tech Stack',
    contactTitle: 'Kontakta Mig', nameLabel: 'Namn', namePlaceholder: 'Ditt Namn',
    emailLabel: 'Email adress', emailPlaceholder: 'Email adress',
    messageLabel: 'Meddelande', messagePlaceholder: 'Ditt Meddelande', sendButton: 'Skicka Meddelande',
    sendingLabel: 'Skickar…', successMessage: 'Tack! Ditt meddelande har skickats.', errorMessage: 'Något gick fel. Försök igen.',
    footerNote: 'Byggd med omtanke.',
    contactHeading: 'Har du ett projekt i åtanke?',
    contactSubtitle: 'Fyll i formuläret så återkommer jag så snart jag kan.',
    locationText: 'Stockholm, Sverige',
    tabPowerPlatform: 'Power Platform', tabFrontend: 'Frontend', tabCrm: 'CRM', tabIntegrations: 'Integrations'
  },
  en: {
    navAbout: 'About', navStack: 'Tech Stack', navContact: 'Contact', langLabel: 'SV',
    heroKicker: 'Power Platform / CRM Developer · Stockholm',
    heroTitle: 'Welcome!',
    heroP1: "I'm Liban, a Power Platform and CRM developer based in Stockholm with three-plus years building business applications and automations across the Microsoft ecosystem.",
    heroP2: 'My toolkit centers on Power Apps, Power Automate, Dataverse and Power Fx — I design and ship end-to-end solutions, including work on complex Dynamics 365 CRM systems across Sales, Field Service and Customer Service.',
    heroP3: "I'm also comfortable working with APIs and have a working knowledge of JavaScript, which helps me turn business requirements into solutions that are functional and easy to maintain.",
    cvButton: 'Download CV', expTitle: 'Experience', eduTitle: 'Education', stackTitle: 'Tech Stack',
    contactTitle: 'Contact Me', nameLabel: 'Name', namePlaceholder: 'Your Name',
    emailLabel: 'Email address', emailPlaceholder: 'Email address',
    messageLabel: 'Message', messagePlaceholder: 'Your Message', sendButton: 'Send Message',
    sendingLabel: 'Sending…', successMessage: "Thanks! Your message has been sent.", errorMessage: 'Something went wrong. Please try again.',
    footerNote: 'Built with care.',
    contactHeading: 'Have a project in mind?',
    contactSubtitle: "Fill out the form and I'll get back to you as soon as I can — happy to talk SharePoint, Power Platform, or frontend work.",
    locationText: 'Stockholm, Sweden',
    tabPowerPlatform: 'Power Platform', tabFrontend: 'Frontend', tabCrm: 'CRM', tabIntegrations: 'Integrations'
  }
};

const experienceData = [
  { role: 'Software Developer', company: 'Navet AB', dates: 'Full-time · Apr 2025 – Present | Stockholm, Sweden', showLine: true },
  { role: 'Software Developer', company: 'Konica Minolta Nordics', dates: 'Full-time · Aug 2022 – Jul 2024 | Malmö, Sweden', showLine: true },
  { role: 'Frontend Developer', company: 'iMediaMatch', dates: 'Internship · Nov 2021 – Jan 2022 | Odense, Denmark', showLine: false }
];

const educationData = [
  { degree: 'Associate Degree in Informatics', school: 'Högskolan Väst', dates: '2019-09 – 2021-06', showLine: true },
  { degree: 'Bachelor of Economics', school: 'Örebro Universitet', dates: '2012-09 – 2015-06', showLine: false }
];

const stackData = {
  powerplatform: [
    { name: 'Power Apps', letter: 'P', color: 'oklch(0.58 0.19 320)' },
    { name: 'Power Automate', letter: 'A', color: 'oklch(0.6 0.18 255)' },
    { name: 'Dataverse', letter: 'D', color: 'oklch(0.64 0.14 150)' },
    { name: 'Power Fx', letter: 'F', color: 'oklch(0.58 0.2 350)' }
  ],
  frontend: [
    { name: 'React', letter: 'R', color: 'oklch(0.66 0.15 220)' },
    { name: 'JavaScript', letter: 'J', color: 'oklch(0.8 0.16 95)' },
    { name: 'APIs', letter: 'A', color: 'oklch(0.64 0.13 190)' }
  ],
  crm: [
    { name: 'Dynamics 365 Sales', letter: 'D', color: 'oklch(0.6 0.16 25)' },
    { name: 'Dynamics 365 Field Service', letter: 'D', color: 'oklch(0.6 0.16 25)' },
    { name: 'Dynamics 365 Customer Service', letter: 'D', color: 'oklch(0.6 0.16 25)' }
  ],
  integrations: [
    { name: 'Workato', letter: 'W', color: 'oklch(0.6 0.18 255)' }
  ]
};

// ---- State ----
let state = {
  dark: true,
  lang: 'sv',
  stackTab: 'powerplatform'
};

// ---- Render functions ----
function applyTranslations() {
  const t = translations[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  document.getElementById('lang-toggle').textContent = t.langLabel;
  document.documentElement.lang = state.lang;
}

function renderExperience() {
  const container = document.getElementById('experience-list');
  container.innerHTML = experienceData.map(job => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        ${job.showLine ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-card">
        <div class="card-role">${job.role}</div>
        <div class="card-company">${job.company}</div>
        <div class="card-dates">${job.dates}</div>
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('education-list');
  container.innerHTML = educationData.map(edu => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        ${edu.showLine ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-card">
        <div class="card-role">${edu.degree}</div>
        <div class="card-company">${edu.school}</div>
        <div class="card-dates">${edu.dates}</div>
      </div>
    </div>
  `).join('');
}

function renderStackTabs() {
  const t = translations[state.lang];
  const tabs = [
    { id: 'powerplatform', label: t.tabPowerPlatform },
    { id: 'frontend', label: t.tabFrontend },
    { id: 'crm', label: t.tabCrm },
    { id: 'integrations', label: t.tabIntegrations }
  ];
  const container = document.getElementById('stack-tabs');
  container.innerHTML = tabs.map(tab => `
    <button class="tab-btn ${state.stackTab === tab.id ? 'active' : ''}" data-tab="${tab.id}">${tab.label}</button>
  `).join('');
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.stackTab = btn.getAttribute('data-tab');
      renderStackTabs();
      renderTechList();
    });
  });
}

function renderTechList() {
  const container = document.getElementById('tech-list');
  const items = stackData[state.stackTab] || [];
  container.innerHTML = items.map(tech => `
    <div class="tech-card">
      <div class="tech-icon" style="background:${tech.color};">${tech.letter}</div>
      <span class="tech-name">${tech.name}</span>
    </div>
  `).join('');
}

function applyTheme() {
  document.body.classList.toggle('dark', state.dark);
  document.body.classList.toggle('light', !state.dark);
  document.getElementById('theme-toggle').textContent = state.dark ? '☀️' : '🌙';
}

// ---- Contact form (Formspree AJAX) ----
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const t = translations[state.lang];
  formStatus.className = 'form-status';
  formStatus.textContent = '';
  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = t.sendingLabel;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      formStatus.textContent = t.successMessage;
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      formStatus.textContent = t.errorMessage;
      formStatus.className = 'form-status error';
    }
  } catch (err) {
    formStatus.textContent = t.errorMessage;
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});

// ---- Event wiring ----
document.getElementById('theme-toggle').addEventListener('click', () => {
  state.dark = !state.dark;
  applyTheme();
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  state.lang = state.lang === 'sv' ? 'en' : 'sv';
  applyTranslations();
  renderStackTabs();
});

// ---- Init ----
applyTheme();
applyTranslations();
renderExperience();
renderEducation();
renderStackTabs();
renderTechList();

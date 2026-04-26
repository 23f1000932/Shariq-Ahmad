/* ============================================================
   DATA
============================================================ */
const skillsData = [
  {
    category: "Subject Expertise",
    icon: "fa-book-open",
    skills: ["Economics (Sr. Secondary)", "Social Science (Secondary)", "History", "Geography", "Civics", "Commerce"]
  },
  {
    category: "Teaching Methods",
    icon: "fa-chalkboard-teacher",
    skills: ["Smart Class Systems", "Digital Blackboards", "Lesson Planning", "Board Exam Prep", "Interactive Modules", "Holistic Learning"]
  },
  {
    category: "Academic Leadership",
    icon: "fa-sitemap",
    skills: ["Academic Coordination", "Curriculum Development", "Faculty Scheduling", "Curriculum Monitoring", "Student Assessment", "Performance Management"]
  },
  {
    category: "Soft Skills",
    icon: "fa-comments",
    skills: ["Verbal Communication", "Written Communication", "Time Management", "Organisation", "Scheduling", "Team Collaboration"]
  },
  {
    category: "Languages",
    icon: "fa-language",
    skills: ["Hindi (Native)", "English (Professional)", "Arabic (Elementary)"]
  }
];

const projectsData = [
  {
    title: "TGT Social Science & Academic Coordinator",
    period: "June 2025 – Present",
    place: "Sri Haldhar School and College",
    desc: [
      "Awarded \"Best Teacher\" (Senior Section) for the 2025–26 academic session.",
      "Managing school-wide academic operations including faculty scheduling and curriculum monitoring.",
      "Delivering specialised Social Science instruction for high-achieving student groups."
    ],
    tags: ["Social Science", "Academic Coordination", "Curriculum", "Leadership"]
  },
  {
    title: "PGT Economics — Senior Secondary Level",
    period: "April 2022 – June 2025",
    place: "R.S Global School",
    desc: [
      "Orchestrated the Economics curriculum for Classes 11 and 12, focusing on board exam preparation.",
      "Implemented interactive digital learning modules using Smart Class technology.",
      "Maintained a high-performance learning environment through effective classroom management."
    ],
    tags: ["Economics", "Smart Class", "Class 11 & 12", "Board Prep"]
  },
  {
    title: "TGT Social Studies — Secondary Level",
    period: "June 2019 – April 2020",
    place: "S.U Public School",
    desc: [
      "Developed comprehensive lesson plans for Classes 6, 7, and 8.",
      "Integrated reading and science skills into the social studies framework for holistic learning.",
      "Pioneered the use of digital blackboards to improve student retention and engagement."
    ],
    tags: ["Social Studies", "Digital Blackboard", "Lesson Planning", "Classes 6-8"]
  }
];

const certsData = [
  {
    title: "CTET Qualified — Paper I & II",
    issuer: "Central Board of Secondary Education",
    desc: "Successfully cleared the Central Teacher Eligibility Test for both primary (Paper I) and secondary (Paper II) levels — a nationally recognised qualification for teaching eligibility in India."
  },
  {
    title: "Bachelor of Education (B.Ed) — 78.24%",
    issuer: "Sam Higginbottom University (SHUATS) · 2022",
    desc: "Professional teacher training degree covering pedagogy, educational psychology, and subject-specific methodology, with distinction-level performance."
  },
  {
    title: "Master of Commerce (M.Com) — 66%",
    issuer: "Sam Higginbottom University (SHUATS) · 2019",
    desc: "Postgraduate degree providing deep expertise in Commerce, Accounting, Business Studies, and Economics — forming the academic backbone of classroom instruction."
  },
  {
    title: "AFCAT Qualified (Written) — 3 Times",
    issuer: "Indian Air Force",
    desc: "Cleared the Air Force Common Admission Test (Written) on three separate occasions, demonstrating exceptional aptitude, discipline, and intellectual rigour."
  },
  {
    title: "Bharat Scout and Guide Certificate",
    issuer: "Bharat Scouts and Guides",
    desc: "Recipient of the Special Introductory Course completion certificate, highlighting commitment to community service, leadership, and character development."
  },
  {
    title: "Volunteer Tutor — 10+ Years",
    issuer: "Independent · 2014 – Present",
    desc: "Over a decade of volunteer tutoring experience, helping students across diverse backgrounds build confidence and competence in Social Science and Commerce subjects."
  }
];

/* ============================================================
   RENDER: SKILLS
============================================================ */
const skillsGrid = document.getElementById('skills-grid');
skillsData.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'skill-category reveal';
  card.innerHTML = `
    <h3><i class="fas ${cat.icon}"></i> ${cat.category}</h3>
    <div class="skill-tags">
      ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
    </div>
  `;
  skillsGrid.appendChild(card);
});

/* ============================================================
   RENDER: EXPERIENCE
============================================================ */
const projectsGrid = document.getElementById('projects-grid');
projectsData.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.innerHTML = `
    <div class="proj-header">
      <i class="fas fa-chalkboard-teacher"></i>
      <span class="proj-period">${proj.period}</span>
    </div>
    <div class="proj-title">${proj.title}</div>
    <div class="proj-place">${proj.place}</div>
    <div class="proj-desc">
      <ul>${proj.desc.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="proj-tags">
      ${proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
    </div>
  `;
  projectsGrid.appendChild(card);
});

/* ============================================================
   RENDER: CERTIFICATIONS
============================================================ */
const timeline = document.getElementById('certs-timeline');
certsData.forEach(cert => {
  const card = document.createElement('div');
  card.className = 'cert-card reveal';
  card.innerHTML = `
    <div class="cert-title">${cert.title}</div>
    <div class="cert-issuer">${cert.issuer}</div>
    <div class="cert-desc">${cert.desc}</div>
  `;
  timeline.appendChild(card);
});

/* ============================================================
   TYPEWRITER
============================================================ */
const roles = [
  "Social Science Specialist",
  "Economics Educator",
  "Academic Coordinator",
  "CTET Qualified Teacher"
];
const tw = document.getElementById('typewriter');
let ri = 0, ci = 0, deleting = false;

function typewrite() {
  const role = roles[ri];
  if (!deleting) {
    tw.textContent = role.slice(0, ++ci);
    if (ci === role.length) { deleting = true; setTimeout(typewrite, 2000); return; }
    setTimeout(typewrite, 120);
  } else {
    tw.textContent = role.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(typewrite, 500); return; }
    setTimeout(typewrite, 70);
  }
}
document.addEventListener('DOMContentLoaded', typewrite);

/* ============================================================
   THEME TOGGLE (light default, dark-mode class for dark)
============================================================ */
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

const saved = localStorage.getItem('theme');
applyTheme(saved === 'dark');

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  applyTheme(!isDark);
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
});

/* ============================================================
   MOBILE MENU
============================================================ */
const menuBtn  = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('active'));
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ============================================================
   ACTIVE NAV LINK
============================================================ */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObs.observe(s));

/* ============================================================
   BACK TO TOP
============================================================ */
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btt.classList.toggle('visible', window.scrollY > 300);
});
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

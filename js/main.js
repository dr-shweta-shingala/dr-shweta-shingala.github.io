/* =================================================================
   Dr. Priya Sharma — Homeopathy Clinic  |  Main JavaScript
   ================================================================= */
"use strict";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const SERVICES = [
  { icon:'🤧', name:'Allergy & Sinus',       desc:'Chronic sneezing, nasal congestion, and hay fever treated at the immunological root for lasting relief.' },
  { icon:'🌸', name:'Skin Problems',          desc:'Eczema, psoriasis, acne, urticaria, and dermatitis addressed naturally without steroids or harsh chemicals.' },
  { icon:'💆', name:'Hair Fall & Loss',       desc:'Alopecia, thinning hair, and premature greying managed through constitutional remedies that nourish from within.' },
  { icon:'🧠', name:'Migraine & Headaches',   desc:'Recurrent migraines and tension headaches treated by identifying and eliminating individual triggers safely.' },
  { icon:'🧘', name:'Stress & Anxiety',       desc:'Depression, panic attacks, and emotional imbalances gently resolved using mind-body homeopathic principles.' },
  { icon:'🫁', name:'Digestive Issues',       desc:"IBS, acidity, bloating, and chronic constipation healed by restoring the body's natural digestive balance." },
  { icon:'🦴', name:'Joint Pain & Arthritis', desc:'Osteoarthritis, rheumatoid arthritis, and gout managed with anti-inflammatory constitutional remedies.' },
  { icon:'👶', name:'Child Care',             desc:'Safe and gentle care for colic, recurrent infections, bedwetting, ADHD, and childhood developmental issues.' },
  { icon:'🌺', name:"Women's Health",         desc:'PCOD, hormonal imbalance, menstrual irregularities, and menopause symptoms treated holistically and naturally.' },
  { icon:'🛡️', name:'Immunity Support',      desc:'Strengthen your immune system and reduce the frequency and severity of recurring illnesses year-round.' },
];

const WHY = [
  { icon:'🍃', title:'100% Natural Remedies',   desc:'Every remedy is derived from natural plant, mineral, or animal sources — no synthetic chemicals, no toxins, just pure healing from nature.' },
  { icon:'⚡', title:'Minimal Side Effects',    desc:'Homeopathic medicines are highly diluted and energized, making them safe for infants, pregnant women, the elderly, and sensitive individuals.' },
  { icon:'🎯', title:'Personalized Treatment',  desc:'We treat the whole person, not just the disease. Every consultation is thorough and individualized — your remedy is unique to you.' },
  { icon:'♾️', title:'Long-Term Wellness',      desc:'By treating the root cause rather than suppressing symptoms, homeopathy delivers lasting results that go beyond temporary relief.' },
  { icon:'👶', title:'Safe for All Ages',       desc:'From newborns to centenarians, homeopathic care is universally safe and can be used alongside conventional medicine without interactions.' },
];

const FAQS = [
  {
    q: 'Is homeopathy scientifically proven and effective?',
    a: 'Homeopathy has been practiced for over 200 years and is used by millions worldwide. Numerous clinical studies have demonstrated its effectiveness for a range of conditions. It is recognized by the WHO as the second-largest therapeutic system in the world. Our approach combines classical homeopathic principles with a thorough understanding of modern medicine.',
  },
  {
    q: 'Is homeopathy safe for children and infants?',
    a: 'Yes — homeopathy is one of the safest medical systems for children. The remedies are highly diluted, completely non-toxic, and have no harsh side effects. They are available in sweet-tasting pills that children accept readily. Conditions like colic, ear infections, recurrent colds, and developmental issues respond particularly well.',
  },
  {
    q: 'How long does homeopathic treatment typically take?',
    a: 'Treatment duration depends on the nature and chronicity of the condition. Acute conditions (cold, fever, injuries) often respond within hours to days. Chronic conditions that have developed over months or years naturally require longer treatment — typically 3 to 12 months — but patients usually notice improvement within the first few weeks.',
  },
  {
    q: 'Can homeopathy be taken alongside conventional medications?',
    a: 'Absolutely. Homeopathic remedies are safe to use alongside allopathic medicines and do not interfere with them. Many patients use homeopathy as a complementary approach to manage side effects of conventional treatment or to accelerate recovery. Always inform both your doctors about all treatments you are receiving.',
  },
  {
    q: 'Does homeopathy have any side effects?',
    a: 'Homeopathic remedies are prepared through serial dilution and succussion, rendering them free of toxic side effects. Occasionally, patients experience a brief initial "healing aggravation" — a temporary intensification of symptoms that is actually a positive sign indicating the remedy is working. This passes quickly and is followed by significant improvement.',
  },
  {
    q: 'What conditions can homeopathy treat effectively?',
    a: 'Homeopathy has a broad scope covering allergies, skin disorders, respiratory conditions, digestive issues, hormonal imbalances, autoimmune diseases, mental health concerns, chronic pain, pediatric ailments, and much more. It is especially effective for conditions where conventional medicine offers only symptomatic relief without addressing the underlying cause.',
  },
];

/* ─────────────────────────────────────────────────────────────────
   DOM RENDERING — Services, Why Choose, FAQ
───────────────────────────────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('servGrid');
  if (!grid) return;
  SERVICES.forEach((s, i) => {
    const d = i < 2 ? 'd1' : i < 4 ? 'd2' : i < 6 ? 'd3' : i < 8 ? 'd4' : 'd5';
    grid.insertAdjacentHTML('beforeend', `
      <article class="srv-card reveal ${d}" role="article">
        <div class="srv-ico">${s.icon}</div>
        <div class="srv-name">${s.name}</div>
        <p  class="srv-desc">${s.desc}</p>
        <span class="srv-more">Learn more →</span>
      </article>`);
  });
}

function renderWhy() {
  const grid = document.getElementById('whyGrid');
  if (!grid) return;
  WHY.forEach((w, i) => {
    const d = ['d1','d2','d3','d4','d5'][i] || '';
    grid.insertAdjacentHTML('beforeend', `
      <div class="why-card reveal ${d}">
        <div class="why-ico">${w.icon}</div>
        <div class="why-title">${w.title}</div>
        <p   class="why-desc">${w.desc}</p>
      </div>`);
  });
}

function renderFAQ() {
  const wrap = document.getElementById('faqWrap');
  if (!wrap) return;
  FAQS.forEach((f, i) => {
    wrap.insertAdjacentHTML('beforeend', `
      <div class="faq-item reveal d${(i % 5) + 1}" id="faq-item-${i}">
        <button class="faq-q" aria-expanded="false" onclick="toggleFAQ(${i})">
          <span class="faq-q-txt">${f.q}</span>
          <span class="faq-tog" aria-hidden="true">+</span>
        </button>
        <div class="faq-a" role="region">
          <div class="faq-a-inner">${f.a}</div>
        </div>
      </div>`);
  });
}

/* FAQ accordion — only one open at a time */
function toggleFAQ(idx) {
  document.querySelectorAll('.faq-item').forEach((el, i) => {
    const isTarget = i === idx;
    const willOpen  = isTarget && !el.classList.contains('open');
    el.classList.toggle('open', isTarget && willOpen);
    el.querySelector('.faq-q').setAttribute('aria-expanded', String(isTarget && willOpen));
  });
}
/* Make it globally accessible for inline onclick */
window.toggleFAQ = toggleFAQ;

/* ─────────────────────────────────────────────────────────────────
   NAVBAR — scroll effect + CTA reveal + progress bar
───────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const scrollBar = document.getElementById('scroll-bar');
  const navCta    = document.getElementById('navCta');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);

    if (navCta) {
      navCta.style.display = (scrolled && window.innerWidth > 768) ? 'inline-flex' : 'none';
    }

    if (scrollBar) {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      scrollBar.style.width = pct + '%';
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('navDrawer');
  if (!hamburger || !navDrawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navDrawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

/* Exposed so mobile menu links can close the drawer */
function closeDrawer() {
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('navDrawer');
  if (!navDrawer || !hamburger) return;
  navDrawer.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
window.closeDrawer = closeDrawer;

/* ─────────────────────────────────────────────────────────────────
   SCROLL REVEAL  (IntersectionObserver)
───────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────────────────────────────
   COUNTER ANIMATION  (KPI numbers in hero)
───────────────────────────────────────────────────────────────── */
function animCount(el, target) {
  let current = 0;
  const step  = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = current + '+';
    }
  }, 40);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const val = parseInt(e.target.dataset.count, 10);
        animCount(e.target, val);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────────────────────────────
   CAL.COM INLINE EMBED
   Replace 'your-cal-username/consultation' with your actual Cal.com
   event link, e.g. 'drpriyasharma/30min'
───────────────────────────────────────────────────────────────── */
function initCalEmbed() {
  /* ── Load Cal.com embed script ── */
  (function (C, A, L) {
    const p = (a, ar) => a.q.push(ar);
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar  = arguments;
      if (!cal.loaded) {
        cal.ns  = {};
        cal.q   = cal.q || [];
        const s = d.createElement('script');
        s.src   = A;
        s.async = true;
        d.head.appendChild(s);
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const ns  = ar[1];
        api.q = api.q || [];
        if (typeof ns === 'string') {
          cal.ns[ns] = cal.ns[ns] || api;
          p(cal.ns[ns], ar);
          p(cal, ['-init-namespace', ns]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  /* ── Initialise Cal with brand colour ── */
  window.Cal('init', { origin: 'https://cal.com' });

  /* ── Render inline calendar in #cal-booking ── */
  window.Cal('inline', {
    elementOrSelector: '#cal-booking',
    /*
     * ⬇ REPLACE THIS with your Cal.com event link
     *   Format: "your-username/event-type-slug"
     *   Example: "drpriyasharma/consultation"
     */
    calLink: 'dr.shweta-shingala/30min',
    config: {
      layout: 'month_view',
    },
  });

  /* ── Hide loading spinner once Cal.com iframe appears ── */
  const calContainer = document.getElementById('cal-booking');
  if (calContainer) {
    const calObserver = new MutationObserver(() => {
      if (calContainer.querySelector('iframe')) {
        const loader = calContainer.querySelector('.cal-loading');
        if (loader) loader.remove();
        calObserver.disconnect();
      }
    });
    calObserver.observe(calContainer, { childList: true, subtree: true });
  }

  /* ── Apply brand theming ── */
  window.Cal('ui', {
    styles: {
      branding: { brandColor: '#2D9E5F' },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

/* ─────────────────────────────────────────────────────────────────
   THREE.JS HERO 3‑D ANIMATION
───────────────────────────────────────────────────────────────── */
function initThreeJS() {
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded — skipping hero animation');
    return;
  }

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const wrap = canvas.parentElement;

  const W = () => wrap.clientWidth;
  const H = () => wrap.clientHeight;

  /* ── Renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W(), H());
  renderer.setClearColor(0x000000, 0);

  /* ── Scene + Camera ── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, W() / H(), 0.1, 100);
  camera.position.set(0, 0, 9);

  /* ── Lights ── */
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));

  const pl1 = new THREE.PointLight(0x3DB870, 2.5, 25);
  pl1.position.set(6, 6, 5);
  scene.add(pl1);

  const pl2 = new THREE.PointLight(0x4ECDC4, 1.8, 22);
  pl2.position.set(-6, -4, 3);
  scene.add(pl2);

  const pl3 = new THREE.PointLight(0xA8E6CF, 1.0, 18);
  pl3.position.set(0, 8, -2);
  scene.add(pl3);

  /* ── DNA Double Helix ── */
  const dnaGroup = new THREE.Group();
  const N = 70, RADIUS = 1.75, HEIGHT = 10, TURNS = 3.5;

  const matA = new THREE.MeshPhongMaterial({
    color: 0x2D9E5F, emissive: 0x1B6B3A, emissiveIntensity: .25, shininess: 90,
  });
  const matB = new THREE.MeshPhongMaterial({
    color: 0x4ECDC4, emissive: 0x2D9E9A, emissiveIntensity: .25, shininess: 90,
  });
  const sGeo = new THREE.SphereGeometry(0.11, 10, 10);

  const strandA = [], strandB = [];

  for (let i = 0; i < N; i++) {
    const t  = i / (N - 1);
    const a  = t * Math.PI * 2 * TURNS;
    const y  = (t - 0.5) * HEIGHT;
    const xa = Math.cos(a) * RADIUS,         za = Math.sin(a) * RADIUS;
    const xb = Math.cos(a + Math.PI) * RADIUS, zb = Math.sin(a + Math.PI) * RADIUS;

    const sA = new THREE.Mesh(sGeo, matA);
    sA.position.set(xa, y, za);
    dnaGroup.add(sA);
    strandA.push(new THREE.Vector3(xa, y, za));

    const sB = new THREE.Mesh(sGeo, matB);
    sB.position.set(xb, y, zb);
    dnaGroup.add(sB);
    strandB.push(new THREE.Vector3(xb, y, zb));
  }

  /* Cross rungs */
  const rungMat = new THREE.LineBasicMaterial({ color: 0xA8E6CF, transparent: true, opacity: .55 });
  for (let i = 0; i < N; i += 4) {
    dnaGroup.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([strandA[i], strandB[i]]),
      rungMat
    ));
  }

  /* Spine lines */
  const spineA = new THREE.LineBasicMaterial({ color: 0x3DB870, transparent: true, opacity: .4 });
  const spineB = new THREE.LineBasicMaterial({ color: 0x4ECDC4, transparent: true, opacity: .4 });
  dnaGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(strandA), spineA));
  dnaGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(strandB), spineB));

  scene.add(dnaGroup);

  /* ── Floating Medicine Globules ── */
  const GLOB_COLORS = [0xA8E6CF, 0x4ECDC4, 0x3DB870, 0xD4F5E9, 0x80CBC4];
  const globules = [];

  for (let i = 0; i < 22; i++) {
    const r   = Math.random() * 0.18 + 0.07;
    const mat = new THREE.MeshPhongMaterial({
      color:       GLOB_COLORS[i % GLOB_COLORS.length],
      transparent: true,
      opacity:     Math.random() * 0.45 + 0.25,
      shininess:   140,
    });
    const mesh  = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 12), mat);
    const dist  = Math.random() * 3.5 + 2.8;
    const theta = Math.random() * Math.PI * 2;
    const phi   = (Math.random() - 0.5) * Math.PI;
    mesh.position.set(
      dist * Math.cos(phi) * Math.cos(theta),
      (Math.random() - 0.5) * 7,
      dist * Math.cos(phi) * Math.sin(theta)
    );
    mesh.userData = {
      speed:  Math.random() * 0.6 + 0.3,
      phase:  Math.random() * Math.PI * 2,
      baseY:  mesh.position.y,
      rotSpd: (Math.random() - 0.5) * 0.02,
    };
    scene.add(mesh);
    globules.push(mesh);
  }

  /* ── Background Particle Field ── */
  const PC  = window.innerWidth < 600 ? 180 : 480;
  const pos = new Float32Array(PC * 3);
  const col = new Float32Array(PC * 3);

  for (let i = 0; i < PC; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 22;
    pos[i*3+1] = (Math.random() - 0.5) * 22;
    pos[i*3+2] = (Math.random() - 0.5) * 14 - 5;
    const c = new THREE.Color().setHSL(Math.random() * 0.18 + 0.32, 0.65, 0.65);
    col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: .045, vertexColors: true, transparent: true, opacity: .65,
  }));
  scene.add(particles);

  /* ── Orbital Torus Rings ── */
  const ringObjects = [];
  [[3.8, 0x4ECDC4, 0.18], [4.4, 0xA8E6CF, 0.10], [5.0, 0x3DB870, 0.07]].forEach(([r, c, o], i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, 0.022, 8, 80),
      new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o })
    );
    ring.rotation.set(Math.PI / 2 + i * 0.28, 0, i * 0.42);
    ring.userData.rotSpeed = 0.0008 + i * 0.0004;
    scene.add(ring);
    ringObjects.push(ring);
  });

  /* ── Mouse / Touch Parallax ── */
  let mx = 0, my = 0, tRx = 0, tRy = 0;

  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mx = (e.touches[0].clientX / window.innerWidth  - 0.5) * 2;
      my = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
    }
  }, { passive: true });

  /* ── Animation Loop ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;

    /* DNA */
    dnaGroup.rotation.y = t * 0.28;
    dnaGroup.position.y = Math.sin(t * 0.4) * 0.28;

    /* Pulsing lights */
    pl1.intensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    pl2.intensity = 1.8 + Math.cos(t * 0.5) * 0.4;

    /* Globules */
    globules.forEach(g => {
      g.position.y = g.userData.baseY + Math.sin(t * g.userData.speed + g.userData.phase) * 0.9;
      g.rotation.x += g.userData.rotSpd;
      g.rotation.z += g.userData.rotSpd * 0.7;
    });

    /* Rings */
    ringObjects.forEach(r => {
      r.rotation.z += r.userData.rotSpeed;
      r.rotation.x += r.userData.rotSpeed * 0.5;
    });

    /* Particle drift */
    particles.rotation.y = t * 0.018;
    particles.rotation.x = t * 0.009;

    /* Smooth mouse parallax */
    tRx += (my * 0.18 - tRx) * 0.04;
    tRy += (mx * 0.18 - tRy) * 0.04;
    scene.rotation.x = tRx;
    scene.rotation.y = tRy;

    renderer.render(scene, camera);
  }
  animate();

  /* ── Resize Handler ── */
  window.addEventListener('resize', () => {
    renderer.setSize(W(), H());
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
  });
}

/* ─────────────────────────────────────────────────────────────────
   TOAST HELPER
───────────────────────────────────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const txt = toast.querySelector('.toast-txt');
  if (txt && msg) txt.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ─────────────────────────────────────────────────────────────────
   BOOTSTRAP — run everything when DOM is ready
───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderWhy();
  renderFAQ();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initCalEmbed();
  initThreeJS();   /* Three.js must be loaded before this script */
});

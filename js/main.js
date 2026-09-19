/* =================================================================
   Dr. Shweta Shingala — Homeopathy Clinic  |  Main JavaScript
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
   PRELOADER — counts up, then reveals the site
───────────────────────────────────────────────────────────────── */
function initPreloader() {
  const pre     = document.getElementById('preloader');
  const countEl = document.getElementById('preCount');
  if (!pre || !countEl) return;

  const duration = 1400;
  const start    = performance.now();

  function tick(now) {
    const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
    countEl.textContent = pct;
    if (pct < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => pre.classList.add('done'), 250);
    }
  }
  requestAnimationFrame(tick);
}

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
   3D POINTER TILT  (service & why cards)
   Fine-pointer, hover-capable devices only, and skipped entirely
   under prefers-reduced-motion — a subtle perspective tilt that
   follows the cursor, resetting smoothly via the existing CSS
   transition on mouseleave.
───────────────────────────────────────────────────────────────── */
function initCardTilt() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reducedMotion) return;

  document.querySelectorAll('.srv-card, .why-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
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
      branding: { brandColor: '#2F6B45' },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

/* ─────────────────────────────────────────────────────────────────
   HERO EMBLEM TILT
   The emblem is the real logo artwork (assets/emblem.svg), so it stays
   pixel-exact at any size. Depth comes from tilting it in CSS 3D
   rather than rebuilding it as geometry — a rebuilt model could never
   match the artwork, and a flat badge design reads badly once it turns
   far anyway. The tilt is small and bounded for the same reason.

   Idle float lives in CSS; this only takes over while the pointer is
   actually over the stage. Skipped on touch and under reduced-motion.
───────────────────────────────────────────────────────────────── */
function initEmblemTilt() {
  const stage = document.getElementById('emblemStage');
  if (!stage) return;
  const art = stage.querySelector('.emblem3d');
  if (!art) return;

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reducedMotion) return;

  const MAX = 9;   /* degrees — beyond this the flat artwork starts to skew */

  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width  - 0.5;
    const py = (e.clientY - r.top)  / r.height - 0.5;
    art.classList.add('steering');
    art.style.transform =
      `translateY(${(-py * 6).toFixed(1)}px) ` +
      `rotateX(${(-py * 2 * MAX).toFixed(2)}deg) ` +
      `rotateY(${(px * 2 * MAX).toFixed(2)}deg)`;
  }, { passive: true });

  stage.addEventListener('pointerleave', () => {
    art.classList.remove('steering');
    art.style.transform = '';
  }, { passive: true });
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
  initPreloader();
  renderServices();
  renderWhy();
  renderFAQ();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initCardTilt();  /* after renderServices()/renderWhy() so the cards exist */
  initCalEmbed();
  initEmblemTilt();
});

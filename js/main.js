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

  /* Every badge in the stage gets the same treatment. Build the
     extrusion behind each face: copies of the same SVG (one network
     fetch each, cached) stepped back in Z and progressively darkened,
     so the badge has a visible side wall when it tilts. Injected rather
     than authored in markup so the page still shows the plain logos
     with JS off. */
  const stacks = Array.prototype.slice.call(stage.querySelectorAll('.emblem-stack'));
  stacks.forEach((stack, idx) => {
    const face = stack.querySelector('.emblem-img');
    if (!face) return;
    const frag = document.createDocumentFragment();
    for (let i = DEPTH_LAYERS; i >= 1; i--) {
      const layer = document.createElement('img');
      layer.src = face.getAttribute('src');
      layer.alt = '';
      layer.setAttribute('aria-hidden', 'true');
      layer.className = 'emblem-depth';
      /* darkest at the back, easing toward the lit face */
      const k = i / DEPTH_LAYERS;
      layer.style.transform = `translateZ(${(-i * DEPTH_STEP).toFixed(2)}px)`;
      layer.style.filter = `brightness(${(1 - 0.5 * k).toFixed(3)}) saturate(${(1 - 0.25 * k).toFixed(3)})`;
      frag.appendChild(layer);
    }
    /* Only the bottom badge gets a contact shadow. On the upper one it
       fell straight onto the badge below it, which read as grime rather
       than depth. */
    if (idx === stacks.length - 1) {
      const shadow = document.createElement('div');
      shadow.className = 'emblem-shadow';
      shadow.setAttribute('aria-hidden', 'true');
      frag.appendChild(shadow);
    }
    stack.insertBefore(frag, face);   /* behind the crisp face */
  });

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reducedMotion) return;

  const MAX = 13;   /* degrees — enough to show the side wall, short of skewing the art */
  /* The idle float's first keyframe. Handing control back at exactly this
     pose lets the CSS animation resume without a jump. */
  const REST_POSE = 'translateY(0px) rotateX(2deg) rotateY(-6deg)';
  let releaseTimer = null;

  /* Current tilt in degrees, shared with the scatter so it can reproduce
     the extrusion on its own canvas at the same lean. Seeded with the
     idle float's first keyframe. */
  const tilt = { rx: 2, ry: -6 };

  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width  - 0.5;
    const py = (e.clientY - r.top)  / r.height - 0.5;

    if (!art.classList.contains('steering')) {
      /* Freeze the float at its current pose before killing it. Without
         this the animation is cut mid-cycle and the badge snaps from
         wherever it was drifting straight to the pointer pose. */
      const pose = getComputedStyle(art).transform;
      if (pose && pose !== 'none') art.style.transform = pose;
      art.classList.add('steering');
      void art.offsetWidth;   /* commit the frozen pose before it transitions */
    }
    clearTimeout(releaseTimer);
    art.classList.remove('releasing');

    tilt.rx = -py * 2 * MAX;
    tilt.ry = px * 2 * MAX;
    art.style.transform =
      `translateY(${(-py * 6).toFixed(1)}px) ` +
      `rotateX(${tilt.rx.toFixed(2)}deg) ` +
      `rotateY(${tilt.ry.toFixed(2)}deg)`;
  }, { passive: true });

  stage.addEventListener('pointerleave', () => {
    /* Glide to the float's start pose, then hand back, so the animation
       picks up from where we left it rather than snapping to 0%. */
    clearTimeout(releaseTimer);
    art.classList.add('releasing');
    art.style.transform = REST_POSE;
    tilt.rx = 2; tilt.ry = -6;
    releaseTimer = setTimeout(() => {
      art.classList.remove('steering', 'releasing');
      art.style.transform = '';
    }, 340);
  }, { passive: true });

  stacks.forEach(stack => {
    const face = stack.querySelector('.emblem-img');
    if (face) initEmblemScatter(stage, stack, face, tilt);
  });
}

/* ─────────────────────────────────────────────────────────────────
   HERO EMBLEM SCATTER
   Resting the cursor on the badge disintegrates the whole emblem into
   pixels and holds it there; moving off reassembles it. The cursor also
   shoves the pixels nearest it, so the cloud reacts as you move, but
   the scatter itself is driven by presence, not by movement — an
   earlier version decayed the moment you stopped, which read as the
   effect breaking.

   Every particle has its own scatter destination, and the spring pulls
   toward `home + destination × hover` rather than toward home, so the
   whole image comes apart instead of only a ring around the cursor.

   At rest the canvas is dropped entirely and the crisp SVG shows, so
   the logo is full resolution whenever it isn't being touched. Built
   lazily on first hover.
───────────────────────────────────────────────────────────────── */
const DEPTH_LAYERS = 8, DEPTH_STEP = 1.5;   /* ≈12px of badge thickness */

function initEmblemScatter(stage, stack, face, tilt) {
  const canvas = document.createElement('canvas');
  canvas.className = 'emblem-particles';
  canvas.setAttribute('aria-hidden', 'true');
  stack.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  /* Rasterised copy of the SVG, reused as the crisp base while parts of
     the emblem are still assembled. */
  const base = document.createElement('canvas');
  const bctx = base.getContext('2d');

  /* Scratch copy of the face with the scattered cells already punched
     out, and a dark silhouette derived from it each frame. The CSS depth
     layers are eight copies of the full artwork, which is fine behind an
     opaque face but reads as a second logo once holes open; a solid
     silhouette is what the side wall of an extruded badge looks like. */
  const tmp = document.createElement('canvas');
  const tctx = tmp.getContext('2d');
  const silh = document.createElement('canvas');
  const sctx = silh.getContext('2d');

  let parts = [], cell = 4, dpr = 1, pad = 0;
  let built = false, failed = false, active = false, rafId = null;
  let hover = 0, hoverTarget = 0;
  let px = -1e4, py = -1e4;

  const SPRING = 0.10;
  const FRICTION = 0.82;
  const PUSH_RADIUS = 66;   /* CSS px — keep the disturbed patch clearly local */

  function build() {
    built = true;
    /* offsetWidth/Height, not getBoundingClientRect: the badge sits in a
       rotated 3D container, and the rect reports the transformed bounding
       box. Sizing the canvas from that gave it dimensions that didn't
       match its own layout box, so the bitmap got rescaled. */
    const artWc = face.offsetWidth;
    const artHc = face.offsetHeight;
    if (!artWc || !face.complete) { built = false; return false; }

    dpr = Math.min(window.devicePixelRatio || 1, 2);

    /* Size the canvas from whole CSS pixels and derive the backing store
       from that, so backing === css × dpr exactly. Sizing it off the
       percentage box left the two a pixel or so apart, the browser
       rescaled the whole bitmap, and the canvas read as slightly smaller
       and softer than the <img> — half of the visible handoff. */
    const padWc = Math.round(artWc * 0.25);
    const padHc = Math.round(artHc * 0.25);
    const boxWc = artWc + padWc * 2;
    const boxHc = artHc + padHc * 2;

    canvas.style.left = -padWc + 'px';
    canvas.style.top = -padHc + 'px';
    canvas.style.width = boxWc + 'px';
    canvas.style.height = boxHc + 'px';

    canvas.width = base.width = Math.round(boxWc * dpr);
    canvas.height = base.height = Math.round(boxHc * dpr);

    const artW = Math.round(artWc * dpr);
    const artH = Math.round(artHc * dpr);
    pad = Math.round(padWc * dpr);
    const padY = Math.round(padHc * dpr);

    bctx.clearRect(0, 0, base.width, base.height);
    bctx.drawImage(face, pad, padY, artW, artH);

    tmp.width = silh.width = base.width;
    tmp.height = silh.height = base.height;

    let data;
    try {
      data = bctx.getImageData(0, 0, base.width, base.height).data;
    } catch (err) {
      /* A tainted canvas would mean the SVG isn't same-origin; leave the
         static logo alone rather than showing nothing. */
      console.warn('Emblem scatter unavailable (canvas read blocked)', err);
      failed = true;
      return false;
    }

    /* Every cell is scanned in full, and a cell counts as long as any
       pixel in it is even faintly visible. Sampling only the cell's
       top-left pixel and demanding alpha >= 40 meant the artwork's
       anti-aliased edges never became particles: the solid interior flew
       away while a ghost outline of every shape stayed behind in the
       base bitmap, which is the border left around the scatter. Colour
       is the alpha-weighted average and the particle keeps its own
       coverage, so soft edges stay soft instead of turning chunky. */
    const W = base.width, H = base.height;
    cell = Math.max(2, Math.round(2 * dpr));
    parts = [];
    for (let y = 0; y < H; y += cell) {
      const yEnd = Math.min(y + cell, H);
      for (let x = 0; x < W; x += cell) {
        const xEnd = Math.min(x + cell, W);
        let rs = 0, gs = 0, bs = 0, as = 0, peak = 0, n = 0;
        for (let yy = y; yy < yEnd; yy++) {
          let i = (yy * W + x) * 4;
          for (let xx = x; xx < xEnd; xx++, i += 4) {
            const a = data[i + 3];
            if (a > peak) peak = a;
            rs += data[i] * a; gs += data[i + 1] * a; bs += data[i + 2] * a;
            as += a; n++;
          }
        }
        if (peak < 8) continue;
        const wsum = as || 1;
        const ang = Math.random() * Math.PI * 2;
        const dist = (14 + Math.random() * 86) * dpr;
        parts.push({
          x, y,
          fill: `rgba(${Math.round(rs / wsum)},${Math.round(gs / wsum)},${Math.round(bs / wsum)},` +
                `${(as / n / 255).toFixed(3)})`,
          sx: Math.cos(ang) * dist,   /* random component of the flight */
          sy: Math.sin(ang) * dist,
          dist,                        /* magnitude, for the outward burst */
          lag: 0.6 + Math.random() * 0.4,
          ox: 0, oy: 0, vx: 0, vy: 0,
        });
      }
    }
    if (!parts.length) { failed = true; return false; }
    return true;
  }

  const live = [];   /* reused each frame; avoids per-frame allocation */

  /* Renders whatever is currently in `live`. Shared by the loop and by
     wake(), so the very first painted frame already carries the
     extrusion — drawing just the face there flashed a flat badge for a
     frame, since the class has already hidden the CSS depth layers. */
  function paint() {
    /* Punch the holes first, into a scratch copy of the face. The
       extrusion is then derived from what's *left*, so it can't outlive
       the artwork above it. Building it from the full face instead left
       a dark fringe tracing every shape: the silhouette copies are
       scaled and offset, so they spill past the face's own footprint,
       and no particle exists out there to clear them. */
    tctx.clearRect(0, 0, tmp.width, tmp.height);
    tctx.drawImage(base, 0, 0);
    for (let i = 0; i < live.length; i++) {
      const q = live[i];
      tctx.clearRect(q.x, q.y, cell, cell);
    }

    sctx.clearRect(0, 0, silh.width, silh.height);
    sctx.drawImage(tmp, 0, 0);
    sctx.globalCompositeOperation = 'source-in';
    sctx.fillStyle = '#123F22';
    sctx.fillRect(0, 0, silh.width, silh.height);
    sctx.globalCompositeOperation = 'source-over';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2, cy = canvas.height / 2;
    const rxr = (tilt ? tilt.rx : 0) * Math.PI / 180;
    const ryr = (tilt ? tilt.ry : 0) * Math.PI / 180;
    for (let i = DEPTH_LAYERS; i >= 1; i--) {
      const d = i * DEPTH_STEP * dpr;
      const s = 900 / (900 + d);
      const w = silh.width * s, h = silh.height * s;
      ctx.globalAlpha = 0.42 - i * 0.02;
      ctx.drawImage(
        silh,
        cx - w / 2 - d * Math.sin(ryr),
        cy - h / 2 + d * Math.sin(rxr),
        w, h
      );
    }
    ctx.globalAlpha = 1;

    ctx.drawImage(tmp, 0, 0);
    /* Separate pass: clearing and filling together lets a later clear
       erase a flying pixel already drawn. */
    for (let i = 0; i < live.length; i++) {
      const q = live[i];
      ctx.fillStyle = q.fill;
      ctx.fillRect(q.x + q.ox, q.y + q.oy, cell, cell);
    }
  }

  function frame() {
    hover += (hoverTarget - hover) * 0.10;
    if (Math.abs(hoverTarget - hover) < 0.002) hover = hoverTarget;

    const reach = PUSH_RADIUS * dpr;
    const reach2 = reach * reach;
    const near = hover > 0.01 && px > -1e3;
    live.length = 0;
    let restless = false;

    for (let i = 0; i < parts.length; i++) {
      const q = parts[i];

      /* Only pixels inside the cursor's radius scatter; everything else
         holds at home and is drawn by the crisp bitmap. The mask is
         measured from the pixel's HOME, not its current position —
         measuring from the displaced position would drop a pixel out of
         range the moment it flew, and it would snap straight back. */
      let w = 0, ux = 0, uy = 0;
      if (near) {
        const dx = q.x - px;
        const dy = q.y - py;
        const d2 = dx * dx + dy * dy;
        if (d2 < reach2) {
          const d = Math.sqrt(d2) || 1;
          const f = 1 - d / reach;
          /* Smoothstep, not f² — squaring dropped mid-radius pixels to a
             quarter of their travel, which is what made the effect read
             as weak everywhere except dead under the cursor. */
          w = f * f * (3 - 2 * f);
          ux = dx / d;
          uy = dy / d;
        }
      }

      const amt = w * hover * q.lag;
      /* Half a blown-outward burst, half the pixel's own random flight —
         a purely random direction sends half of them back through the
         cursor and reads as jitter rather than displacement. */
      const tx = (q.sx * 0.5 + ux * q.dist * 0.5) * amt;
      const ty = (q.sy * 0.5 + uy * q.dist * 0.5) * amt;

      if (amt === 0 && q.ox === 0 && q.oy === 0 && q.vx === 0 && q.vy === 0) continue;

      q.vx = (q.vx + (tx - q.ox) * SPRING) * FRICTION;
      q.vy = (q.vy + (ty - q.oy) * SPRING) * FRICTION;
      q.ox += q.vx;
      q.oy += q.vy;

      if (amt === 0 &&
          Math.abs(q.ox) < 0.35 && Math.abs(q.oy) < 0.35 &&
          Math.abs(q.vx) < 0.35 && Math.abs(q.vy) < 0.35) {
        q.ox = q.oy = q.vx = q.vy = 0;   /* home again; leave it to the bitmap */
        continue;
      }
      if (Math.abs(q.vx) > 0.06 || Math.abs(q.vy) > 0.06) restless = true;
      live.push(q);
    }

    /* Punch the holes first, into a scratch copy of the face. The
       extrusion is then derived from what's *left*, so it can't outlive
       the artwork above it. Building it from the full face instead left
       a dark fringe tracing every shape: the silhouette copies are
       scaled and offset, so they spill past the face's own footprint,
       and no particle exists out there to clear them. */
    paint();

    /* Park the loop once nothing is actually moving. The canvas keeps its
       last frame, so a settled scatter simply stays put under a resting
       cursor; pointermove re-arms it. Without this the loop would spin
       forever, since the pointer being anywhere on the stage holds
       hover at 1. */
    if (!restless && hover === hoverTarget) {
      if (hover === 0 && !live.length) {
        stack.classList.remove('scattering');   /* hand back to the crisp SVG */
        active = false;
      }
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(frame);
  }

  function wake() {
    if (!active) {
      stack.classList.add('scattering');
      active = true;
      /* The class hides the <img> and the depth layers, so paint in the
         same tick — otherwise the canvas shows one empty frame and the
         emblem visibly blinks. */
      live.length = 0;
      paint();
    }
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  /* Layout position of an element inside the stage, walking offsetParents
     so the answer ignores the 3D transform on the way up. */
  function offsetWithin(el) {
    let x = 0, y = 0, n = el;
    while (n && n !== stage) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x, y };
  }

  function trackPointer(e) {
    /* Measured against the stage, which is never transformed, and against
       this canvas's own layout box — with more than one badge on the
       stage they aren't centred on it, and reading
       canvas.getBoundingClientRect() would return the *tilted* box and
       drift the scatter away from the real cursor. */
    const s = stage.getBoundingClientRect();
    if (!s.width || !canvas.width) return;
    const o = offsetWithin(canvas);
    px = (e.clientX - s.left - o.x - canvas.offsetWidth / 2) * dpr + canvas.width / 2;
    py = (e.clientY - s.top - o.y - canvas.offsetHeight / 2) * dpr + canvas.height / 2;
  }

  /* Listeners live on the stage, not on the badge. The badge is inside
     the element the tilt transform moves, so hovering it slid it out
     from under a stationary cursor — pointerleave fired, the pixels
     reassembled, the tilt sprang back, pointerenter fired again. That
     feedback loop is what made the scatter pulse on its own. The stage
     doesn't move, so entering and leaving it is stable. */
  stage.addEventListener('pointerenter', e => {
    if (failed) return;
    if (!built && !build()) return;
    trackPointer(e);
    hoverTarget = 1;
    wake();
  });

  stage.addEventListener('pointermove', e => {
    if (failed) return;
    if (!built && !build()) return;
    trackPointer(e);
    hoverTarget = 1;
    wake();   /* the loop parks itself when nothing moves, so re-arm it */
  }, { passive: true });

  stage.addEventListener('pointerleave', () => {
    hoverTarget = 0;
    px = py = -1e4;   /* out of range, so the local shove stops */
    if (active) wake();
  }, { passive: true });

  /* Re-sample if the emblem changes size, otherwise particles would be
     built for the old box. */
  window.addEventListener('resize', () => { built = false; }, { passive: true });
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

// Noble Sub-Zero Service — static site generator.
// Usage: node tools/build.mjs   → writes site/*.html + site/sitemap.xml
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BRAND, REGIONS, CITIES, PROBLEMS, SZ_HUB, WOLF_HUB, ERROR_LINKS, PILLARS, REVIEWS, FAQS_HOME } from './data.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
mkdirSync(OUT, { recursive: true });

const cityBySlug = Object.fromEntries(CITIES.map(c => [c.slug, c]));
const cityHref = s => `sub-zero-repair-${s}.html`;

// City photography: drop assets/cities/<slug>.jpg and rebuild — pages pick it up.
mkdirSync(join(OUT, 'assets', 'cities'), { recursive: true });
const cityImg = s => existsSync(join(OUT, 'assets', 'cities', `${s}.jpg`)) ? `assets/cities/${s}.jpg` : null;

// Appliance/lifestyle photography in assets/media (basename without extension).
const media = n => existsSync(join(OUT, 'assets', 'media', `${n}.jpg`)) ? `assets/media/${n}.jpg` : null;
const mediaImg = (n, alt, cls = 'city-hero', extra = '') => {
  const src = media(n);
  return src ? `<img class="${cls}" src="${src}" alt="${alt}"${extra}>` : '';
};
const logoImg = (cls = 'brand-logo') => existsSync(join(OUT, 'assets', 'media', 'logo.png'))
  ? `<img class="${cls}" src="assets/media/logo.png" alt="${BRAND.name}">`
  : '';

// Responsive background video for a photo hero. Expects <base>.mp4 and/or
// <base>-mobile.mp4 with matching -poster jpgs in assets/media. When only
// the mobile clip exists, desktop removes the video and keeps a plain hero.
const heroVideo = base => {
  const hasDesktop = existsSync(join(OUT, 'assets', 'media', `${base}.mp4`));
  const hasMobile = existsSync(join(OUT, 'assets', 'media', `${base}-mobile.mp4`));
  if (!hasDesktop && !hasMobile) return '';
  const poster = hasDesktop ? `${base}-poster.jpg` : `${base}-poster-mobile.jpg`;
  return `<video class="hero-bg" autoplay muted loop playsinline preload="auto" poster="assets/media/${poster}"></video>
  <script>(function () {
    var sc = document.currentScript;
    var v = sc.previousElementSibling;
    var mobile = window.matchMedia && window.matchMedia('(max-width: 833px)').matches;
    var hasDesktop = ${hasDesktop};
    if (mobile && ${hasMobile}) {
      v.poster = 'assets/media/${base}-poster-mobile.jpg';
      v.src = 'assets/media/${base}-mobile.mp4';
    } else if (hasDesktop) {
      v.src = 'assets/media/${base}.mp4';
    } else {
      var scrim = sc.nextElementSibling;
      v.remove();
      if (scrim && scrim.className === 'hero-scrim') scrim.remove();
    }
  })();</script>
  <div class="hero-scrim"></div>`;
};

// Hero image per problem page.
const PROB_IMG = {
  'sub-zero-not-cooling': ['subzero-fridge-01-pro48-glass-industrial', 'Sub-Zero PRO 48 refrigerator'],
  'sub-zero-leaking-water': ['subzero-fridge-14-detail-stainless-door', 'Sub-Zero stainless door detail'],
  'sub-zero-ice-maker-repair': ['subzero-fridge-11-door-open-organized', 'Sub-Zero refrigerator, door open'],
  'wolf-burner-clicking': ['wolf-range-09-black-moody', 'Wolf range burners'],
  'sub-zero-error-code-ec-50': ['subzero-fridge-06-36in-column-pair', 'Sub-Zero column pair'],
  'sub-zero-error-code-ec-40': ['subzero-fridge-04-french-door-gray', 'Sub-Zero french door refrigerator'],
  'sub-zero-error-code-ec-60': ['subzero-fridge-12-condo-french-door', 'Sub-Zero refrigerator'],
  'sub-zero-service-light': ['subzero-fridge-03-classic-side-by-side', 'Sub-Zero side by side'],
  'sub-zero-vacuum-condenser': ['subzero-fridge-05-walnut-integrated', 'Integrated Sub-Zero refrigerator'],
};

// Gallery wall on the homepage.
const GALLERY = [
  ['subzero-fridge-10-estate-wide', 'Estate kitchen with Sub-Zero refrigeration'],
  ['wolf-range-03-sage-green-brass', 'Wolf range in a sage green kitchen'],
  ['subzero-wine-05-fluted-oak-bar', 'Sub-Zero wine storage in a fluted oak bar'],
  ['wolf-oven-01-double-white-oak', 'Double Wolf wall ovens'],
  ['subzero-fridge-09-sage-english', 'Sub-Zero in an English kitchen'],
  ['wolf-range-06-navy-marble', 'Wolf range with navy cabinetry'],
  ['subzero-wine-09-dinner-party', 'Wine storage at a dinner party'],
  ['wolf-oven-14-mountain-modern', 'Wolf ovens in a mountain modern home'],
];
const cityCardMedia = c => {
  const img = cityImg(c.slug);
  return `<div class="frame">${img
    ? `<img src="${img}" alt="${c.name}" loading="lazy">`
    : `<div class="photo">${c.name} (photo coming)</div>`}</div>`;
};

// ---------------------------------------------------------------------------
// Shared chrome
// ---------------------------------------------------------------------------
const head = (title, desc, path, extra = '') => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${BRAND.domain}/${path === 'index.html' ? '' : path.replace(/\.html$/, '')}">
<link rel="icon" type="image/png" href="favicon.png">
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="site.css">
<script src="site.js" defer></script>
${extra}</head>
<body>
`;

const nav = (current = '') => `
<nav class="global-nav">
  <div class="inner">
    <a class="wordmark" href="index.html"><img class="nav-crest" src="assets/media/crest-bright.png" alt="">${BRAND.navName}</a>
    <div class="links">
      <a href="problems.html">Problems we fix</a>
      <a href="cities.html">Cities served</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </div>
    <a class="call" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
</nav>

<nav class="sub-nav">
  <div class="inner">
    <div class="category"><img class="nav-crest sub" src="favicon.png" alt="">${current || 'Noble'}</div>
    <div class="links">
      <a href="index.html">Overview</a>
      <a href="problems.html">Repairs</a>
      <a href="cities.html">Service area</a>
      <a class="book" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
    </div>
  </div>
</nav>
`;

const footer = () => `
<div class="call-bar">
  <a class="btn btn-primary" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  <a class="btn btn-ghost" href="book.html">Book online</a>
</div>
<footer class="site-footer">
  <div class="inner">
    ${logoImg()}
    <div class="cols">
      <div class="col">
        <h4>Repairs</h4>
        <a href="sub-zero-not-cooling.html">Sub-Zero not cooling</a>
        <a href="sub-zero-leaking-water.html">Sub-Zero leaking water</a>
        <a href="sub-zero-ice-maker-repair.html">Ice maker repair</a>
        <a href="wolf-burner-clicking.html">Wolf burner clicking</a>
        <a href="sub-zero-vacuum-condenser.html">Condenser cleaning</a>
      </div>
      <div class="col">
        <h4>Error codes</h4>
        <a href="sub-zero-error-code-ec-50.html">EC 50</a>
        <a href="sub-zero-error-code-ec-40.html">EC 40</a>
        <a href="sub-zero-error-code-ec-60.html">EC 60</a>
        <a href="sub-zero-service-light.html">Service light</a>
      </div>
      <div class="col">
        <h4>Company</h4>
        <a href="about.html">About Noble</a>
        <a href="cities.html">Cities served</a>
        <a href="problems.html">Problems we fix</a>
        <a href="contact.html">Contact</a>
        <a href="book.html">Book service</a>
      </div>
      <div class="col">
        <h4>Concierge line</h4>
        <a href="tel:${BRAND.tel}">${BRAND.phone}</a>
        <a href="mailto:${BRAND.email}">${BRAND.email}</a>
        <a href="contact.html">${BRAND.hours}</a>
        <a href="cities.html">By appointment · ${BRAND.base}</a>
      </div>
    </div>
    <div class="legal">${BRAND.name} is an independent service company and is not affiliated with, endorsed by, or sponsored by Sub-Zero Group, Inc. Sub-Zero&reg; and Wolf&reg; are registered trademarks of Sub-Zero Group, Inc. Licensed and insured in California.<br>
    Copyright &copy; 2026 ${BRAND.name}. All rights reserved. &middot; <a href="contact.html">Terms</a> &middot; <a href="contact.html">Privacy</a></div>
  </div>
</footer>

</body>
</html>
`;

const pillarsTile = (surface = 'tile-parchment') => `
<section class="tile ${surface}">
  <h2>The Noble standard.</h2>
  <p class="lead-airy muted">Six commitments, kept gladly on every visit.</p>
  <div class="card-grid">
    ${PILLARS.map(([t, d]) => `<div class="utility-card"><h3>${t}</h3><p>${d}</p></div>`).join('\n    ')}
  </div>
</section>`;

const ctaTile = (h = 'Your appliances, in noble hands.', sub = `One call, and it is handled. ${BRAND.hours}.`) => `
<section class="tile tile-navy">
  <h2>${h}</h2>
  <p class="lead muted">${sub}</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    <a class="btn btn-ghost-dark btn-hero" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
  </div>
  <p class="lead-airy muted" style="font-size: 14px; margin-top: 18px;">Same day slots are limited and go to the first callers. The diagnostic is credited toward your repair, so it costs you nothing to find out.</p>
</section>`;

// Risk-reversal tile — removes every reason to hesitate before calling.
const riskTile = () => `
<section class="tile tile-white">
  <h2>You risk nothing by calling.</h2>
  <p class="lead-airy muted">We removed every reason to wait.</p>
  <div class="card-grid">
    <div class="utility-card"><h3>The diagnostic pays for itself</h3><p>${BRAND.diagnostic}, quoted before we book, credited in full toward your repair. Approve the fix and the diagnostic ends up costing you nothing.</p></div>
    <div class="utility-card"><h3>You approve the number first</h3><p>One written quote before a single panel comes off. No surprise line items, no &ldquo;while we were in there.&rdquo; You stay in control.</p></div>
    <div class="utility-card"><h3>${BRAND.warrantyYears} years, in writing</h3><p>If our repair fails within ${BRAND.warrantyYears} years, we come back and make it right. Parts and labor. We can promise that because of how we repair.</p></div>
  </div>
  <div class="ctas"><a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a></div>
</section>`;

const faqBlock = faqs => `
  <div class="faq">
    ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n    ')}
  </div>`;

const write = (file, html) => writeFileSync(join(OUT, file), html, 'utf8');
const pages = [];
const page = (file, html) => { write(file, html); pages.push(file); };

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
const ldHome = `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: BRAND.name, telephone: BRAND.phone, email: BRAND.email, url: BRAND.domain,
  areaServed: CITIES.map(c => c.name), openingHours: 'Mo-Su 07:00-19:00',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA' },
  description: 'Factory-trained Sub-Zero and Wolf appliance repair for Los Angeles’ finest homes.',
}, null, 1)}
</script>
`;

page('index.html', head(
  `${BRAND.name} | Sub-Zero & Wolf repair for Los Angeles' finest homes`,
  `The Sub-Zero and Wolf specialists Los Angeles' finest kitchens keep on speed dial. Factory-trained, white-glove, 3-year guarantee. ${BRAND.phone}.`,
  'index.html', ldHome)
+ nav('Noble')
+ `
<section class="tile tile-hero">
  ${heroVideo('hero') || (media('subzero-fridge-07-hamptons-coastal') ? `<img class="hero-bg" src="${media('subzero-fridge-07-hamptons-coastal')}" alt="">
  <div class="hero-scrim"></div>` : '')}
  <div class="hero-content">
    <p class="eyebrow">Sub-Zero &amp; Wolf specialists &middot; Los Angeles &middot; ${BRAND.hours}</p>
    <h1>Your Sub-Zero, <span class="accent-cold">cold again</span>. <br>Often the same day you call.</h1>
    <p class="lead muted">Factory trained specialists, ${BRAND.years} years deep in Sub-Zero and Wolf, and still glad to take the call. Genuine parts on the truck, a ${BRAND.warrantyYears} year guarantee in writing, and an ${BRAND.diagnostic} diagnostic that comes off your repair.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
      <a class="btn btn-ghost btn-hero" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
    </div>
    <p class="lead-airy muted" style="font-size: 14px; margin-top: 14px;">Warm refrigerator? Say so when you call. Those go first.</p>
  </div>
</section>

<section class="tile tile-navy">
  ${existsSync(join(OUT, 'assets', 'media', 'crest-bright.png')) ? '<img class="promise-crest" src="assets/media/crest-bright.png" alt="Noble crest">' : ''}
  <p class="eyebrow" style="color: var(--color-primary-on-dark);">The Noble Promise</p>
  <h2>The quote is the price.</h2>
  <p class="lead muted">One written number before work begins. It does not move.</p>
  <div class="prose">
    <p>Here is how a Noble repair is priced. After the diagnosis, you get one written quote to fix the problem you called about, completely. Approve it, and that number is settled. Not a starting point. Not an estimate that grows in the parking lot.</p>
    <p>If the job turns out harder than it looked from the outside, if it needs another part, another hour, or a second visit to finish right, the price stays where we set it. Hard jobs are ours to carry. That is what a quote means here.</p>
    <p>And if we notice something unrelated while we work, we show you, explain it, and quote it on its own. Nothing lands on your bill that you did not ask us to fix.</p>
    <p><strong>Every repair is backed by our ${BRAND.warrantyYears} year parts and labor guarantee, in writing.</strong></p>
  </div>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
</section>

<section class="tile tile-ice">
  <h2>A warm Sub-Zero gets expensive by the hour.</h2>
  <div class="card-grid">
    <div class="utility-card"><h3>First, the food</h3><p>A loaded refrigerator holds hundreds of dollars of groceries, and a wine column can hold a whole lot more. Spoilage starts quietly, hours in.</p></div>
    <div class="utility-card"><h3>Then, the machine</h3><p>A struggling unit runs flat out to compensate. That is exactly how a fixable fault turns into a compressor replacement, the most expensive repair there is.</p></div>
    <div class="utility-card"><h3>Sometimes, the home</h3><p>Leaks travel under cabinetry before they surface. Hardwood and subfloors pay for every day a slow drip goes unfound.</p></div>
  </div>
  <p class="lead-airy muted" style="font-size: 17px; margin-top: 28px;">The cheapest moment to fix an appliance is the moment it first misbehaves. Call while it is still the small version of the problem.</p>
  <div class="ctas"><a class="btn btn-primary" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a></div>
</section>

<section class="tile tile-parchment">
  <h2>${BRAND.years} years at one craft.</h2>
  <p class="lead-airy muted">Stay at anything that long and one of two things happens. You get exceptionally good, or you find other work. We stayed. And these machines, built like nothing else in the home, genuinely need people who did.</p>
  <div class="metric-grid">
    <div class="metric"><div class="value">${BRAND.years}<span style="font-size:22px">yrs</span></div><div class="label">of factory certified service</div></div>
    <div class="metric"><div class="value">${BRAND.warrantyYears}<span style="font-size:22px">yr</span></div><div class="label">guarantee on parts and labor</div></div>
    <div class="metric"><div class="value">7<span style="font-size:22px">days</span></div><div class="label">a week, 7am to 7pm</div></div>
    <div class="metric"><div class="value">${BRAND.diagnostic}</div><div class="label">diagnostic, credited toward repair</div></div>
    <div class="metric"><div class="value">100%</div><div class="label">genuine parts, authorized channels</div></div>
    <div class="metric"><div class="value">1<span style="font-size:22px">st</span></div><div class="label">visit fixes, most appointments</div></div>
  </div>
</section>

<section class="tile tile-dark">
  <p class="eyebrow" style="color: var(--color-primary-on-dark);">Sub-Zero</p>
  <h2>Cold, kept perfectly.</h2>
  <p class="lead muted">Refrigeration, freezers, and wine storage. Sealed system work, ice systems, door seals, and error codes, all brought back to factory spec.</p>
  <div class="ctas">
    <a class="btn btn-primary" href="problems.html#sub-zero">What we fix</a>
    <a class="btn btn-ghost-dark" href="tel:${BRAND.tel}">Call now</a>
  </div>
  ${mediaImg('subzero-fridge-02-panel-oak-columns', 'Panel ready Sub-Zero columns in oak cabinetry', 'city-hero ph-shadow', ' style="max-width: 720px; height: 420px; border-radius: 8px;"')}
</section>

<section class="tile tile-ember">
  <p class="eyebrow" style="color: var(--color-wolf);">Wolf</p>
  <h2>Precision heat, restored.</h2>
  <p class="lead muted">Ranges, cooktops, and wall ovens. Ignition, calibration, convection, and controls, tuned by certified hands.</p>
  <div class="ctas">
    <a class="btn btn-wolf" href="problems.html#wolf">What we fix</a>
    <a class="btn btn-ghost-wolf" href="tel:${BRAND.tel}">Call now</a>
  </div>
  ${mediaImg('wolf-range-15-detail-red-knobs', 'Wolf range with signature red knobs', 'city-hero ph-shadow', ' style="max-width: 720px; height: 420px; border-radius: 8px;"')}
</section>

<section class="tile tile-white">
  <h2>Kitchens we keep.</h2>
  <p class="lead-airy muted">A few of the rooms Noble looks after, from Bel Air wine walls to Manhattan Beach baking stations.</p>
  <div class="gallery-grid">
    ${GALLERY.map(([n, alt]) => media(n) ? `<div class="shot"><img src="${media(n)}" alt="${alt}" loading="lazy"></div>` : '').join('\n    ')}
  </div>
</section>

${pillarsTile('tile-parchment')}

<section class="tile tile-white">
  <h2>How a Noble visit works.</h2>
  <ol class="step-list">
    <li><div><h3>Diagnose, precisely</h3><p>A factory trained tech tests the system with instruments, not guesses, then walks you through the findings in plain language.</p></div></li>
    <li><div><h3>Quote, before anything</h3><p>One written number, approved by you before a single panel comes off. The ${BRAND.diagnostic} diagnostic is credited toward it.</p></div></li>
    <li><div><h3>Restore, with genuine parts</h3><p>Factory components from the truck whenever possible. Most repairs finish the same visit, floors protected the whole time.</p></div></li>
    <li><div><h3>Guarantee, in writing</h3><p>Three years on parts and labor, documented. If it fails, we return. That is the whole policy.</p></div></li>
  </ol>
</section>

${riskTile()}

<section class="tile tile-navy">
  <h2>Why we do this.</h2>
  <p class="lead-airy muted" style="max-width: 720px; margin-left: auto; margin-right: auto;">The kitchen is where a home actually lives. Birthdays, holidays, Tuesday dinners. Noble exists to keep that room working, beautifully, for the families who built their homes around it. We love this craft, we are very good at it, and going above and beyond is just how we practice it. The repairs are how. Helping you is why.</p>
</section>

<section class="tile tile-white">
  <h2>Answers, before you ask.</h2>
  ${faqBlock(FAQS_HOME)}
</section>

<section class="tile tile-ice">
  <h2>Five stars, earned the old fashioned way.</h2>
  <p class="lead-airy muted">We go the extra mile because we can't help it. Our clients notice, and their neighbors call.</p>
  <div class="quote-grid">
    ${REVIEWS.map(([q, c]) => `<figure class="quote" style="margin:0"><p>&ldquo;${q}&rdquo;</p><cite>${c}</cite></figure>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>From Montecito to Newport.</h2>
  <p class="lead-airy muted">Wherever the kitchen is worth protecting, Noble is already nearby.</p>
  <div class="chip-row">
    ${['beverly-hills','bel-air','malibu','pacific-palisades','calabasas','manhattan-beach','pasadena','hidden-hills','newport-beach','santa-barbara'].map(s => `<a class="chip" href="${cityHref(s)}">${cityBySlug[s].name}</a>`).join('\n    ')}
  </div>
  <div class="ctas"><a class="btn btn-ghost" href="cities.html">All cities served</a></div>
</section>

<section class="tile tile-parchment">
  <h2>For estates and their managers.</h2>
  <div class="prose">
    <p>Noble keeps standing relationships with estate managers, family offices, and property management firms across the Westside and beyond. That means documented service histories for every appliance under your care, certificates of insurance on request, techs cleared for gated communities, and invoicing that fits your accounting, not ours.</p>
    <p>For portfolios of properties, ask about the Noble maintenance plan: scheduled condenser service, seal inspection, and calibration across every unit you manage, on a calendar you approve once a year.</p>
  </div>
  ${mediaImg('subzero-wine-04-wine-room-pair', 'Sub-Zero wine storage pair in a private wine room', 'city-hero', ' loading="lazy"')}
  <div class="ctas">
    <a class="btn btn-primary" href="contact.html">Speak with us</a>
  </div>
</section>
`
+ ctaTile()
+ footer());

// ---------------------------------------------------------------------------
// Problems hub
// ---------------------------------------------------------------------------
const HUB_IMG = {
  'Not cooling': ['subzero-fridge-12-condo-french-door', 'Sub-Zero french door refrigerator'],
  'Leaking water': ['subzero-fridge-15-spanish-revival', 'Sub-Zero in a Spanish revival kitchen'],
  'Ice maker down': ['subzero-fridge-11-door-open-organized', 'Sub-Zero refrigerator, door open'],
  'Excess frost': ['subzero-fridge-01-pro48-glass-industrial', 'Sub-Zero PRO 48 with glass door'],
  'Door seal failure': ['subzero-fridge-14-detail-stainless-door', 'Sub-Zero door detail'],
  'Unusual noise': ['subzero-fridge-03-classic-side-by-side', 'Classic Sub-Zero side by side'],
  'Error codes': ['subzero-fridge-06-36in-column-pair', 'Sub-Zero column pair'],
  'Wine storage drift': ['subzero-wine-14-detail-glass-racks', 'Sub-Zero wine racks behind glass'],
  'Oven not heating': ['wolf-oven-15-door-ajar-roast', 'Wolf oven with a roast'],
  'Uneven baking': ['wolf-oven-05-midbake-sourdough', 'Sourdough baking in a Wolf oven'],
  'Burner clicking': ['wolf-range-07-industrial-loft', 'Wolf range in an industrial loft'],
  'Flame control': ['wolf-range-02-60in-walnut-modern', '60 inch Wolf range'],
  'Display or touchpad faults': ['wolf-oven-02-single-speed-gray', 'Wolf oven control panel'],
  'Door and seal issues': ['wolf-oven-13-detail-handle', 'Wolf oven handle detail'],
};
const hubCard = i => {
  const im = HUB_IMG[i.title];
  const pic = im && media(im[0]) ? `<img class="card-img" src="${media(im[0])}" alt="${im[1]}" loading="lazy">` : '';
  return `<div class="utility-card">${pic}<h3>${i.title}</h3><p>${i.desc}</p>${i.link ? `<a class="more" href="${i.link}">The full story</a>` : ''}</div>`;
};

page('problems.html', head(
  `Problems we fix | Sub-Zero & Wolf repair | ${BRAND.name}`,
  `Every Sub-Zero and Wolf failure mode, diagnosed and repaired by factory-trained Noble technicians. Not cooling, leaks, ice makers, error codes, burners, ovens.`,
  'problems.html')
+ nav('Problems we fix')
+ `
<section class="tile tile-hero">
  ${heroVideo('problems')}
  <div class="hero-content">
    <p class="eyebrow">Problems we fix</p>
    <h1>If it is Sub-Zero or Wolf, <br>we have repaired it.</h1>
    <p class="lead muted">${BRAND.years} years of factory certified service means there is no failure we are meeting for the first time.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
      <a class="btn btn-ghost btn-hero" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
    </div>
  </div>
</section>

<section class="tile tile-parchment">
  <h2>Five signs it is time to call.</h2>
  <ol class="step-list">
    <li><div><h3>The temperature is drifting</h3><p>Set to 38, reading 42. Drift is the earliest, cheapest moment to intervene.</p></div></li>
    <li><div><h3>It runs constantly</h3><p>A healthy Sub-Zero cycles. One that never rests is compensating for something.</p></div></li>
    <li><div><h3>New sounds</h3><p>Grinding, chirping, clicking. Components announce failure before they fail.</p></div></li>
    <li><div><h3>Frost or water where none belongs</h3><p>Both are symptoms of a system upstream asking for attention.</p></div></li>
    <li><div><h3>An error code or service light</h3><p>The machine is literally telling you. We speak the language fluently.</p></div></li>
  </ol>
</section>

<section class="tile tile-ice" id="sub-zero">
  <p class="eyebrow" style="color: var(--color-primary);">Sub-Zero refrigeration</p>
  <h2>Everything cold.</h2>
  <div class="card-grid">
    ${SZ_HUB.map(hubCard).join('\n    ')}
  </div>
</section>

<section class="tile tile-ember" id="wolf">
  <p class="eyebrow" style="color: var(--color-wolf);">Wolf cooking</p>
  <h2>Everything hot.</h2>
  <div class="card-grid">
    ${WOLF_HUB.map(hubCard).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>Reading the codes.</h2>
  <p class="lead-airy muted">Sub-Zero error codes are precise. So are our answers to them.</p>
  <div class="chip-row">
    ${ERROR_LINKS.map(([href, label]) => `<a class="chip" href="${href}">${label}</a>`).join('\n    ')}
  </div>
</section>
`
+ ctaTile('Describe the symptom. We handle the rest.')
+ footer());

// ---------------------------------------------------------------------------
// Problem detail pages
// ---------------------------------------------------------------------------
for (const p of PROBLEMS) {
  const isWolf = p.brand === 'wolf';
  const accent = isWolf ? 'var(--color-wolf)' : 'var(--color-primary)';
  const btn = isWolf ? 'btn-wolf' : 'btn-primary';
  const others = PROBLEMS.filter(o => o.slug !== p.slug).slice(0, 5);
  page(`${p.slug}.html`, head(
    `${p.title} | expert repair | ${BRAND.name}`,
    `${p.title}: what causes it, what it costs to ignore, and how Noble's factory-trained technicians repair it — with a ${BRAND.warrantyYears}-year guarantee.`,
    `${p.slug}.html`)
  + nav(p.title)
  + `
<section class="tile tile-white">
  <p class="eyebrow" style="color: ${accent};">${isWolf ? 'Wolf' : 'Sub-Zero'}</p>
  <h1>${p.title}.</h1>
  <p class="lead muted">${p.tagline}</p>
  <div class="ctas">
    <a class="btn ${btn} btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    <a class="btn btn-ghost btn-hero" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
  </div>
  ${PROB_IMG[p.slug] ? mediaImg(PROB_IMG[p.slug][0], PROB_IMG[p.slug][1], 'city-hero', ' loading="lazy"') : ''}
</section>

<section class="tile tile-parchment">
  <h2>What is actually happening.</h2>
  <div class="prose">
    ${p.what.map(t => `<p>${t}</p>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>The usual suspects.</h2>
  <div class="card-grid">
    ${p.causes.map(([t, d]) => `<div class="utility-card"><h3>${t}</h3><p>${d}</p></div>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-parchment">
  <h2>Worth knowing.</h2>
  ${faqBlock(p.faqs)}
</section>

<section class="tile tile-white">
  <h2>Related repairs.</h2>
  <div class="chip-row">
    ${others.map(o => `<a class="chip" href="${o.slug}.html">${o.nav}</a>`).join('\n    ')}
    <a class="chip" href="problems.html">All problems we fix</a>
  </div>
</section>
`
  + ctaTile(`${isWolf ? 'Precision heat' : 'Perfect cold'}, one call away.`)
  + footer());
}

// ---------------------------------------------------------------------------
// Cities hub
// ---------------------------------------------------------------------------
const regionBlocks = REGIONS.map(r => {
  const list = CITIES.filter(c => c.region === r);
  if (!list.length) return '';
  return `<div class="region">
    <h3>${r}</h3>
    <div class="city-grid">
      ${list.map(c => `<a class="city-card" href="${cityHref(c.slug)}">
        ${cityCardMedia(c)}
        <div class="name">${c.name}</div>
        <div class="sub">Sub-Zero &amp; Wolf repair</div>
      </a>`).join('\n      ')}
    </div>
  </div>`;
}).join('\n  ');

page('cities.html', head(
  `Cities served | Sub-Zero & Wolf repair across greater Los Angeles | ${BRAND.name}`,
  `Noble serves ${CITIES.length} communities — Beverly Hills to Montecito, Malibu to Newport Coast. Find your city and book factory-trained Sub-Zero and Wolf service.`,
  'cities.html')
+ nav('Cities served')
+ `
<section class="tile tile-white">
  <p class="eyebrow muted">Service area</p>
  <h1>Wherever the finest kitchens are,<br>Noble is nearby.</h1>
  <p class="lead muted">${CITIES.length} communities across greater Los Angeles, plus dedicated routes to Newport Beach and Santa Barbara.</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    <a class="btn btn-ghost btn-hero" href="book.html">Book service</a>
  </div>
</section>

<section class="tile tile-parchment" style="text-align: center;">
  <h2>Find your city.</h2>
  ${regionBlocks}
</section>

<section class="tile tile-white">
  <h2>Not on the list?</h2>
  <p class="lead-airy muted">For estates outside our standing routes, we arrange dedicated visits. Ask.</p>
  <div class="ctas"><a class="btn btn-primary" href="contact.html">Contact Noble</a></div>
</section>
`
+ ctaTile()
+ footer());

// Alias page (Onyx has /cities and /cities-we-serve; keep one canonical + redirect)
page('cities-we-serve.html', `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=cities.html"><link rel="canonical" href="${BRAND.domain}/cities"><title>Cities served | ${BRAND.name}</title></head>
<body><p>Moved: <a href="cities.html">Cities served</a></p></body></html>
`);

// ---------------------------------------------------------------------------
// City pages
// ---------------------------------------------------------------------------
for (const c of CITIES) {
  const nearby = c.nearby.map(s => cityBySlug[s]).filter(Boolean);
  const ld = `<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Service',
    name: `Sub-Zero and Wolf repair in ${c.name}`,
    provider: { '@type': 'HomeAndConstructionBusiness', name: BRAND.name, telephone: BRAND.phone, url: BRAND.domain },
    areaServed: c.name, serviceType: 'Appliance repair',
  }, null, 1)}
</script>
`;
  page(cityHref(c.slug), head(
    `Sub-Zero repair in ${c.name} | Wolf service too | ${BRAND.name}`,
    `Factory-trained Sub-Zero and Wolf repair in ${c.name}. White-glove protocol, genuine parts, ${BRAND.warrantyYears}-year guarantee. ${BRAND.phone}.`,
    cityHref(c.slug), ld)
  + nav(c.name)
  + `
<section class="tile tile-white">
  <p class="eyebrow muted">${c.region}</p>
  <h1>Sub-Zero repair<br>in ${c.name}.</h1>
  <p class="lead muted">Wolf ranges and ovens too. Factory trained, white glove, and already in the neighborhood. Same day priority when the refrigerator is warm, and a written ${BRAND.warrantyYears} year guarantee on every repair.</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    <a class="btn btn-ghost btn-hero" href="book.html">Book the ${BRAND.diagnostic} diagnostic</a>
  </div>
  ${cityImg(c.slug)
    ? `<img class="city-hero" src="${cityImg(c.slug)}" alt="${c.name}">`
    : `<div class="ph" style="height: 380px; border-radius: var(--rounded-lg);">${c.name} city photo (coming)</div>`}
</section>

<section class="tile tile-parchment">
  <h2>Service worthy of ${c.name}.</h2>
  <div class="prose">
    <p>${c.intro}</p>
    <p>Every Noble visit runs the same way. A factory trained tech, instruments before opinions, genuine parts from the truck, floors and cabinetry protected the whole time, and a written ${BRAND.warrantyYears} year guarantee when we leave. And because we genuinely love this work, the visit comes with the extras that never show up on an invoice. The honest advice, the patient answers, the small adjustments done just because we noticed. It is the standard ${c.name} homes keep, so it is the standard we keep.</p>
  </div>
</section>

<section class="tile tile-white">
  <div class="card-grid two">
    <div class="utility-card">
      <h3 style="color: var(--color-primary);">Sub-Zero refrigeration</h3>
      <p>Not cooling, excess frost, door seals, ice makers, water leaks, wine storage drift, and every EC error code. Diagnosed with gauges, repaired to factory spec.</p>
      <a class="more" href="problems.html#sub-zero">Refrigeration repairs</a>
    </div>
    <div class="utility-card">
      <h3 style="color: var(--color-wolf);">Wolf cooking</h3>
      <p>Ovens that will not hold temperature, uneven baking, clicking burners, flame control, and touchpad faults. Precision heat, restored by certified hands.</p>
      <a class="more" href="problems.html#wolf">Cooking repairs</a>
    </div>
  </div>
</section>

${pillarsTile('tile-parchment')}

<section class="tile tile-white">
  <h2>Across ${c.name}.</h2>
  <p class="lead-airy muted">${c.hoods.join(' · ')}</p>
</section>

<section class="tile tile-ice">
  <h2>Asked in ${c.name}.</h2>
  ${faqBlock([
    ['How discreet is a Noble visit?', `Very. Unmarked arrival on request, techs cleared for gated communities, and coordination with house managers or staff are all routine in ${c.name}. We are there to fix the appliance, not to be noticed.`],
    ['Will you protect the kitchen?', 'Floor runners go down before toolboxes open. Shoe covers at the door, padded clamps on custom panels. Cabinetry gets treated as irreplaceable, because it usually is.'],
    ['What if the refrigerator is already warm?', `Warm fridge calls get scheduling priority in ${c.name}. Same day or next morning in most cases, seven days a week. Keep the doors closed and call ${BRAND.phone}.`],
    ['What guarantee comes with the repair?', `${BRAND.warrantyYears} years on parts and labor, in writing. The ${BRAND.diagnostic} diagnostic is credited toward the repair when you go ahead.`],
  ])}
</section>

<section class="tile tile-white">
  <h2>Nearby, too.</h2>
  <div class="chip-row">
    ${nearby.map(n => `<a class="chip" href="${cityHref(n.slug)}">${n.name}</a>`).join('\n    ')}
    <a class="chip" href="cities.html">All cities served</a>
  </div>
</section>
`
  + ctaTile(`${c.name}, consider it handled.`)
  + footer());
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
page('about.html', head(
  `About Noble | the standard behind the name | ${BRAND.name}`,
  `Noble Sub-Zero Service: ${BRAND.years} years of factory-certified repair for Los Angeles' finest kitchens. The story, the standard, and the people.`,
  'about.html')
+ nav('About Noble')
+ `
<section class="tile tile-white">
  <p class="eyebrow muted">About</p>
  <h1>${BRAND.years} years<br>of doing this right.</h1>
  <p class="lead muted">Sealed systems, ignition, electronics. Decades deep in two brands. We are proud of what that time made us, and we still love the work.</p>
  ${mediaImg('wolf-oven-08-estate-paneled', 'Paneled estate kitchen with Wolf ovens', 'city-hero', ' loading="lazy"')}
</section>

<section class="tile tile-parchment">
  <h2>Why Noble exists.</h2>
  <div class="prose">
    <p>A Sub-Zero is not just a refrigerator. It is a 20 year commitment built into the bones of a home. A Wolf range is not just a stove. It is the reason the kitchen was designed the way it was. People who choose these machines chose permanence, and permanence deserves a service company built to match.</p>
    <p>Noble started with a simple observation. The households that invest most in their kitchens were being served by generalists. Techs who see a Sub-Zero twice a year. Call centers that dispatch whoever is closest. Repairs that hold until the season changes. So we built the opposite. A specialist shop that services two brands, knows them completely, and treats every kitchen like the custom work it is.</p>
    <p>Today Noble runs standing routes from Montecito to Newport Coast. Most new clients arrive the same way. A neighbor, a house manager, or a designer passes along the name. We intend to keep earning that. Not just with excellent repairs, but with the small things. The callback that comes when promised. The extra ten minutes to explain what happened. The tech who notices a door seal starting to wear and says so before it fails. Five star service is not a rating we chase. It is just how we like to work.</p>
  </div>
</section>

<section class="tile tile-navy">
  <h2>The numbers we keep.</h2>
  <div class="metric-grid">
    <div class="metric"><div class="value">${BRAND.years}<span style="font-size:22px">yrs</span></div><div class="label">factory certified experience</div></div>
    <div class="metric"><div class="value">2</div><div class="label">brands. That's the point.</div></div>
    <div class="metric"><div class="value">${BRAND.warrantyYears}<span style="font-size:22px">yr</span></div><div class="label">written guarantee</div></div>
    <div class="metric"><div class="value">7<span style="font-size:22px">days</span></div><div class="label">a week, 7am to 7pm</div></div>
    <div class="metric"><div class="value">${CITIES.length}</div><div class="label">communities on standing routes</div></div>
    <div class="metric"><div class="value">0</div><div class="label">subcontractors, ever</div></div>
  </div>
</section>

${pillarsTile('tile-white')}

<section class="tile tile-parchment">
  <h2>The people who show up.</h2>
  <div class="card-grid">
    <div class="utility-card">
      <div class="card-ph">Technician portrait (media coming)</div>
      <h3>Employed, not dispatched</h3>
      <p>Every tech is a Noble employee. Background checked, uniformed, and certified on current Sub-Zero and Wolf platforms.</p>
    </div>
    <div class="utility-card">
      <div class="card-ph">Training photo (media coming)</div>
      <h3>Recertified every year</h3>
      <p>The platforms change, so our training keeps pace. Sealed systems, electronics, and the newest integrated columns are all in scope.</p>
    </div>
    <div class="utility-card">
      <div class="card-ph">Service truck photo (media coming)</div>
      <h3>A rolling parts depot</h3>
      <p>The parts that fail most ride on every truck, which is why most Noble repairs finish on the first visit.</p>
    </div>
  </div>
</section>
`
+ ctaTile('Meet the standard.', `One visit explains the reputation. ${BRAND.hours}.`)
+ footer());

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
page('contact.html', head(
  `Contact Noble | concierge line, email, hours | ${BRAND.name}`,
  `Reach Noble Sub-Zero Service: ${BRAND.phone}, ${BRAND.email}. ${BRAND.hours}. Serving greater Los Angeles, Newport Beach, and Santa Barbara.`,
  'contact.html')
+ nav('Contact')
+ `
<section class="tile tile-hero">
  ${heroVideo('contact')}
  <div class="hero-content">
    <p class="eyebrow">Contact</p>
    <h1>One call, and it is handled.</h1>
    <p class="lead muted">Speak with a person who knows these machines, not a call tree.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
      <a class="btn btn-ghost btn-hero" href="book.html">Book online</a>
    </div>
  </div>
</section>

<section class="tile tile-parchment">
  <div class="card-grid">
    <div class="utility-card">
      <h3>Concierge line</h3>
      <p><a href="tel:${BRAND.tel}">${BRAND.phone}</a><br>${BRAND.hours}.<br>Refrigeration emergencies take priority.</p>
    </div>
    <div class="utility-card">
      <h3>Email</h3>
      <p><a href="mailto:${BRAND.email}">${BRAND.email}</a><br>Photos of the model plate and the symptom help us arrive prepared.</p>
    </div>
    <div class="utility-card">
      <h3>Service area</h3>
      <p>Greater Los Angeles, from the Westside and South Bay to the Valley and the foothills. Plus Newport Beach and Santa Barbara. <a href="cities.html">All cities</a>.</p>
    </div>
  </div>
</section>

<section class="tile tile-white">
  <h2>For estate and property managers.</h2>
  <div class="prose">
    <p>Standing accounts get documented service histories, certificates of insurance on request, gate cleared techs, and one consolidated invoice across properties. Email <a href="mailto:${BRAND.email}">${BRAND.email}</a> with &ldquo;portfolio&rdquo; in the subject and we will set it up properly.</p>
  </div>
</section>
`
+ ctaTile('Prefer to book online?', 'Two minutes, and your appointment is requested.')
+ footer());

// ---------------------------------------------------------------------------
// Book
// ---------------------------------------------------------------------------
page('book.html', head(
  `Book the ${BRAND.diagnostic} diagnostic | ${BRAND.name}`,
  `Book Sub-Zero or Wolf service with Noble: ${BRAND.diagnostic} diagnostic, credited toward your repair. Same-day priority for refrigeration emergencies.`,
  'book.html')
+ nav('Book service')
+ `
<section class="tile tile-white">
  <p class="eyebrow muted">Book service</p>
  <h1>The ${BRAND.diagnostic} diagnostic.</h1>
  <p class="lead muted">Quoted up front. Credited in full toward your repair. The honest way to start.</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
  <p class="lead-airy muted" style="font-size: 14px; margin-top: 14px;">A real person answers requests during open hours, usually within the hour. Warm refrigerators go first.</p>
  ${mediaImg('subzero-wine-09-dinner-party', 'Dinner party around Sub-Zero wine storage', 'city-hero', ' loading="lazy"')}
</section>

<section class="tile tile-parchment">
  <h2>Request an appointment.</h2>
  <form class="form" action="mailto:${BRAND.email}" method="get">
    <div><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name"></div>
    <div><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
    <div><label for="f-city">City</label><input id="f-city" name="city" placeholder="Beverly Hills, Calabasas, Montecito&hellip;"></div>
    <div><label for="f-appliance">Appliance</label>
      <select id="f-appliance" name="appliance">
        <option>Sub-Zero refrigerator or freezer</option>
        <option>Sub-Zero wine storage</option>
        <option>Wolf range or cooktop</option>
        <option>Wolf wall oven</option>
        <option>Multiple appliances</option>
      </select>
    </div>
    <div><label for="f-issue">What is it doing?</label><textarea id="f-issue" name="issue" rows="4" placeholder="Not cooling since Tuesday, EC 50 on the display&hellip;"></textarea></div>
    <button class="btn btn-primary btn-hero" type="submit">Request appointment</button>
    <p class="hint">Submitting opens an email to our concierge desk. Or skip the form and just call <a href="tel:${BRAND.tel}">${BRAND.phone}</a>. Refrigeration emergencies always get same day priority. The ${BRAND.diagnostic} diagnostic is quoted before booking and credited toward any repair you approve.</p>
  </form>
</section>

<section class="tile tile-white">
  <h2>What happens next.</h2>
  <ol class="step-list">
    <li><div><h3>We confirm, quickly</h3><p>A scheduler calls back with an arrival window that fits your calendar, not the other way around.</p></div></li>
    <li><div><h3>You know who is coming</h3><p>Name and photo of your tech before the truck arrives. Gate and staff coordination handled ahead of time.</p></div></li>
    <li><div><h3>The visit</h3><p>A proper diagnosis with instruments, a written quote you approve first, and most of the time, the repair done the same day.</p></div></li>
  </ol>
</section>
`
+ ctaTile('Rather just talk to someone?', `${BRAND.phone}. ${BRAND.hours}.`)
+ footer());

// ---------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------
const urls = ['', 'about', 'cities', 'cities-we-serve', 'problems', 'contact', 'book',
  ...PROBLEMS.map(p => p.slug),
  ...CITIES.map(c => `sub-zero-repair-${c.slug}`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${BRAND.domain}/${u}</loc></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${BRAND.domain}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages + sitemap.xml + robots.txt into ${OUT}`);

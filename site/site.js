/* Noble Sub-Zero Service — motion layer.
   Scroll reveals, metric count ups. No dependencies. Safe without JS: classes
   are added here, so nothing is hidden if this file never loads. */
(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    var node = el.firstChild;
    if (!node || node.nodeType !== 3) return;
    var m = node.textContent.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!m) return;
    var prefix = m[1], target = parseInt(m[2], 10), suffix = m[3];
    if (reduced || target === 0) return;
    var t0 = null, dur = 1200;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    node.textContent = prefix + '0' + suffix;
    requestAnimationFrame(tick);
  }

  function init(root) {
    root = root || document;

    if (reduced) {
      root.querySelectorAll('video[autoplay]').forEach(function (v) {
        v.removeAttribute('autoplay');
        v.pause();
      });
    }
    var targets = root.querySelectorAll([
      '.tile h1', '.tile h2', '.tile .lead', '.tile .lead-airy', '.tile .eyebrow',
      '.ctas', '.utility-card', '.quote', '.step-list li', '.metric',
      '.city-card', '.faq details', '.prose p', '.chip-row', '.ph', '.city-hero', '.form'
    ].join(','));

    var byParent = new Map();
    targets.forEach(function (el) {
      if (el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      var n = byParent.get(el.parentNode) || 0;
      el.style.setProperty('--rv', Math.min(n * 70, 420) + 'ms');
      byParent.set(el.parentNode, n + 1);
    });

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        entry.target.classList.add('in');
        if (entry.target.classList.contains('metric')) {
          var v = entry.target.querySelector('.value');
          if (v) countUp(v);
        }
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }

  window.nobleAnimate = init;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); });
  } else {
    init(document);
  }
})();

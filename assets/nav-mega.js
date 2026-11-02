/*
 * Mega menu featured-card carousel (ported from the live theme).
 * Crossfades the card photos while a mega menu item is hovered or focused.
 * Loaded once per mega menu item, so it only initialises the first time.
 */
(function () {
  if (window.navMegaInitialized) return;
  window.navMegaInitialized = true;

  function init() {
    document.querySelectorAll('.menu__item--mega').forEach(function (item) {
      var card = item.querySelector('.hq__mega-card--carousel');
      if (!card) return;
      var slides = card.querySelectorAll('.hq__mega-slide');
      if (slides.length < 2) return;

      var index = 0;
      var timer = null;

      function tick() {
        index = (index + 1) % slides.length;
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === index);
        });
      }

      function start() {
        if (!timer) timer = setInterval(tick, 2600);
      }

      function stop() {
        clearInterval(timer);
        timer = null;
      }

      item.addEventListener('mouseenter', start);
      item.addEventListener('mouseleave', stop);
      item.addEventListener('focusin', start);
      item.addEventListener('focusout', stop);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

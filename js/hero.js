(function () {
  const slides = Array.from(document.querySelectorAll('.dv-hero__slide'));
  const dots   = Array.from(document.querySelectorAll('.dv-hero__dots button'));
  if (!slides.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current      = 0;
  let timer        = null;
  let videoEndedFn = null;
  let videoErrorFn = null;

  function clearVideoListeners(video) {
    if (!video) return;
    if (videoEndedFn) { video.removeEventListener('ended', videoEndedFn); videoEndedFn = null; }
    if (videoErrorFn) { video.removeEventListener('error', videoErrorFn); videoErrorFn = null; }
  }

  function stopVideo(slide) {
    const v = slide && slide.querySelector('[data-hero-video]');
    if (!v) return;
    clearVideoListeners(v);
    v.pause();
    v.currentTime = 0;
  }

  function goTo(idx) {
    stopVideo(slides[current]);
    clearInterval(timer);
    timer = null;

    slides[current].classList.remove('is-active');
    dots[current] && dots[current].classList.remove('is-active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current] && dots[current].classList.add('is-active');

    start();
  }

  function start() {
    if (reducedMotion) return;

    const video = slides[current].querySelector('[data-hero-video]');

    if (video) {
      const promise = video.play();

      videoEndedFn = function () {
        clearVideoListeners(video);
        goTo(current + 1);
      };
      videoErrorFn = function () {
        clearVideoListeners(video);
        timer = setInterval(() => goTo(current + 1), 5500);
      };

      video.addEventListener('ended', videoEndedFn);
      video.addEventListener('error', videoErrorFn);

      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          clearVideoListeners(video);
          timer = setInterval(() => goTo(current + 1), 5500);
        });
      }
    } else {
      timer = setInterval(() => goTo(current + 1), 5500);
    }
  }

  goTo(0);

  dots.forEach((btn, i) => btn.addEventListener('click', () => goTo(i)));
})();

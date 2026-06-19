(function () {
  const modal   = document.getElementById('video-modal');
  const frameEl = modal && modal.querySelector('[data-video-frame]');
  if (!modal) return;

  const bgMusic = document.getElementById('bgMusic');
  let musicWasPlaying = false;

  function open() {
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';

    if (bgMusic && !bgMusic.paused) {
      musicWasPlaying = true;
      bgMusic.pause();
    }

    frameEl.innerHTML =
      '<iframe src="https://www.youtube.com/embed/2sCLs3M6mvw?autoplay=1&rel=0" ' +
      'title="Da Vinci · 30 años de historia" frameborder="0" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    modal.addEventListener(
      'transitionend',
      () => {
        modal.setAttribute('hidden', '');
        frameEl.innerHTML = '';
      },
      { once: true }
    );

    if (bgMusic && musicWasPlaying) {
      bgMusic.play().catch(() => {});
      musicWasPlaying = false;
    }
  }

  document.querySelectorAll('[data-video-open]').forEach(el => {
    el.addEventListener('click', open);
  });

  modal.querySelectorAll('[data-video-close]').forEach(el => {
    el.addEventListener('click', close);
  });

  window.addEventListener('keydown', e => {
    if (modal.classList.contains('is-open') && e.key === 'Escape') close();
  });
})();

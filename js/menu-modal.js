(function () {
  const IMAGES = Array.from({ length: 19 }, (_, i) =>
    `./img/MENU/ristorante-${String(i + 1).padStart(2, '0')}.webp`
  );

  const MENU_HASHES = new Set(['#menu', '#desayunos', '#menu-modal']);

  const modal    = document.getElementById('menu-modal');
  const slidesEl = modal && modal.querySelector('[data-menu-slides]');
  if (!modal) return;

  let built = false;

  function open() {
    if (!built) {
      buildSlides(IMAGES);
      built = true;
    }
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    if (!MENU_HASHES.has(location.hash)) {
      history.replaceState(null, '', '#menu');
    }
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (MENU_HASHES.has(location.hash)) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    modal.addEventListener('transitionend', () => modal.setAttribute('hidden', ''), { once: true });
  }

  function buildSlides(srcs) {
    slidesEl.innerHTML = '';
    srcs.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Da Vinci Menú · página ${i + 1}`;
      img.loading = i < 2 ? 'eager' : 'lazy';
      slidesEl.appendChild(img);
    });
    slidesEl.scrollTop = 0;
  }

  function handleHash() {
    if (MENU_HASHES.has(location.hash)) open();
  }

  document.querySelectorAll('[data-menu-open]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); open(); });
  });

  modal.querySelectorAll('[data-menu-close]').forEach(el => {
    el.addEventListener('click', close);
  });

  window.addEventListener('keydown', e => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
  });

  window.addEventListener('hashchange', handleHash);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleHash);
  } else {
    handleHash();
  }
})();

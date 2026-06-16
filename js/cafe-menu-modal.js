(function () {
  const IMAGES = {
    norte: [
      './img/MENU/cafe-norte-01.webp',
      './img/MENU/cafe-norte-02.webp',
    ],
    sur: [
      './img/MENU/cafe-sur-01.webp',
      './img/MENU/cafe-sur-02.webp',
    ],
  };

  const MENU_HASHES = new Set(['#menu', '#menu-norte', '#menu-sur']);

  const modal    = document.getElementById('cafe-menu-modal');
  const slidesEl = modal && modal.querySelector('[data-cafe-menu-slides]');
  const tabBtns  = modal && modal.querySelectorAll('[data-cafe-menu-tab]');
  if (!modal) return;

  function open(tab) {
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    setTab(tab || 'norte');
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (MENU_HASHES.has(location.hash)) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    modal.addEventListener('transitionend', () => modal.setAttribute('hidden', ''), { once: true });
  }

  function setTab(name) {
    tabBtns.forEach(btn => btn.classList.toggle('is-active', btn.dataset.cafeMenuTab === name));
    buildSlides(IMAGES[name]);
    history.replaceState(null, '', '#menu-' + name);
  }

  function buildSlides(srcs) {
    slidesEl.innerHTML = '';
    srcs.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `DaVinci Café Menú · página ${i + 1}`;
      img.loading = i === 0 ? 'eager' : 'lazy';
      slidesEl.appendChild(img);
    });
    slidesEl.scrollTop = 0;
  }

  function handleHash() {
    const hash = location.hash;
    if (hash === '#menu' || hash === '#menu-norte') open('norte');
    else if (hash === '#menu-sur') open('sur');
  }

  document.querySelectorAll('[data-cafe-menu-open]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); open(); });
  });

  modal.querySelectorAll('[data-cafe-menu-close]').forEach(el => {
    el.addEventListener('click', close);
  });

  tabBtns.forEach(btn => btn.addEventListener('click', () => setTab(btn.dataset.cafeMenuTab)));

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

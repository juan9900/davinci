(function () {
  const nav    = document.querySelector('.dv-nav');
  const mobile = document.querySelector('.dv-mobile');
  const burger = document.querySelector('.dv-burger');
  const close  = document.querySelector('.dv-mobile__close');

  function onScroll() {
    nav.dataset.scrolled = window.scrollY > 60 ? 'true' : 'false';
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function openMenu()  { mobile.dataset.open = 'true';  document.body.style.overflow = 'hidden'; }
  function closeMenu() { mobile.dataset.open = 'false'; document.body.style.overflow = ''; }

  burger && burger.addEventListener('click', openMenu);
  close  && close.addEventListener('click',  closeMenu);

  document.querySelectorAll('.dv-mobile a').forEach(a => a.addEventListener('click', closeMenu));
})();

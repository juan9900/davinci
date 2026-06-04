DV.ready(() => {
  const btn = document.querySelector('.promo-plates-container');
  if (!btn) return;
  const plates = document.querySelector('.promo-plates');
  const arrow = document.querySelector('.arrow-down');

  btn.addEventListener('click', () => {
    plates?.classList.toggle('active');
    btn.classList.toggle('active');
    arrow?.classList.toggle('rotate');
  });
});

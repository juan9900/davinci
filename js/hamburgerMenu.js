DV.ready(() => {
  const menuBtn = document.querySelector('.hamburger-container');
  const hamburgerIcon = document.querySelector('.hamburguer');
  const mobileMenu = document.querySelector('.mobile-nav');
  if (!menuBtn || !hamburgerIcon || !mobileMenu) return;

  const toggle = () => {
    hamburgerIcon.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
  };

  menuBtn.addEventListener('click', toggle);

  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', toggle);
  });
});

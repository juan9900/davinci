(() => {
  const sr = ScrollReveal();

  const defaultOpts = { duration: 4000, origin: 'right', distance: '-50px' };

  const targets = [
    '.images-banner',
    '.nosotros',
    '.vision',
    '.contact-zone',
    '.promos',
  ];

  targets.forEach((sel) => sr.reveal(sel, defaultOpts));

  sr.reveal('#reproducir', { duration: 4000, origin: 'bottom', distance: '-30px' });
})();

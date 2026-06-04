DV.ready(() => {
  const arrowPath = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
  const breakpoints = {
    600: { perPage: 1 },
    850: { perPage: 2 },
    1280: { perPage: 3 },
  };

  const configs = [
    { selector: '.splide', options: { type: 'loop', autoplay: true, lazyLoad: 'nearby' } },
    { selector: '.slider3', options: {} },
    { selector: '#card-slider', options: { perPage: 2, loop: false, breakpoints, arrowPath } },
    { selector: '#bebidas-slider', options: { perPage: 4, breakpoints, arrowPath } },
  ];

  configs.forEach(({ selector, options }) => {
    if (!document.querySelector(selector)) return;
    new Splide(selector, options).mount();
  });
});

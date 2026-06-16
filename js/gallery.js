(function () {
  const box   = document.querySelector('.lightbox');
  const boxImg = box && box.querySelector('img');
  const closeBtn = box && box.querySelector('.lightbox__close');
  if (!box) return;

  function open(src) {
    boxImg.src = src;
    box.dataset.open = 'true';
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.dataset.open = 'false';
    document.body.style.overflow = '';
    boxImg.src = '';
  }

  document.querySelectorAll('.tile').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if (img) open(img.src);
    });
  });

  closeBtn && closeBtn.addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

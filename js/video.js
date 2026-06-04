DV.ready(() => {
  const pararButton = document.getElementById('parar');
  const btnReproducir = document.getElementById('reproducir');
  const header = document.getElementById('splide');
  const video = document.getElementById('video');
  if (!pararButton || !btnReproducir || !header || !video) return;

  window.reproducir = () => {
    video.play();
    header.classList.add('none');
    video.classList.remove('none');
    pararButton.classList.remove('none');
    btnReproducir.classList.add('none');
  };

  window.pausar = () => {
    video.pause();
    header.classList.remove('none');
    pararButton.classList.add('none');
    btnReproducir.classList.remove('none');
    video.classList.add('none');
  };

  btnReproducir.addEventListener('click', window.reproducir);
});

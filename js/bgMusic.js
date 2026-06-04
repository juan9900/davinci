DV.ready(() => {
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('music-btn');
  const pauseImg = document.querySelector('.pause-img');
  if (!bgMusic || !musicBtn) return;

  bgMusic.volume = 0.05;

  musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      if (pauseImg) pauseImg.src = '/img/Simple_Music.-whitesvg.svg';
    } else {
      bgMusic.pause();
      if (pauseImg) pauseImg.src = '/img/Simple_Music.-nosvg.svg';
    }
  });
});

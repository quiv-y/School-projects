document.addEventListener('keydown', e => {
	if (e.key === 'ArrowLeft') {
		changeSlide(-1);
	}
	if (e.key === 'ArrowRight') {
		changeSlide(1);
	}
})

const slides = document.querySelectorAll('.slide')
let currentSlideIndex = 0;

function changeSlide(dir) {
	showSlide(currentSlideIndex + dir);
}

function showSlide(n) {
  const overlay = document.getElementById('overlay');

  overlay.style.transition = 'transform 0.28s cubic-bezier(.77,0,.18,1)';
  overlay.style.transform = 'translateX(0%)';

  setTimeout(() => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (n + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
    if (currentSlideIndex == 3) {
      setTimeout(runFactSlide, 700);
    } else {
      resetFactSlide();
    }
    const pct = ((currentSlideIndex + 1) / slides.length * 100).toFixed(0);
    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('slide-counter').textContent = (currentSlideIndex + 1) + ' / ' + slides.length;

    overlay.style.transition = 'transform 0.32s cubic-bezier(.77,0,.18,1)';
    overlay.style.transform = 'translateX(100%)';

    setTimeout(() => {
      overlay.style.transition = 'none';
      overlay.style.transform = 'translateX(-100%)';
    }, 350);

  }, 260);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(3);
});
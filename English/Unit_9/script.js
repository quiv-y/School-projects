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
	slides[currentSlideIndex].classList.remove('active');
	currentSlideIndex = (n + slides.length) % slides.length;
	slides[currentSlideIndex].classList.add('active');

	const pct = ((currentSlideIndex + 1) / slides.length * 100).toFixed(0);
	document.getElementById('progress-bar').style.width = pct + '%';
	document.getElementById('slide-counter').textContent = (currentSlideIndex + 1) + ' / ' + slides.length;
}

showSlide(2);
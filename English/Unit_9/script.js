const memeQuotes = [
  "I just molested a kid. In 10 years they will make a Google Doc about it, or even a Netflix Documentary.",
  "I missed slavery. It was my favourite periode.",
  "P. Diddy was a real homie. Too bad he got caught, at least I didn't",
  "Epstein was just molesting kids. Nothing too bad.",
  "Imagine the teacher seing this. At least she won't, right ?",
  "Life is like a Dick. And kids only make it harder.",
]

const authors = [
  "Rayane Boutoughbine",
  "Adam Sabir",
  "Achraf Tahiri",
  "Imran Amiri",
]

let currentMemeQuoteIndex = 0;

document.addEventListener('keydown', e => {
	if (e.key === 'ArrowLeft') {
		changeSlide(-1);
	}
	if (e.key === 'ArrowRight') {
		changeSlide(1);
	}
  if (e.key === 'm' && currentSlideIndex == 6) {
      AUTHOR = authors[Math.floor(Math.random()*authors.length)];
      QUOTE = memeQuotes[currentMemeQuoteIndex];
      currentMemeQuoteIndex = (currentMemeQuoteIndex + 1) % memeQuotes.length;

      resetQuoteSlide()
      setTimeout(runQuoteSlide, 10);
  }
  if (e.key === 'M' && currentSlideIndex == 6) {
      AUTHOR = "Ayn Rand"
      QUOTE = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
      resetQuoteSlide()
      setTimeout(runQuoteSlide, 700);
  }
});

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
      resetFactSlide()
      setTimeout(runFactSlide, 900);
    }
    if (currentSlideIndex == 4) {
      resetIneqSlide();
      setTimeout(runIneqSlide, 700);
    }
    if (currentSlideIndex == 6) {
      resetQuoteSlide();
      setTimeout(runQuoteSlide, 700);
    }
    if (currentSlideIndex == 7) {
      resetTySlide();
      setTimeout(runTySlide, 700);
    }
    if (currentSlideIndex === 5) {
      startHtemBg();
    } else {
      stopHtemBg();
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
  showSlide(0);
});

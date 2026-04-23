const htemCards = document.querySelectorAll(".htem-card"); // 3
let currentHtemCardIndex = -1;

function changeHtemCard(dir) {
	showHtemCard(currentHtemCardIndex + dir);
}

function showHtemCard(n) {
	// htemCards[currentHtemCardIndex].classList.add('flipped');
	currentHtemCardIndex = (n + htemCards.length) % htemCards.length;
	htemCards[currentHtemCardIndex].classList.remove('flipped');	
}

document.addEventListener('keydown', e => {
	if (e.key === 'ArrowUp' && currentSlideIndex == 5) {
		changeHtemCard(1);
	}
	if (e.key === 'ArrowDown' && currentSlideIndex == 5) {
		changeHtemCard(-1);
	}
})

function resetHtemSlide() {
	for (var i = htemCards.length - 1; i >= 0; i--) {
		htemCards[i].classList.add("flipped");
	}
}

(function() {
  const canvas = document.getElementById('htem-bg');
  const ctx = canvas.getContext('2d');
  const slide = document.getElementById('slide-htem');

  function resize() {
    canvas.width = slide.offsetWidth;
    canvas.height = slide.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = 120;
  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 0.3 + Math.random() * 1.2,
    speed: 0.08 + Math.random() * 0.25,
    opacity: 0.2 + Math.random() * 0.6,
    twinkle: Math.random() * Math.PI * 2,
    twinkleSpd: 0.01 + Math.random() * 0.03,
  }));

  let rafId = null;

  function draw() {
    ctx.fillStyle = 'rgba(8,6,4,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.y -= p.speed;
      p.twinkle += p.twinkleSpd;
      if (p.y < -2) { p.y = canvas.height + 2; p.x = Math.random() * canvas.width; }

      const op = p.opacity * (0.6 + 0.4 * Math.sin(p.twinkle));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${op})`;
      ctx.fill();
    }

    rafId = requestAnimationFrame(draw);
  }

  window.startHtemBg = function() { if (!rafId) draw(); };
  window.stopHtemBg  = function() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  };
})();
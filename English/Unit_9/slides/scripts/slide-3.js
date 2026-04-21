const tlItems = document.querySelectorAll('.tl-item');
const tlPos = document.querySelector('.tl-pos');
const tlProgress = document.querySelector('.tl-progress-fill');
let currentTlItemIndex = 0;

function moveDot(index) {
  const goingBack = index < currentTlItemIndex;

  tlItems[currentTlItemIndex].classList.remove('active');
  if (goingBack) {
    for (let i = index + 1; i <= currentTlItemIndex; i++) {
      tlItems[i].classList.remove('active');
      tlItems[i].classList.remove('activated');
    }
  } else {
    tlItems[currentTlItemIndex].classList.add('activated');
  }

  currentTlItemIndex = index;
  setTimeout(() => {
    tlItems[currentTlItemIndex].classList.remove('activated');
  }, 500);

  tlItems[currentTlItemIndex].classList.add('active');

  const ghost = tlItems[index].querySelector('.tl-ghost-dot');
  const ghostRect = ghost.getBoundingClientRect();
  const timelineRect = document.querySelector('.timeline').getBoundingClientRect();
  const targetLeft = ghostRect.left - timelineRect.left + 1;
  tlPos.style.left = targetLeft + 'px';

  const pct = (targetLeft / timelineRect.width) * 100;
  tlProgress.style.width = pct + '%';
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && currentSlideIndex == 2) moveDot(Math.min(currentTlItemIndex + 1, tlItems.length - 1));
    if (e.key === 'ArrowDown' && currentSlideIndex == 2)  moveDot(Math.max(currentTlItemIndex - 1, 0));
});

document.addEventListener('DOMContentLoaded', () => {
    moveDot(0);
});

const coinPool = document.getElementById("coin-pool");
for (let i = 0; i < 18; i++) {
    const coin = document.createElement('div');
    const size = 10 + Math.random() * 14;

    coin.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #F5D76E, #9A7D0A);
      left: ${Math.random() * 100}%;
      bottom: -30px;
      opacity: 0;
      filter: blur(1.2rem);
      pointer-events: none;
      animation: coinFloat ${4 + Math.random() * 6}s ${Math.random() * 8}s linear infinite;
      z-index: -1;
    `;

    coinPool.appendChild(coin);
}
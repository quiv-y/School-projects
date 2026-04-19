const tlItems = document.querySelectorAll('.tl-item');
const tlPos = document.querySelector('.tl-pos');
const tlProgress = document.querySelector('.tl-progress-fill');
let currentTlItemIndex = 0;

function moveDot(index) {
    tlItems[currentTlItemIndex].classList.remove('active');
    tlItems[currentTlItemIndex].classList.add('activated');
    currentTlItemIndex = index;
    tlItems[currentTlItemIndex].classList.add('active');

    const ghost = tlItems[index].querySelector('.tl-ghost-dot');
    const ghostRect = ghost.getBoundingClientRect();
    const timelineRect = document.querySelector('.timeline').getBoundingClientRect();

    const targetLeft = ghostRect.left - timelineRect.left + 1;
    tlPos.style.left = targetLeft + 'px';

    const pct = (targetLeft / timelineRect.width) * 100;
    tlProgress.style.width = pct + '%';
}
// tl items = 4; index can be 0-4;
// 0/5 = 0; 1/5 = .20; 2/5 = .5; 3/4; .75; 4/4 = 1;


document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') moveDot(Math.min(currentTlItemIndex + 1, tlItems.length - 1));
    if (e.key === 'ArrowDown')  moveDot(Math.max(currentTlItemIndex - 1, 0));
});

moveDot(0);
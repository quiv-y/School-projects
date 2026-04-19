const cards = document.querySelectorAll(".card"); // 3
let currentCardIndex = 0;

function changeCard(dir) {
	showCard(currentCardIndex + dir);
}

// 0 = 1; 1 = 2; 2 = 3;
// 0 % 2 = 0; 1 % 2 = 1; 2 % 2 = 0; 3 % 2 = 1

function showCard(n) {
	cards[currentCardIndex].classList.remove('active');
	currentCardIndex = (n + cards.length) % cards.length;
	cards[currentCardIndex].classList.add('active');	
}

document.addEventListener('keydown', e => {
	if (e.key === 'ArrowUp') {
		changeCard(1);
	}
	if (e.key === 'ArrowDown') {
		changeCard(-1);
	}
})

showCard(0);
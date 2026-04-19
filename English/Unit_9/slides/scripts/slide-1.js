const moneyRain = document.getElementById('money-rain');
const symbols = ['$', '€', '£', '¥', '₿'];

function makeCoins() {
  for (let i = 0; i < 12; i++) {
    const c = document.createElement('div');
    c.className = 'coin';
    c.textContent = symbols[i % symbols.length];
    c.style.left = (Math.random() * 95) + '%';
    c.style.animationDuration = (6 + Math.random() * 8) + 's';
    c.style.animationDelay = (Math.random() * 10) + 's';
    c.style.width = c.style.height = (30 + Math.random() * 20) + 'px';
    c.style.fontSize = (0.7 + Math.random() * 0.5) + 'rem';
    moneyRain.appendChild(c);
  }
}

function removeCoins() {
  const coins = document.querySelectorAll('.coin');
  for (var i = coins.length - 1; i >= 0; i--) {
    coins[i].remove();
  }
}

makeCoins()
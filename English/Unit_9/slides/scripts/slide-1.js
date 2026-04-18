  const moneyRain = document.getElementById('money-rain');
  const symbols = ['$', '€', '£', '¥', '₿'];
  
  for (let i = 0; i < 18; i++) {
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
function runTySlide() {
  document.getElementById('slide-7').classList.add('active');
  spawnTyCoins(22);
}
 
function resetTySlide() {
  document.getElementById('ty-coins').innerHTML = '';
}
 
function spawnTyCoins(count) {
  const pool = document.getElementById('ty-coins');
  pool.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const coin = document.createElement('div');
    const size = 8 + Math.random() * 16;
    coin.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #F5D76E, #9A7D0A);
      left: ${Math.random() * 100}%;
      bottom: -30px;
      opacity: 0;
      pointer-events: none;
      animation: coinFloat ${5 + Math.random() * 7}s ${Math.random() * 6}s linear infinite;
    `;
    pool.appendChild(coin);
  }
}
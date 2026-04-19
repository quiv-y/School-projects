function countUp(el) {
  const target  = parseFloat(el.dataset.target);
  const prefix  = el.dataset.prefix  || '';
  const suffix  = el.dataset.suffix  || '';
  const isFloat = target % 1 !== 0;
  const dur     = 1800;   // ms for the count
  const start   = performance.now();
 
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
 
  function tick(now) {
    const elapsed = now - start;
    const t       = Math.min(elapsed / dur, 1);
    const eased   = easeOutExpo(t);
    const current = isFloat
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);
 
    el.textContent = prefix + current + suffix;
 
    if (t < 1) requestAnimationFrame(tick);
  }
 
  requestAnimationFrame(tick);
}
 
function runFactSlide() {
  const slide = document.getElementById('slide-4');
 
 
  document.querySelectorAll('#slide-4 .fact-num').forEach((el, i) => {
    setTimeout(() => countUp(el), i * 120 + 300);
  });
}

function resetFactSlide() {
  const slide = document.getElementById('slide-4');
  slide.classList.remove('active');
  document.querySelectorAll('#slide-4 .fact-num').forEach(el => {
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    el.textContent = prefix + '0' + suffix;
  });
}
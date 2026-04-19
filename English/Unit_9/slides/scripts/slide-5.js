function runIneqSlide() {
  document.getElementById('slide-5').classList.add('active');
 
  setTimeout(() => {
    document.querySelectorAll('#slide-5 .gp-fill').forEach((fill, i) => {
      const target = parseFloat(fill.dataset.width);
      setTimeout(() => {
        fill.style.width = target + '%';
      }, i * 80);
    });
  }, 300);
}
 
function resetIneqSlide() {
  document.getElementById('slide-5').classList.remove('active');
  document.querySelectorAll('#slide-5 .gp-fill').forEach(fill => {
    fill.style.transition = 'none';
    fill.style.width = '0%';
    requestAnimationFrame(() => {
      fill.style.transition = '';
    });
  });
}
let typeTimer = null;

let AUTHOR = 'Ayn Rand';
let QUOTE = 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.';

function runQuoteSlide() {
  const slide  = document.getElementById('slide-6');
  const output = document.getElementById('quote-output');
  const cursor = document.getElementById('quote-cursor');
  const author = document.getElementById('quote-author');
  const authorName = document.getElementById('quote-author-name');
 
  slide.classList.add('active');
  cursor.classList.add('visible');
  authorName.textContent = '';
 
  let i = 0;
  const speed = 38;
 
  function typeNext() {
    if (i < QUOTE.length) {
      output.textContent += QUOTE[i];
      i++;
      typeTimer = setTimeout(typeNext, speed);
    } else {
      cursor.classList.remove('visible');
      cursor.classList.add('done');
 
      let j = 0;
      function typeAuthor() {
        if (j < AUTHOR.length) {
          authorName.textContent += AUTHOR[j];
          j++;
          typeTimer = setTimeout(typeAuthor, 55);
        }
      }
 
      author.classList.add('visible');
      setTimeout(typeAuthor, 300);
    }
  }
 
  typeTimer = setTimeout(typeNext, 600);
}
 
function resetQuoteSlide() {
  clearTimeout(typeTimer);
 
  const slide  = document.getElementById('slide-6');
  const output = document.getElementById('quote-output');
  const cursor = document.getElementById('quote-cursor');
  const author = document.getElementById('quote-author');
  const authorName = document.getElementById('quote-author-name');
  
  author.classList.remove('visible');
  output.textContent = '';
  authorName.textContent = '';
  cursor.classList.remove('visible', 'done');
}
const memes = document.querySelectorAll('.meme');

document.addEventListener('keydown', e => {
    if (e.key === '1') {
        memes[0].classList.add('meme-on');
    }
    if (e.key === '2') {
        memes[1].classList.add('meme-on');
    }
    if (e.key === '3') {
        memes[2].classList.add('meme-on');
    }
    if (e.key === 'x') {
        document.querySelectorAll('.meme.meme-on').forEach(m => m.classList.remove('meme-on'));
    }
});
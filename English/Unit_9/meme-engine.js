const memes = document.querySelectorAll('.meme');
const sounds = document.querySelectorAll('.sound');

let meme = null;

document.addEventListener('keydown', e => {
    if (e.key === '1') {
        showMeme(memes[0], 'fb');
    }
    if (e.key === '2') {
        showMeme(memes[1]);
    }
    if (e.key === '3') {
        showMeme(memes[2], 'boom');
    }
    if (e.key === '4') {
        showMeme(memes[3]);
    }
    if (e.key === '5') {
        showMeme(memes[4]);
    }
    if (e.key === 'x') {
        showMeme(null);
    }
});

function showMeme(nextMeme, id) {
    if (meme == nextMeme) {
        meme.classList.remove('meme-on');
        meme = null;
        return;
    }
    if (meme != null) {
        meme.classList.remove('meme-on');
    }
    if (nextMeme == null) {
        meme = null;
        return;
    }

    playSound(id);

    meme = nextMeme;
    meme.classList.add('meme-on');
}

function playSound(id) {
    if (id == null) {
        return;
    }

    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}
const sounds = document.querySelectorAll('.sound');
let meme = null;
const hubVid = document.getElementById('hubVid');

hubVid.addEventListener('ended', () => {
    showMeme(null);
    showMeme(document.getElementById('rock'));
});

document.addEventListener('keydown', e => {
    if (e.key === '1') showMeme(document.getElementById('ashbaby'), 'fb');
    if (e.key === '2') showMeme(document.getElementById('tuffbb'));
    if (e.key === '3') showMeme(document.getElementById('shockedngg'), 'boom');
    if (e.key === '4') showMeme(document.getElementById('ext'));
    if (e.key === '5') showMeme(document.getElementById('ddornodd'));
    if (e.key === '6') showMeme(document.getElementById('jeffinmaid'), 'wow');
    if (e.key === '7') showMeme(document.getElementById('nph'));
    if (e.key === '8') showMeme(document.getElementById('diddyHi'), 'goo');
    if (e.key === '9') showMeme(document.getElementById('hubVid'));
    if (e.key === '0') showMeme(document.getElementById('rock'), 'boom');
    if (e.key === 'x') showMeme(null);

    if (e.key === '!') playSound('fb');
    if (e.key === '@') playSound('hub');
    if (e.key === '#') playSound('boom');
    if (e.key === '$') playSound(null);
    if (e.key === '%') playSound(null);
    if (e.key === '^') playSound('wow');
    if (e.key === '&') playSound('fahh');
    if (e.key === '*') playSound('goo');
    if (e.key === 'c' || e.key === 'C') {
        sounds.forEach(s => {
            if (!s.paused && !s.ended) {
                s.pause();
                s.currentTime = 0;
            }
        });
    }
});

function showMeme(nextMeme, id) {
    // Toggle off if same meme pressed again
    if (meme === nextMeme) {
        meme.classList.remove('meme-on');
        if (meme === hubVid) {
            meme.pause();
            meme.currentTime = 0;
        }
        meme = null;
        return;
    }

    // Hide current meme
    if (meme !== null) {
        meme.classList.remove('meme-on');
        if (meme === hubVid) {
            meme.pause();
            meme.currentTime = 0;
        }
        meme = null;
    }

    if (nextMeme === null) return;

    // Show next meme
    playSound(id);
    meme = nextMeme;
    meme.classList.add('meme-on');

    if (meme === hubVid) {
        meme.currentTime = 0;
        meme.play();
    }
}

function playSound(id) {
    if (id == null) return;
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}
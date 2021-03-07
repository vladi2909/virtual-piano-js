const fullscreen = document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
btnNotes.addEventListener('click', activeBtns);
btnLetters.addEventListener('click', activeBtns);

const pianoКeys = document.querySelectorAll('.piano-key');
let flagKeyboard = false;

function toggleScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}

function activeBtns(e) {
    if (e.target.classList.contains('btn-letters') && !e.target.classList.contains('btn-active')) {
        btnLetters.classList.add('btn-active');
        btnNotes.classList.remove('btn-active');
        pianoКeys.forEach(key => key.classList.add('key-active'));
    } else if (e.target.classList.contains('btn-notes') && !e.target.classList.contains('btn-active')) {
        btnNotes.classList.add('btn-active');
        btnLetters.classList.remove('btn-active');
        pianoКeys.forEach(key => key.classList.remove('key-active'));
    }
}

function activeKeys() {

}

function playSound(e) {
    const code = e.code.slice(3, e.code.length);
    const key = document.querySelector(`.piano-key[data-letter="${code}"]`);
    let audio = null;
    
    if (e.type === 'keydown') {
        if(flagKeyboard) return;
        flagKeyboard = true;
        audio = document.querySelector(`audio[data-key="${code}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('piano-key-active');
    } else if (e.type === 'keyup') {
        flagKeyboard = false;
        if(!key) return;
        key.classList.remove('piano-key-active');
    }

    
}

window.addEventListener('keydown', (e) => playSound(e));
window.addEventListener('keyup', (e) => playSound(e));
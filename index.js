const fullscreen = document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
btnNotes.addEventListener('click', activeBtns);
btnLetters.addEventListener('click', activeBtns);

const keys = document.querySelectorAll('.piano-key');

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
        keys.forEach(key => key.classList.add('key-active'));
    } else if (e.target.classList.contains('btn-notes') && !e.target.classList.contains('btn-active')) {
        btnNotes.classList.add('btn-active');
        btnLetters.classList.remove('btn-active');
        keys.forEach(key => key.classList.remove('key-active'));
    }
}
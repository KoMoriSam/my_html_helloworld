var button = document.querySelector('button'),
    audio = null;

button.addEventListener('click', handler, false);

function handler() {
  audio = new Audio('');
  audio.play();
}
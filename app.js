var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let sliderValue = document.querySelector('.sweet-slider-title');
let menu = document.querySelector('.header-menu');
let playBtn = document.querySelector('.sweet-round-button');
let audio = document.getElementById('audio-track');
let audioState = document.getElementById('name');
let audioIcon = document.getElementById('audio-icon');
let pianoTiles = document.querySelectorAll('.piano-key');
let audioTracks = document.querySelectorAll('.audio audio');

menu.style.display = "none";

slider.oninput = function() {
  sliderValue.innerHTML = 'BPM: ' + this.value;
}

function showNav() {
  if(menu.style.display == "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}

function playAudio() {
  if(audio.paused) {
    audio.play();
    audioState.innerHTML = 'Pause';
    audioIcon.classList.remove('icon-play');
    audioIcon.classList.add('icon-pause');

  }
  else {
    audioState.innerHTML = 'Play';
    audio.pause();
    audioIcon.classList.remove('icon-pause');
    audioIcon.classList.add('icon-play');
  }
}

function generateAudio() {
  if(audio.paused) {
    audio.play();
    audio.currentTime = 0;
  }
  else {
    audio.pause();
  }
}

pianoTiles.forEach((pianoTile, index) => {
  pianoTile.onclick = () => {
    let src = audioTracks[index].getAttribute("src");
    let audioTrack = new Audio(src);
    let color = pianoTile.style.backgroundColor;
    pianoTile.style.backgroundColor = "#3175EC";
    setTimeout(() => changeColor(pianoTile, color), 100);
    audioTrack.play();
  }
})

function changeColor(element, color) {
  element.style.backgroundColor = color;
}
var mainVideo = document.getElementById("rain-vid");
var timer = 0;

function checkPlay(video) {
  isPlaying = document.getElementById("ppButton").src.endsWith("pause.png");
  if (isPlaying) {
    video.play();
  } else {
    video.pause();
  }
}

function fire() {
  video = document.getElementById("fire-vid");
  mainVideo = video;
  checkPlay(video);
  document.getElementById("fire-vid").style.display = "initial";
  document.getElementById("beach-vid").style.display = "none";
  document.getElementById("rain-vid").style.display = "none";
  document.getElementById("wind-vid").style.display = "none";

  //audio 
  document.getElementById("fire-vid").muted = false;
  document.getElementById("beach-vid").muted = true;
  document.getElementById("rain-vid").muted = true;
  document.getElementById("wind-vid").muted = true;
}

function beach() {
  video = document.getElementById("beach-vid");
  mainVideo = video;
  checkPlay(video);
  document.getElementById("beach-vid").style.display = "initial";
  document.getElementById("fire-vid").style.display = "none";
  document.getElementById("rain-vid").style.display = "none";
  document.getElementById("wind-vid").style.display = "none";

  document.getElementById("beach-vid").muted = false;
    document.getElementById("fire-vid").muted = true;
    document.getElementById("rain-vid").muted = true;
    document.getElementById("wind-vid").muted = true;
  return video;
}

function wind() {
  video = document.getElementById("wind-vid");
  mainVideo = video;
  checkPlay(video);
  document.getElementById("wind-vid").style.display = "initial";
  document.getElementById("beach-vid").style.display = "none";
  document.getElementById("rain-vid").style.display = "none";
  document.getElementById("fire-vid").style.display = "none";

  document.getElementById("wind-vid").muted = false;
  document.getElementById("beach-vid").muted = true;
  document.getElementById("rain-vid").muted = true;
  document.getElementById("fire-vid").muted = true;
  return video;
}

function rain() {
  video = document.getElementById("rain-vid");
  mainVideo = video;
  checkPlay(video);



  document.getElementById("rain-vid").style.display = "initial";
  document.getElementById("beach-vid").style.display = "none";
  document.getElementById("fire-vid").style.display = "none";
  document.getElementById("wind-vid").style.display = "none";

document.getElementById("rain-vid").muted = false;
    document.getElementById("beach-vid").muted = true;
    document.getElementById("fire-vid").muted = true;
    document.getElementById("wind-vid").muted = true;
  return video;
}

function playPause() {
  ppButton = document.getElementById("ppButton").src;
  if (ppButton.endsWith("pause.png")) {
    console.log(mainVideo);
    ppButton = ppButton.replace("pause.png", "play.png");
    document.getElementById("ppButton").src = ppButton;
    mainVideo.pause();
  } else {
    ppButton = ppButton.replace("play.png", "pause.png");
    document.getElementById("ppButton").src = ppButton;
    mainVideo.play();
  }
}

function twoMinutes() {
  timer = 120000;
  timerDisplay.innerHTML = msToTimeString(timer);
}

function fiveMinutes() {
  timer = 300000;
  timerDisplay.innerHTML = msToTimeString(timer);
}

function tenMinutes() {
  timer = 600000;
  timerDisplay.innerHTML = msToTimeString(timer);
}

function customMinutes() {
  timer = document.getElementById("custom-button").value * 60000;
  timerDisplay.innerHTML = msToTimeString(timer);
  document.getElementById("custom-button").value = "none";
}

function msToTimeString(ms) {
  let seconds = (ms / 1000) % 60;
  let minutes = Math.floor(ms / 1000 / 60) % 60;
  let hours = Math.floor(ms / 1000 / 60 / 60);

  seconds = ("0" + seconds).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  hours = ("0" + hours).slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

const timerDisplay = document.getElementById("timer-display");
const timerButton = document.getElementById("ppButton");

timerButton.addEventListener("click", () => {
    counter = 1;
    if (counter == 1) {
      setInterval(() => {
        timer -= 1000;
        if (timer < 0) {
          mainVideo.pause();
          document.getElementById("ppButton").src = document
            .getElementById("ppButton")
            .src.replace("pause.png", "play.png");
          return;
        }
        timerDisplay.innerHTML = msToTimeString(timer);
      }, 1000);
      counter = 0
  } else {

  }
});
const startButton = document.querySelector("#startButton");
const startOverlay = document.querySelector("#startOverlay");
const topUI = document.querySelector("#topUI");
const timeText = document.querySelector("#timeText");

let timeLeft = 30;

startButton.addEventListener("click", function () {
  startOverlay.classList.add("hidden");
  topUI.classList.remove("hidden");
  startTimer();
});

function startTimer() {
  setInterval(function () {
    timeLeft = timeLeft - 1;
    timeText.textContent = timeLeft;
  }, 1000)
}
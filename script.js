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
  const timer = setInterval(function () {
    
    timeLeft = timeLeft - 10;
    timeText.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeText.textContent = 0;
    }
    
  }, 1000)
}

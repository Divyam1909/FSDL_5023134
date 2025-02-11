let score = 0;
let timeLeft = 15;
let gameInterval;

const clickButton = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameBox = document.querySelector(".game-box");
const restartContainer = document.getElementById("restart-container");
const restartButton = document.getElementById("restartButton");

// Function to start/restart the game
function startGame() {
  score = 0;
  timeLeft = 15;
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 15s";
  clickButton.disabled = false;
  restartContainer.classList.add("hidden");
  repositionButton(); // Position button at a random location initially

  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clickButton.disabled = true;
      restartContainer.classList.remove("hidden");
      alert(`Game over! Your score: ${score}`);
    }
  }, 1000);
}

// Reposition the click button randomly within the game-box
function repositionButton() {
  const boxWidth = gameBox.clientWidth;
  const boxHeight = gameBox.clientHeight;
  const buttonWidth = clickButton.offsetWidth;
  const buttonHeight = clickButton.offsetHeight;

  // Calculate the maximum allowed left and top positions
  const maxLeft = boxWidth - buttonWidth;
  const maxTop = boxHeight - buttonHeight;

  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  clickButton.style.left = randomLeft + "px";
  clickButton.style.top = randomTop + "px";
}

// Main click event listener for the game button
clickButton.addEventListener("click", () => {
  // Start game on the first click if the game hasn't started
  if (timeLeft === 15 && score === 0) {
    startGame();
  }
  // If game is active, increment score and reposition the button
  if (timeLeft > 0) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    repositionButton();
  }
});

// Restart button event listener to restart the game
restartButton.addEventListener("click", () => {
  clearInterval(gameInterval);
  startGame();
});

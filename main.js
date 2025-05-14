let currentStreak = 0;
let highestStreak = 0;
let currentNumber = 0;
let timeLeft = 10;
let attemptLeft = 5;
let timeInterval;
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function updaateNumber() {
  currentNumber = generateRandomNumber();
  document.getElementById(
    "numberDisplay"
  ).textContent = `Number : ${currentNumber} `;
}
function guessEven() {
  if (currentNumber % 2 === 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}
function guessOdd() {
  if (currentNumber % 2 != 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}
function correctGuess() {
  currentStreak++;
  if (currentStreak > highestStreak) {
    highestStreak = currentStreak;
  }
  document.getElementById("result").textContent = "Correct!";
  updaateNumber();
  updateStreaks();
  resettimer();
}
function wrongGuess() {
  currentStreak = 0;
  attemptLeft--;
  document.getElementById("result").textContent = "Wrong!";
  updaateNumber();
  updateStreaks();
  updateAttempts();
  resettimer();
  if (attemptLeft == 0) {
    endGame();
  }
}
function updateStreaks() {
  document.getElementById("currentStreak").textContent = currentStreak;
  document.getElementById("highestStreak").textContent = highestStreak;
}
function updateAttempts() {
  document.getElementById("attemptsLeft").textContent = attemptLeft;
}
function startTimer() {
  timeLeft = 10;
  document.getElementById("timer").textContent = timeLeft;
  timeInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      wrongGuess();
    }
  }, 1000);
}
function resettimer() {
  clearInterval(timeInterval);
  startTimer();
}
function endGame() {
  clearInterval(timeInterval);
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("gameOverMessage").style.display = "block";
  document.getElementById("evenBtn").disabled = true;
  document.getElementById("oddBtn").disabled = true;
}
function resetGame() {
  currentStreak = 0;
  highestStreak = 0;
  attemptLeft = 5;
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("gameOverMessage").style.display = "none";
  document.getElementById("evenBtn").disabled = false;
  document.getElementById("oddBtn").disabled = false;
  updateAttempts();
  updateStreaks();
  updaateNumber();
  startTimer();
}

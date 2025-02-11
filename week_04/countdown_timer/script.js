let countdown

function startTimer() {
  clearInterval(countdown)
  const minutes = Number.parseInt(document.getElementById("minutes").value)
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.")
    return
  }

  let totalSeconds = minutes * 60
  updateTimerDisplay(totalSeconds)

  countdown = setInterval(() => {
    totalSeconds--
    updateTimerDisplay(totalSeconds)

    if (totalSeconds <= 0) {
      clearInterval(countdown)
      alert("Time is up!")
    }
  }, 1000)
}

function updateTimerDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}


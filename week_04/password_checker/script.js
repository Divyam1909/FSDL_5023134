const passwordInput = document.getElementById("password")
const strengthDisplay = document.getElementById("strength")

passwordInput.addEventListener("input", checkStrength)

function checkStrength() {
  const password = passwordInput.value
  let strength = 0

  if (password.length >= 8) strength++
  if (password.match(/[a-z]+/)) strength++
  if (password.match(/[A-Z]+/)) strength++
  if (password.match(/[0-9]+/)) strength++
  if (password.match(/[$@#&!]+/)) strength++

  switch (strength) {
    case 0:
    case 1:
      strengthDisplay.textContent = "Weak"
      strengthDisplay.style.color = "red"
      break
    case 2:
    case 3:
      strengthDisplay.textContent = "Medium"
      strengthDisplay.style.color = "orange"
      break
    case 4:
    case 5:
      strengthDisplay.textContent = "Strong"
      strengthDisplay.style.color = "green"
      break
  }
}


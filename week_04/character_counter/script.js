const textInput = document.getElementById("text-input")
const counter = document.getElementById("counter")

textInput.addEventListener("input", updateCounter)

function updateCounter() {
  const text = textInput.value
  const characterCount = text.length
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length

  counter.textContent = `Characters: ${characterCount} | Words: ${wordCount}`
}


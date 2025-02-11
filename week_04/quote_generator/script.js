const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  ]
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    document.getElementById("quote").textContent = quotes[randomIndex]
  }
  
  generateQuote()
  
  
const API_KEY = "3f319749270b87ed1187b6c0e05d7f8e" // Replace with your actual API key

document.getElementById("weather-form").addEventListener("submit", (e) => {
  e.preventDefault()

  const city = document.getElementById("city").value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const weatherResult = document.getElementById("weather-result")
      weatherResult.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Description: ${data.weather[0].description}</p>
            `
    })
    .catch((error) => {
      console.error("Error:", error)
      const weatherResult = document.getElementById("weather-result")
      weatherResult.innerHTML = "<p>Unable to fetch weather data. Please try again.</p>"
    })
})


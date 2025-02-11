function convertTemperature() {
    const celsius = document.getElementById("celsius").value
    const fahrenheit = document.getElementById("fahrenheit").value
  
    if (celsius !== "") {
      document.getElementById("fahrenheit").value = ((celsius * 9) / 5 + 32).toFixed(2)
    } else if (fahrenheit !== "") {
      document.getElementById("celsius").value = (((fahrenheit - 32) * 5) / 9).toFixed(2)
    }
  }
  
  function convertWeight() {
    const kilograms = document.getElementById("kilograms").value
    const pounds = document.getElementById("pounds").value
  
    if (kilograms !== "") {
      document.getElementById("pounds").value = (kilograms * 2.20462).toFixed(2)
    } else if (pounds !== "") {
      document.getElementById("kilograms").value = (pounds / 2.20462).toFixed(2)
    }
  }
  
  
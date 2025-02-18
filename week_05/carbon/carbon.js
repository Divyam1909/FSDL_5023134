document.getElementById("carbon-form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    const electricity = Number.parseFloat(document.getElementById("electricity").value)
    const gas = Number.parseFloat(document.getElementById("gas").value)
    const car = Number.parseFloat(document.getElementById("car").value)
    const flights = Number.parseFloat(document.getElementById("flights").value)
  
    // Simple carbon footprint calculation (not accurate, for demonstration purposes only)
    const carbonFootprint = electricity * 0.5 + gas * 2 + car * 0.2 + flights * 1000
  
    const carbonResult = document.getElementById("carbon-result")
    carbonResult.innerHTML = `
          <h3>Your Estimated Carbon Footprint</h3>
          <p>${carbonFootprint.toFixed(2)} kg CO2e per year</p>
          <p>This is a simplified calculation for demonstration purposes. For a more accurate assessment, please consult a professional carbon footprint calculator.</p>
      `
  })
  
  
document.getElementById("order-form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    const item = document.getElementById("item").value
    const quantity = document.getElementById("quantity").value
    const address = document.getElementById("address").value
  
    const orderStatus = document.getElementById("order-status")
    orderStatus.innerHTML = `
          <h3>Order Placed Successfully!</h3>
          <p>Item: ${item}</p>
          <p>Quantity: ${quantity}</p>
          <p>Delivery Address: ${address}</p>
          <p>Estimated Delivery: Within 30 minutes</p>
      `
  
    document.getElementById("order-form").reset()
  })
  
  
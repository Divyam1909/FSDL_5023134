let cart = []
let total = 0

function addToCart(product, price) {
  cart.push({ product, price })
  total += price
  updateCart()
}

function updateCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  cartItems.innerHTML = ""
  cart.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = `${item.product} - ₹${item.price}`
    cartItems.appendChild(li)
  })

  cartTotal.textContent = total
}

function checkout() {
  alert(`Thank you for your purchase! Total: ₹${total}`)
  cart = []
  total = 0
  updateCart()
}


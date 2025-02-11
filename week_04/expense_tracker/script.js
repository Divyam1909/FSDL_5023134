const form = document.getElementById("expense-form")
const expenseList = document.getElementById("expense-list")
const totalDisplay = document.getElementById("total")
const expenses = []

form.addEventListener("submit", addExpense)

function addExpense(e) {
  e.preventDefault()
  const description = document.getElementById("description").value
  const amount = Number.parseFloat(document.getElementById("amount").value)

  expenses.push({ description, amount })
  updateExpenseList()
  updateTotal()
  form.reset()
}

function updateExpenseList() {
  expenseList.innerHTML = ""
  expenses.forEach((expense, index) => {
    const item = document.createElement("div")
    item.classList.add("expense-item")
    item.innerHTML = `
            <span>${expense.description}</span>
            <span>₹${expense.amount.toFixed(2)}</span>  <!-- Changed $ to ₹ -->
            <button onclick="removeExpense(${index})">Remove</button>
        `
    expenseList.appendChild(item)
  })
}

function updateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`
}

function removeExpense(index) {
  expenses.splice(index, 1)
  updateExpenseList()
  updateTotal()
}

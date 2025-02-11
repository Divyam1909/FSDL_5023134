document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("poll-form");
  const resultsList = document.getElementById("results-list");
  const resetVotesButton = document.getElementById("reset-votes");

  // Object to store votes (in-memory demo)
  const votes = {
    Samsung: 0,
    iPhone: 0,
    Nothing: 0,
    OnePlus: 0,
    Xiaomi: 0,
    Oppo: 0,
  };

  // Retrieve the user ID from localStorage
  const userId = localStorage.getItem("userId");

  // Check if the user has already voted
  if (userId) {
    alert("You have already voted.");
    form.querySelectorAll('input[type="radio"]').forEach(input => {
      input.disabled = true;
    });
    form.querySelector('button[type="submit"]').disabled = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve the selected company
    const selectedCompany = document.querySelector('input[name="company"]:checked');
    if (selectedCompany) {
      // Increment vote count
      votes[selectedCompany.value]++;
      // Store the user ID in localStorage
      localStorage.setItem("userId", "voted");
      // Disable voting options
      form.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
      });
      form.querySelector('button[type="submit"]').disabled = true;
      // Update results
      updateResults();
    } else {
      alert("Please select a phone company.");
    }
  });

  resetVotesButton.addEventListener("click", () => {
    // Clear all votes
    for (let company in votes) {
      votes[company] = 0;
    }
    // Clear user ID from localStorage
    localStorage.removeItem("userId");
    // Enable voting options
    form.querySelectorAll('input[type="radio"]').forEach(input => {
      input.disabled = false;
    });
    form.querySelector('button[type="submit"]').disabled = false;
    // Update results
    updateResults();
  });

  function updateResults() {
    // Clear previous results
    resultsList.innerHTML = "";
    // Display updated results
    for (let company in votes) {
      const listItem = document.createElement("li");
      listItem.textContent = `${company}: ${votes[company]} vote(s)`;
      resultsList.appendChild(listItem);
    }
  }
});

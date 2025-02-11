document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("poll-form");
  const results = document.getElementById("results");

  // Object to store votes (in-memory demo)
  const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C#": 0,
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Retrieve the user ID
    const userId = document.getElementById("user-id").value.trim();
    if (!userId) {
      alert("Please enter your ID.");
      return;
    }
    
    // Check localStorage for already voted IDs
    let votedIDs = JSON.parse(localStorage.getItem("votedIDs")) || [];
    if (votedIDs.includes(userId)) {
      alert("This ID has already voted.");
      return;
    }
    
    // Get the selected language
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    if (selectedLanguage) {
      // Increment vote count and record the ID as having voted
      votes[selectedLanguage.value]++;
      votedIDs.push(userId);
      localStorage.setItem("votedIDs", JSON.stringify(votedIDs));
      updateResults();
    } else {
      alert("Please select a programming language.");
    }
  });

  function updateResults() {
    let resultsHTML = "<h2>Results:</h2>";
    for (const [language, count] of Object.entries(votes)) {
      resultsHTML += `<p>${language}: ${count} vote(s)</p>`;
    }
    results.innerHTML = resultsHTML;
  }
});

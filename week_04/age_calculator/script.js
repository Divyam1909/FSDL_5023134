function calculateAge() {
  // Get the birthdate value from the input and create a Date object
  const birthdate = new Date(document.getElementById("birthdate").value);
  const now = new Date();

  // Calculate the difference in full years
  let years = now.getFullYear() - birthdate.getFullYear();
  // Calculate the difference in months
  let months = now.getMonth() - birthdate.getMonth();

  // If the current day is less than the birthdate's day, reduce the month difference
  if (now.getDate() < birthdate.getDate()) {
    months--;
  }
  // Adjust if the month difference is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate total difference in milliseconds
  const diffMs = now - birthdate;
  // Convert milliseconds to total seconds and total minutes
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));

  // Display the results
  document.getElementById("result").textContent =
    `Your age is ${years} year(s) and ${months} month(s). ` +
    `That is approximately ${totalMinutes.toLocaleString()} minute(s) or ${totalSeconds.toLocaleString()} second(s).`;
}

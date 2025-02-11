document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("age-form");
    const ageResults = document.getElementById("age-results");
    const ageDisplay = document.getElementById("age");
    const timeSinceBirthDisplay = document.getElementById("time-since-birth");
    const totalTimeLivedDisplay = document.getElementById("total-time-lived");
    const birthdateInput = document.getElementById("birthdate");

    let interval; // Interval variable to store the real-time counter

    // Function to calculate age and time lived
    function calculateAge() {
        const birthdateInputValue = birthdateInput.value.trim();
        if (!birthdateInputValue) {
            alert("Please enter your birthdate.");
            return;
        }

        const birthdate = new Date(birthdateInputValue);
        const now = new Date();

        // Calculate age in years, months, days
        const ageInMilliseconds = now - birthdate;
        const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
        const ageInMinutes = Math.floor(ageInSeconds / 60);
        const ageInHours = Math.floor(ageInMinutes / 60);
        const ageInDays = Math.floor(ageInHours / 24);
        const ageInMonths = Math.floor(ageInDays / 30.4369); // Average days in a month
        const ageInYears = Math.floor(ageInMonths / 12);

        const remainingDays = ageInDays - ageInYears * 365.25;
        const remainingMonths = Math.floor(remainingDays / 30.4369);
        const remainingDaysInMonth = Math.floor(remainingDays - remainingMonths * 30.4369);

        ageDisplay.textContent = `You are ${ageInYears} years, ${remainingMonths} months, and ${remainingDaysInMonth} days old.`;
        totalTimeLivedDisplay.textContent = `Total time lived: ${ageInDays.toLocaleString()} days, ${ageInMonths.toLocaleString()} months, ${ageInYears.toLocaleString()} years.`;

        // Start real-time counter
        startRealTimeCounter(birthdate);
    }

    // Function to start the real-time seconds counter
    function startRealTimeCounter(birthdate) {
        if (interval) {
            clearInterval(interval); // Clear any previous intervals
        }

        // Update the seconds every 1000ms (1 second)
        interval = setInterval(() => {
            const now = new Date();
            const timeElapsed = now - birthdate; // Time elapsed since birth in milliseconds
            const seconds = Math.floor(timeElapsed / 1000); // Convert to seconds
            timeSinceBirthDisplay.textContent = `Time since birth: ${seconds.toLocaleString()} seconds.`;
        }, 1000); // Update every second
    }

    // Event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        calculateAge();
    });
});

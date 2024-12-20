var typed = new Typed(".text", {
    strings: ["Backend Developer", "Java Developer", "Java Spring API Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", () => {
    const radialBars = document.querySelectorAll(".radial-bar");

    radialBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-percentage");
        const circle = bar.querySelector(".progress");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set the circle's stroke-dasharray
        circle.style.strokeDasharray = `${circumference}`;

        // Calculate stroke-dashoffset based on the percentage
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        // Update the percentage text
        const percentageText = bar.querySelector(".percentage");
        percentageText.textContent = `${percentage}%`;
    });
});

/*
function showConfirmation(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Show a confirmation message
    alert("Thank you for submitting a recommendation!");

    // Optionally clear the form
    document.querySelector(".recommendation-form").reset();
}
    */

function showConfirmation(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; // Email is captured but not displayed
    const message = document.getElementById("message").value;

    // Validate form fields
    if (!name || !message) {
        alert("Please fill out all required fields.");
        return;
    }

    // Create a new recommendation card
    const newCard = document.createElement("div");
    newCard.classList.add("recommendation-card");

    newCard.innerHTML = `
        <p>${message}</p>
        <h4>- ${name}</h4>
        <span>New Recommendation</span>
    `;

    // Append the new recommendation card to the recommendation content
    const recommendationContent = document.getElementById("recommendation-content");
    if (recommendationContent) {
        recommendationContent.appendChild(newCard);
    }

    // Show confirmation message
    alert("Thank you for submitting a recommendation!");

    // Optionally clear the form
    document.querySelector(".recommendation-form").reset();
}

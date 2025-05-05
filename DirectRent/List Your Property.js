// JavaScript functionality (if needed for form validation or other dynamic elements)
// Currently no interactive features are required, but this can be extended later.

document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding validation or submission functionality
    const form = document.querySelector(".list-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Listing submitted successfully!");
      // You can add further logic to handle form submission here (e.g., AJAX)
    });
  });
  
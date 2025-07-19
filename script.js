document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Optional: validate fields here

  document.getElementById("thanksMessage").innerText = "✅ Thanks for filling the form!";
  
  // Optional: Clear form
  document.getElementById("contactForm").reset();
});

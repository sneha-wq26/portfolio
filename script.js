// Toggle Theme
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Form Submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("responseMessage").textContent =
      "Thanks for reaching out! I'll get back to you soon.";
    this.reset();
  });
  
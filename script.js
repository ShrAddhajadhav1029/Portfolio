console.log("✅ JavaScript file connected successfully!");

document.addEventListener("DOMContentLoaded", () => {
  // Dropdown functionality
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.classList.toggle("show");

      // Optional: Close other dropdowns
      dropdownButtons.forEach((btn) => {
        const otherContent = btn.nextElementSibling;
        if (otherContent !== content) {
          otherContent.classList.remove("show");
        }
      });
    });
  });

  // Scroll animation functionality for About section
  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-section");
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      aboutSection.classList.add("visible");
    }
  });
});

  

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navToggle.textContent = '☰'; // Cross icon
        } else {
            navToggle.textContent = '✖'; // Hamburger icon
        }
        navLinks.classList.toggle('active');
    });
});



// Select modal
const modal = document.getElementById("courseModal");
const closeBtn = document.querySelector(".close-btn");

// Open modal on Learn More click
document.querySelectorAll(".learn-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent page scroll
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


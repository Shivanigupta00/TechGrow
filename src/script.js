console.log("✅ script.js loaded");

// ===============================
// Auto Slide Function
// ===============================
function autoSlide(btnId, delay = 5000) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  setInterval(() => btn.click(), delay);
}

// Run auto slides
autoSlide("nextbtn");        // Carousel
autoSlide("client-next");    // Client section

// ===============================
// Navbar Scroll Active Link Effect (only on index page)
// ===============================
if (window.location.pathname.includes("index")) {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "home";
    const scrollY = window.pageYOffset;
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight - 50 : 50;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.id;
      }
    });

    // If at bottom of page, highlight contact
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
      current = "contact";
    }

    navLinks.forEach((link) => {
      link.classList.toggle("visited", link.getAttribute("href") === `#${current}`);
    });
  });
}

// ===============================
// Contact Form Validation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const error = document.getElementById("error");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const subject = document.getElementById("subject")?.value.trim();
      const message = document.getElementById("message")?.value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !email || !subject || !message) {
        error.textContent = "⚠ All fields are required.";
        return;
      }
      if (!emailPattern.test(email)) {
        error.textContent = "⚠ Please enter a valid email address.";
        return;
      }

      error.textContent = "";
      alert("✅ Form submitted successfully!");
      form.reset();
    });
  }
});

// ===============================
// Back-to-Top Button
// ===============================
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  backToTopBtn.style.display =
    window.scrollY > 100 ? "block" : "none";
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

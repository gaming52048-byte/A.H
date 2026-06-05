// ===== A.H. ROHAN PORTFOLIO JS =====

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu after clicking any nav link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll with navbar offset
navItems.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 68;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  }
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll(
  ".about-grid, .edu-card, .project-card, .skill-category, .social-card, .everest-contact-cta"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// Skill bar animation when skills section appears
const skillSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".pill-fill");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillBars.forEach((bar) => {
          bar.style.animation = "growBar 1.4s ease forwards";
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

if (skillSection) {
  skillObserver.observe(skillSection);
}

// Footer year auto update
const footerText = document.querySelector(".footer-bottom p");
if (footerText) {
  footerText.innerHTML = `© ${new Date().getFullYear()} Arafat Hasan Rohan (A.H. Rohan). All rights reserved.`;
}
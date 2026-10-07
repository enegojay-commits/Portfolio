

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Close the menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");


// ========================================
// SCROLL HANDLER
// ========================================

const handleScroll = () => {

    // -------------------------------
    // Scroll Reveal
    // -------------------------------

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });


    // -------------------------------
    // Active Navigation
    // -------------------------------

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    // Home is active when we're near the top
    if (window.scrollY < 200) {
        currentSection = "home";
    }

    navLinksAll.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
};


// Listen for scrolling
window.addEventListener("scroll", handleScroll);


// Run once when the page loads
handleScroll();
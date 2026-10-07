

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});



const revealElements = document.querySelectorAll(".reveal");



const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");



const handleScroll = () => {


    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });



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
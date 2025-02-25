document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("show");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
});
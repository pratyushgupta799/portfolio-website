function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function updateBorderRadius() {
    const element = document.querySelector('.mobile-gif');
    if (element) {
        const rect = element.getBoundingClientRect();
        const height = rect.height;
        const borderRad = height * 0.15;
        element.style.borderRadius = `${borderRad}px`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateBorderRadius(); // Initial run
    window.addEventListener('resize', updateBorderRadius); // Re-run on resize
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    el = document.querySelector('.bg-elements');
    el.style.transform = `translateY(${scrollY * 0.1}px)`;
  });
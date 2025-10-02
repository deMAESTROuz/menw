const hamburger = document.querySelector(".hamburger_menu");
const mobileMenu = document.querySelector(".mobile_menu");
const closeBtn = document.querySelector(".close_menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

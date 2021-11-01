const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  direction: "horizontal",
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const links = document.querySelectorAll(".nav__link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById(link.dataset.id)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
});

const burgerIcon = document.querySelector(".header__burger");
const burgerClose = document.querySelector(".burger__close");
const burgerMenu = document.querySelector(".burger");
burgerIcon.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("burger--active");
});
burgerClose.addEventListener("click", (e) => {
  burgerMenu.classList.remove("burger--active");
});

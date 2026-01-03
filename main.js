import { slides } from "./data.js";

// Navbar
const navList = document.querySelector(".nav__list");
const openBtn = document.querySelector(".nav__btn");
const closeBtn = document.querySelector(".nav__close");

openBtn.addEventListener("click", () => {
  navList.classList.add("nav__list--active");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("nav__list--active");
});

// Carousel
let index = 0;

function updateSlide() {
  const slide = slides[index];

  const content = document.querySelector(".carousel__content");
  const img = document.querySelector(".carousel__img");

  img.classList.remove("animate");
  content.classList.remove("animate");
  void content.offsetWidth;
  img.classList.add("animate");
  content.classList.add("animate");

  document.querySelector(".carousel__title").textContent = slide.title;
  document.querySelector(".carousel__about").textContent = slide.text;
  document.querySelector(".carousel__cta-text").textContent = slide.cta;

  document.querySelector(".carousel__img").src = slide.mobileImg;
  document.querySelector("source").srcset = slide.desktopImg;
}

document.getElementById("btn-right").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.getElementById("btn-left").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

updateSlide();

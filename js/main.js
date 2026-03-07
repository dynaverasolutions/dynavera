/* --------------------
   HERO SLIDER
-------------------- */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

/* --------------------
   SCROLL REVEAL
-------------------- */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* --------------------
   CARD GLOW EFFECT
-------------------- */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 30px rgba(99,102,241,0.4)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
  });
});

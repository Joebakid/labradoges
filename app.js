gsap.fromTo(
  ".nav-list",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 1 },
  ">"
);

gsap.fromTo(
  ".grid-item",
  { opacity: 0, skewY: 2, xPercent: 10, scale: 0.7 },
  { opacity: 1, duration: 1, skewY: 0, stagger: 0.03, xPercent: 0, scale: 1 },
  ">"
);

gsap.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 0.5 }, ">");

gsap.fromTo(
  ".title-h1",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 1 },
  ">"
);

gsap.fromTo(
  ".text-hero",
  { yPercent: 50, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 1 },
  ">"
);

const hamburgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".mobile-nav");

hamburgerMenu.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(menu);
  if (computedStyle.getPropertyValue("display") === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

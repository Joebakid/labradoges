gsap.fromTo(
  ".nav-list",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 1 },
  ">"
);

gsap.fromTo(
  ".container-submit",
  { opacity: 0, yPercent: 50 },
  { opacity: 1, duration: 1 },
  ">"
);

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

gsap.fromTo(
  ".grid-item",
  { opacity: 0, skewY: 2, xPercent: 10, scale: 0.7 },
  { opacity: 1, duration: 1, skewY: 0, stagger: 0.03, xPercent: 0, scale: 1 },
  ">"
);

gsap.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 0.5 }, ">");

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_yb4jvkc";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
      this.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

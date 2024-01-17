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

// FORM
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_9f6ztax";

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

// preloader
document.addEventListener("DOMContentLoaded", function () {
  // Your initialization code here

  // Simulate content loading (remove this line in your actual implementation)
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 2000); // Adjust the timeout value as needed
});

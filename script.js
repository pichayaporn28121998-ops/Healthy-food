const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "ขอบคุณสำหรับข้อความ 💚\nทีม GREENBITE จะติดต่อกลับโดยเร็วที่สุด"
    );

    contactForm.reset();
  });
}

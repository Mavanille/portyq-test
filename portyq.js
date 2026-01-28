document.addEventListener("DOMContentLoaded", () => {

  // ===== MENU BURGER =====
  const mainNav = document.getElementById("mainNav");
  const icons = document.getElementById("icons");
  const links = document.querySelectorAll("nav li");

  if (icons && mainNav) {
    icons.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
      });
    });
  }

  // ===== MESSAGE CONTACT =====
  const params = new URLSearchParams(window.location.search);
  if (params.get("success") === "1") {
    alert("Message envoyé avec succès !");
  }

  // ===== ÉTOILES =====
  const starsContainer = document.getElementById("starsContainer");

  if (starsContainer) {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      starsContainer.appendChild(star);
    }
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ===== NAV ACTIVE =====
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll("nav a").forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

});

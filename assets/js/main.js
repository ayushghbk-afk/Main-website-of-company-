/* Shared mobile navigation and gentle reveal animations. */
(() => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    const isOpen = () => nav.classList.contains("open");
    const closeNav = (restoreFocus = false) => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "Menu +";
      if (restoreFocus) menu.focus();
    };

    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "Close −" : "Menu +";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        closeNav(true);
      }
    });

    document.addEventListener("click", (event) => {
      if (!isOpen()) return;
      if (nav.contains(event.target) || menu.contains(event.target)) return;
      closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700 && isOpen()) closeNav();
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  }
})();

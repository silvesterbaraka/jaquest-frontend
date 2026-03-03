/* =====================================================
   JAQUEST – MASTER PRODUCTION SCRIPT
   Centralized • Safe • Multi-page Ready
===================================================== */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SMOOTH SCROLL
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        const id = anchor.getAttribute("href");
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* ===============================
       FOOTER YEAR
    =============================== */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ===============================
       MOBILE MENU
    =============================== */
    const menuBtn = document.getElementById("menu-button");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden", "-translate-x-full");
        menuBtn.setAttribute("aria-expanded", "true");
      });
    }

    if (closeBtn && mobileMenu) {
      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-x-full");
        menuBtn.setAttribute("aria-expanded", "false");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
      });
    }

    /* ===============================
       ICON LIBRARIES
    =============================== */
    if (window.feather) feather.replace();
    if (window.lucide) lucide.createIcons();

    /* ===============================
       AOS
    =============================== */
    if (window.AOS) {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 120
      });

      window.addEventListener("load", () => {
        setTimeout(() => AOS.refreshHard(), 300);
      });
    }

    /* ===============================
       PARALLAX (SAFE)
    =============================== */
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        document.querySelectorAll(".parallax").forEach(el => {
          el.style.transform = `translateY(${y * -0.2}px)`;
        });

        const globe = document.querySelector(".globe-illustration");
        if (globe) {
          globe.style.transform =
            `translateY(${y * -0.15}px) scale(${Math.min(1.15, 1 + y * 0.0004)})`;
        }

        ticking = false;
      });
    }, { passive: true });

    /* ===============================
       HERO VIDEO SMART PLAY
    =============================== */
    const heroVideo = document.querySelector(".video-parallax video");
    if (heroVideo && "IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        entry.isIntersecting
          ? heroVideo.play().catch(() => {})
          : heroVideo.pause();
      }, { threshold: 0.35 }).observe(heroVideo);
    }

    /* ===============================
       SWIPER – TESTIMONIALS
    =============================== */
    if (window.Swiper && document.querySelector(".testimonialSwiper")) {
      new Swiper(".testimonialSwiper", {
        loop: true,
        speed: 900,
        spaceBetween: 24,
        grabCursor: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    }

    /* ===============================
       COUNT-UP
    =============================== */
    const counter = document.getElementById("animated-count");
    if (counter && "IntersectionObserver" in window) {
      let started = false;
      const end = Number(counter.dataset.count) || 755;

      new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting || started) return;
        started = true;

        let val = 0;
        const step = Math.max(1800 / end, 10);

        const timer = setInterval(() => {
          counter.textContent = ++val + "+";
          if (val >= end) clearInterval(timer);
        }, step);
      }, { threshold: 0.6 }).observe(counter);
    }

    /* ===============================
       BOTTOM NAV VISIBILITY
    =============================== */
    const bottomNav = document.querySelector(
      "nav[aria-label='Bottom navigation']"
    );
    if (bottomNav) {
      const update = () =>
        bottomNav.style.display =
          window.innerWidth < 1280 ? "block" : "none";

      update();
      window.addEventListener("resize", update);
    }
  });

  /* ===============================
     GLOBAL FUNCTIONS (SAFE)
  =============================== */

  window.toggleChat = function () {
    const chat = document.getElementById("chatContainer");
    if (!chat) return;

    const isHidden = chat.classList.contains("translate-x-[120%]");
    chat.classList.toggle("translate-x-[120%]", !isHidden);
    chat.classList.toggle("opacity-0", !isHidden);
    chat.classList.toggle("pointer-events-none", !isHidden);
  };

  window.startJourney = function () {
    const loader = document.getElementById("loadingScreen");
    if (!loader) return;
    loader.classList.remove("hidden");
    setTimeout(() => (location.href = "form.html"), 1200);
  };

  window.openVideoModal = function () {
    window.open("https://youtu.be/Oj-DQkARTgM", "_blank");
  };
})();
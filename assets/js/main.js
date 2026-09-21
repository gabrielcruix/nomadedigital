(function () {
  "use strict";

  /* Header: shrink + solidify on scroll */
  var header = document.querySelector(".site-header");
  var stickyCta = document.querySelector(".sticky-cta");
  var hero = document.querySelector(".hero");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 24);
    if (stickyCta && hero) {
      var heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      stickyCta.classList.toggle("is-visible", y > heroBottom - 80);
    }
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Accordion (FAQ + Objeções) */
  var triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(function (trigger) {
    var item = trigger.closest(".accordion-item");
    var panel = item.querySelector(".accordion-panel");
    var inner = panel.querySelector(".accordion-panel-inner");

    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      item.parentElement.querySelectorAll(".accordion-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        panel.style.maxHeight = null;
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        panel.style.maxHeight = inner.offsetHeight + 24 + "px";
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Smooth-scroll for in-page anchors, accounting for fixed header */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = 88;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* Mobile nav toggle (if present) */
  var navToggle = document.querySelector(".nav-toggle");
  var navPanel = document.querySelector(".nav-mobile");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var open = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();

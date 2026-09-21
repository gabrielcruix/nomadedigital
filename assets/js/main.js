(function () {
  "use strict";

  /* FAQ accordion — só uma pergunta aberta por vez */
  var faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-btn");
      if (!btn) return;
      var answer = btn.nextElementSibling;
      var icon = btn.querySelector(".faq-icon");
      var isOpen = btn.classList.contains("open");

      faqList.querySelectorAll(".faq-btn").forEach(function (b) {
        b.classList.remove("open");
        b.setAttribute("aria-expanded", "false");
        b.querySelector(".faq-icon").textContent = "+";
        b.nextElementSibling.classList.remove("open");
      });

      if (!isOpen) {
        btn.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        icon.textContent = "×";
        answer.classList.add("open");
      }
    });
  }

  /* Carrossel de módulos — dots sincronizados com o scroll */
  (function () {
    var car = document.getElementById("carousel");
    var dotsWrap = document.getElementById("dots");
    if (!car || !dotsWrap) return;

    var slides = car.querySelectorAll(".mod-slide");
    slides.forEach(function (_, i) {
      var dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", "Ir para o módulo " + (i + 1));
      dot.onclick = function () {
        car.scrollTo({ left: (slides[0].offsetWidth + 12) * i, behavior: "smooth" });
      };
      dotsWrap.appendChild(dot);
    });

    car.addEventListener("scroll", function () {
      var active = Math.round(car.scrollLeft / (slides[0].offsetWidth + 12));
      dotsWrap.querySelectorAll("span").forEach(function (d, i) {
        d.classList.toggle("active", i === active);
      });
    });
  })();
})();

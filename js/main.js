/* ==========================================================
   Highlights the navigation link for whichever section is
   currently on screen, so the nav reflects the reading position.
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-links a");
  var sections = [];

  links.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) {
      sections.push({ link: link, section: section });
    }
  });

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        sections.forEach(function (pair) {
          pair.link.classList.toggle("is-active", pair.section === entry.target);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach(function (pair) {
    observer.observe(pair.section);
  });
});

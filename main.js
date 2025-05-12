document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      console.log(`Navigasi ke: ${link.href}`);
    });
  });

  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}); 

document.addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  if (audio && audio.paused) {
    audio.play();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "a")) {
    e.preventDefault();
  }
});

const btn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


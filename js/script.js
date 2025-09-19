// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animate Skills Progress when visible
const skillBars = document.querySelectorAll(".progress span");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

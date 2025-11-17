document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
});

// All card select
const cards = document.querySelectorAll(".card_s");

cards.forEach((card) => {

  const audio = card.querySelector(".audio");
  const playBtn = card.querySelector(".playBtn");
  const waveBeat = card.querySelector(".waveBeat");

  // Wave bar generate
  const totalBars = 40;
  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    waveBeat.appendChild(bar);
  }
  const bars = card.querySelectorAll(".bar");

  // Random height
  bars.forEach((bar) => {
    const h = Math.floor(Math.random() * 25) + 5;
    bar.style.height = h + "px";
  });

  // Play/Pause Logic
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      bars.forEach((bar) => (bar.style.animationPlayState = "running"));
    } else {
      audio.pause();
      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      bars.forEach((bar) => (bar.style.animationPlayState = "paused"));
    }
  });
});

/* =============================== */
/* NAV TOGGLE JS       */
/* =============================== */

const mobileToggle = document.getElementById("mobileToggle");
const navMenuWrapper = document.getElementById("navMenuWrapper");

mobileToggle.addEventListener("click", function () {
  navMenuWrapper.classList.toggle("active");

  // Toggle between hamburger and close icons
  const icon = mobileToggle.querySelector("i");
  if (navMenuWrapper.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

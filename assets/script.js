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

// সব card নির্ধারণ
const cards = document.querySelectorAll(".card_s");

cards.forEach((card) => {
  
  // এই specific card এর elements
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


// // ==========================weve beat bar create=====================
// const waveBeat = document.querySelector(".waveBeat");
// const totalBars = 40;

// for (let i = 0; i < totalBars; i++) {
//   const bar = document.createElement("div");
//   bar.classList.add("bar");
//   waveBeat.appendChild(bar);
// }

// //====================Audio paly function==================
// const audio = document.querySelector(".audio");
// const playBtn = document.querySelector(".playBtn");
// const bars = document.querySelectorAll(".bar");

// // Play / Pause Toggle
// playBtn.addEventListener("click", () => {
//   if (audio.paused) {
//     console.log("thik ache");

//     audio.play();
//     playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//     bars.forEach((bar) => (bar.style.animationPlayState = "running"));
//   } else {
//     audio.pause();
//     playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//     bars.forEach((bar) => (bar.style.animationPlayState = "paused"));
//   }
// });

// // Random height for bars
// bars.forEach((bar) => {
//   const h = Math.floor(Math.random() * 25) + 5;
//   bar.style.height = h + "px";
// });

  

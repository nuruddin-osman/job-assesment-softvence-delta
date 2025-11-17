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



const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const bars = document.querySelectorAll(".bar");

// Play / Pause Toggle
playBtn.addEventListener("click", () => {
    if (audio.paused) {
      console.log("thik ache");
      
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        bars.forEach(bar => bar.style.animationPlayState = "running");
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        bars.forEach(bar => bar.style.animationPlayState = "paused");
    }
});

// Random height for bars
bars.forEach(bar => {
    const h = Math.floor(Math.random() * 25) + 5;
    bar.style.height = h + "px";
});

// փայլերի ավտոմատ գեներացում
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = (Math.random() * 2 + 2) + "s";
  document.querySelector(".sparkles").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}

setInterval(createSparkle, 150);

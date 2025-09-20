
// Գաղտնաբառը (պահված է կոդի մեջ)
const SECRET = "gitem";
// Նկարների զանգված ========================
const imagesList = ["IMG_2975.JPG","photo_.jpg","IMG_1980.JPG","IMG_0244.JPG","Фото086.jpg"];
// =========================================

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === SECRET) {
    
    document.querySelector(".hidden-content").style.display = null;
    document.querySelector(".password-box").style.display = "none";
  } else {
    // Սխալ դեպքում դաշտը կարմրում է և թափահարվում
    const box = document.getElementById("password");
    box.style.border = "2px solid red";
    box.classList.add("shake");
    setTimeout(() => {
      box.classList.remove("shake");
      box.style.border = "";
    }, 600);
    alert("Սխալ գաղտնաբառ 🚫");
  }
}

// ======================
// ✨ Փայլեր (Sparkles)
// ======================
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = Math.random() * 2 + 2 + "s";
  document.querySelector(".sparkles").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}
setInterval(createSparkle, 150);

// ======================
// 🎈 Փուչիկներ (Balloons)
// ======================
const balloonsContainer = document.querySelector(".balloons-container");
function createBalloon() {
  const balloon = document.createElement("div");

  balloon.classList.add("balloon");

  const string = document.createElement("div");
  string.classList.add("string");

  balloon.appendChild(string);

  const randomX = Math.random() * window.innerWidth;
  const randomDelay = Math.random() * 3;
  const randomImage = Math.floor(Math.random() * imagesList.length);

  balloon.style.left = `${randomX}px`;
  balloon.style.animationDelay = `${randomDelay}s`;
  balloon.style.backgroundImage = `url(${imagesList[randomImage]})`;

  balloonsContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 6000);
}
setInterval(createBalloon, 500);

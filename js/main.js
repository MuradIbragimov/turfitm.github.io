let impressionsImg = document.querySelectorAll(".impressions_img img");
let popUp = document.querySelector(".pop-up");
let popUpImg = document.querySelector(".pop-up img");
let closeImgBtn = document.querySelector(".pop-up span");
let playVideoBtn = document.querySelector(".play");
let popUpVideo = document.querySelector(".popup-video");
let closeVideoBtn = document.querySelector(".popup-video span");

document.addEventListener("DOMContentLoaded", () => {
  impressionsImg.forEach((img) => {
    img.addEventListener("click", () => {
      popUp.style.display = "block";
      popUpImg.src = img.getAttribute("src");
    });
  });

  closeImgBtn.addEventListener("click", () => {
    popUp.style.display = "none";
  });
  closeVideoBtn.addEventListener("click", () => {
    popUpVideo.style.display = "none";
  });

  playVideoBtn.addEventListener("click", () => {
    popUpVideo.style.display = "block";
  });
});

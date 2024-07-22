let impressionsImg = document.querySelectorAll(".impressions_img img");
let popUp = document.querySelector(".pop-up");
let popUpImg = document.querySelector(".pop-up img");
let closeImgBtn = document.querySelector(".pop-up span");
let playVideoBtn = document.querySelector(".play");
let popUpVideo = document.querySelector(".popup-video");
let closeVideoBtn = document.querySelector(".popup-video span");
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

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header_nav-menu").classList.toggle("open");
});

document.querySelectorAll(".header_nav-menu a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".burger").classList.remove("active");
    document.querySelector(".header_nav-menu").classList.remove("open");

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

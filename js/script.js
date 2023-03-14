const dress = document.querySelector(".ofer__img_dress");

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    dress.src = "img/red_dress_768.png";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    dress.src = "img/red_dress.png";
  }
});

const item1 = document.querySelectorAll(".t1");
item1.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});

let baoquan = document.querySelector(".baoquan");
let chitiet = document.querySelector(".chitiet");
let btnV = document.querySelector(".card-fashion-content-right-bottom-top");
let active1 = document.querySelector(
  ".card-fashion-content-right-bottom-content-big-title-item"
);
if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(
      ".card-fashion-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".card-fashion-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".card-fashion-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".card-fashion-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}
if (btnV) {
  btnV.addEventListener("click", function () {
    document
      .querySelector(".card-fashion-content-right-bottom-content-big")
      .classList.toggle("activeV");
  });
}

const bigImg = document.querySelector(".card-fahion-content-left-big-img img");
const smallImg = document.querySelectorAll(
  ".card-fahion-content-left-small-img img"
);
smallImg.forEach(function (imgItem, x) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});

$(document).on(
  "click",
  ".card-fashion-content-right-bottom-content-big-title-item",
  function () {
    $(this).addClass("boder-bottom").siblings().removeClass("boder-bottom");
  }
);

let btn_search = document.querySelector(".search-box-btn");

btn_search.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});

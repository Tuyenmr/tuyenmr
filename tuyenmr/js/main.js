const countdown = () => {
  const counDate = new Date("October 30,2022 00:00:00");
  const now = new Date().getTime();
  const gap = counDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
  if (gap < 10000) {
    launchTheBullshit();
  }
};
setInterval(countdown, 1000);
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

// const btn_search = document.querySelector(".search-box-btn");

// btn_search.addEventListener("click", function () {
//   this.parentElement.classList.toggle("open");
//   this.previousElementSibling.focus();
// });

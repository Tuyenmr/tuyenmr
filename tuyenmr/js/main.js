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
function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  let displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

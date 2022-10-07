// coding with nick

// Js Documents

// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider

jQuery(document).ready(function ($) {
  "user strict";
  var mainSlider = $(".main_slider");
  var hamburger = $(".hamburger_container");
  var menu = $(".hamburger_menu");
  var menuActive = false;
  var hamburgerClose = $(".hamburger_close");
  var fsOverlay = $(".fs_menu_overlay");

  initMenu();
  initFavorite();
  initIsotopeFiltering();
  initSlider();

  function initMenu() {
    if (hamburger.length) {
      hamburger.on("click", function () {
        if (!menuActive) {
          openMenu();
        }
      });
    }
    if (fsOverlay.length) {
      fsOverlay.on("click", function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }
    if (hamburgerClose.length) {
      hamburgerClose.on("click", function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }
    if ($(".menu_item").length) {
      var items = document.getElementsByClassName("menu_item");
      var i;
      for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains("has-children")) {
          items[i].onclick = function () {
            this.classList.toggle("active");
            var panel = this.children[1];
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          };
        }
      }
    }
  }

  function openMenu() {
    menu.addClass("active");
    fsOverlay.css("pointer-events", "auto");
    menuActive = true;
  }
  function closeMenu() {
    menu.removeClass("active");
    fsOverlay.css("pointer-events", "none");
    menuActive = false;
  }

  function initFavorite() {
    if ($(".favorite").length) {
      var favs = $(".favorite");
      favs.each(function () {
        var fav = $(this);
        var active = false;
        if (fav.hasClass("active")) {
          active = true;
        }
        fav.on("click", function () {
          if (active) {
            fav.removeClass("active");
            active = false;
          } else {
            fav.addClass("active");
            active = true;
          }
        });
      });
    }
  }

  function initIsotopeFiltering() {
    if ($(".grid_sorting_button").length) {
      $(".grid_sorting_button").click(function () {
        $(".grid_sorting_button.active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".product-gird").isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  }

  function initSlider() {
    if ($(".product_slider").length) {
      var slider1 = $(".product_slider");
      slider1.owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          768: { items: 3 },
          991: { items: 4 },
          1280: { items: 5 },
          1440: { items: 6 },
        },
      });

      if ($(".product_slider_nav_left").length) {
        $(".product_slider_nav_left").on("click", function () {
          slider1.trigger("prev.owl.carousel");
        });
      }
      if ($(".product_slider_nav_right").length) {
        $(".product_slider_nav_right").on("click", function () {
          slider1.trigger("next.owl.carousel");
        });
      }
    }
  }
});

// (function ($) {
//   $(".banner_slider").owlCarousel({
//     loop: true,
//     margin: 0,
//     items: 1,
//     dots: true,
//     smartSpeed: 2000,
//     autoHeight: false,
//     autoplay: true,
//   });

//   /*------------------
//         CountDown
//     --------------------*/
//   // For demo preview start
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, "0");
//   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//   var yyyy = today.getFullYear();

//   if (mm == 12) {
//     mm = "01";
//     yyyy = yyyy + 1;
//   } else {
//     mm = parseInt(mm) + 1;
//     mm = String(mm).padStart(2, "0");
//   }
//   var timerdate = mm + "/" + dd + "/" + yyyy;
//   // For demo preview end

//   // Uncomment below and use your date //

//   /* var timerdate = "2020/12/30" */

//   jQuery("#countdown-time").countdown(timerdate, function (event) {
//     jQuery(this).html(
//       event.strftime(
//         "<div class='countdown_item'><span>%D</span> <p>Day</p> </div>" +
//           "<div class='countdown_item'><span>%H</span> <p>Hour</p> </div>" +
//           "<div class='countdown_item'><span>%M</span> <p>Min</p> </div>" +
//           "<div class='countdown_item'><span>%S</span> <p>Sec</p> </div>"
//       )
//     );
//   });
// })(jQuery);
$(document).ready(function () {
  $("#adaptive").lightSlider({
    auto: true,
    adaptiveHeight: true,
    item: 1,
    slideMargin: 0,
    loop: true,
    controls: true,
    prevHtml: "<",
    nextHtml: ">",
  });
});

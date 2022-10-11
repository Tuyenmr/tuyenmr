const item1 = document.querySelectorAll(".t1");
item1.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});

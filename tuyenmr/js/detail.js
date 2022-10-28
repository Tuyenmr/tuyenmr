const url = new URL(location.href);
const id = Number(url.searchParams.get("id"));

$(function () {
  const product = _.find(products, { id });

  $(".append-detail").html(
    `
    <div class="card-fahion-content d-flex">
    <div class="card-fahion-content-left d-flex">
        <div class="card-fahion-content-left-big-img">
            <img src="${product.img}" alt="" id="zoom">
        </div>
        <div class="card-fahion-content-left-small-img">
            <img src="${product.img}" alt="">
            <img src="${product.img2}" alt="">
            <img src="${product.img3}" alt="">
            <img src="${product.img4}" alt="">
        </div>
    </div>
    <div class="card-fahion-content-right">
        <div class="card-fashion-content-right-name">
            <h4>${product.name} </h4>
            <p>
                Product code: ${product.id}</p>
        </div>
        <div class="card-fashion-content-right-price">
            <p> ${product.price} $</p>
        </div>
        <div class="card-fashion-content-right-size">
            
            <div class="size">
            <span style="font-weight: 600; font-size: 20px;">Size : </span>
            <select class="select-size" name="" id="">
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXl">XXL</option>
           </select>
                <p style="color: red;">Please choose </p>
            </div>
            <div class="quantity">
                <p style="font-weight: bold;">Amount :</p>
                <input class="qty-detail" type="number" min="1" value="1">
            </div>
            <div class="card-fashion-content-right-button">
                <button class="add"><i class="fas fa-shopping-cart "></i>
                    <p>
                        ADD TO CARD</p>
                </button>
                <button>
                    <P>BUY NOW</P>
                </button>
            </div>
            <div class="card-fashion-content-right-icon">
                <div class="card-fashion-content-right-icon-item">
                    <i class="fas fa-phone-alt"></i>
                    <p>hotline</p>
                </div>
                <div class="card-fashion-content-right-icon-item">
                    <i class="far fa-comments"></i>
                    <p>chat</p>
                </div>
                <div class="card-fashion-content-right-icon-item">
                    <i class="far fa-envelope"></i>
                    <p>mail</p>
                </div>
            </div> 
        </div>
    </div>
</div>
      `
  );

  $("button.add").on("click", addToCart);
  clickImg();
});

const addToCart = () => {
  const product = _.find(products, { id });
  const cart = JSON.parse(localStorage.getItem("carts")) || [];
  const item = _.find(cart, { product: product.id });
  const size = $("select.select-size option:selected").val();
  const quantity = $(".quantity input.qty-detail").val();
  let total = product.price;
  if (item) {
    toastr["error"]("Sản phẩm đã có trong giỏ hàng!");
  } else if (product) {
    cart.push({
      product: product.id,
      size: size,
      quantity: Number(quantity),
      total: Number(total * quantity),
    });
    toastr["success"]("Sản phẩm đã được thêm vào giỏ hàng trong giỏ hàng");
  }
  localStorage.setItem("carts", JSON.stringify(cart));
  $(".checkout_items").text(cart.length);
};

// const bigImg = document.querySelector(".card-fahion-content-left-big-img img");
// const smallImg = document.querySelectorAll(
//   ".card-fahion-content-left-small-img img"
// );
// smallImg.forEach(function (imgItem, x) {
//   imgItem.addEventListener("click", function () {
//     bigImg.src = imgItem.src;
//   });
// });

const clickImg = () => {
  const img = $(".card-fahion-content-left-big-img img");
  $(".card-fahion-content-left-small-img")
    .find("img")
    .on("click", (i) => {
      img.attr("src", i.target.src);
    });
};

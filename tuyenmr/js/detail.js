$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const product = _.find(products, { id });
  console.log(product);
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
            <h2>${product.name} </h2>
            <p>
                Product code: ${product.id}</p>
        </div>
        <div class="card-fashion-content-right-price">
            <p> ${product.price} $</p>
        </div>
        <div class="card-fashion-content-right-size">
            <p style="font-weight: 600; font-size: 20px;">Size : </p>
            <div class="size">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
                <p style="color: red;">Please choose </p>
            </div>
            <div class="quantity">
                <p style="font-weight: bold;">Amount :</p>
                <input type="number" min="0" value="1">
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
});

$("");

const bigImg = document.querySelector(".card-fahion-content-left-big-img img");
const smallImg = document.querySelectorAll(
  ".card-fahion-content-left-small-img img"
);
smallImg.forEach(function (imgItem, x) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});

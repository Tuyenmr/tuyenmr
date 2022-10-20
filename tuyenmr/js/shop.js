const cart = JSON.parse(localStorage.getItem("carts")) || [];
// add to cart
const addToCart = (event) => {
  event.preventDefault();

  const cart = JSON.parse(localStorage.getItem("carts")) || [];

  const item = _.find(cart, { product: event.data.id });
  const pr = _.find(products, { id: event.data.id });

  const total = pr.price;

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantity: 1,
      total: total,
    });
  }
  localStorage.setItem("carts", JSON.stringify(cart));
  $(".checkout_items").text(cart.length);
};

// render product
$(function () {
  const productTemplate = $("#product").html();
  const product = _.template(productTemplate); // compile

  $(".product-gird").append(
    _.map(products, (pr) => {
      const dom = $(product(pr));
      dom.find(".add_to_card_button").on("click", pr, addToCart);
      return dom;
    })
  );
});

$(".checkout_items").text(cart.length);

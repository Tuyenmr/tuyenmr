let cart = JSON.parse(localStorage.getItem("carts")) || [];

const deleteItem = (event) => {
  if (confirm("Chắc chắn xóa không?")) {
    cart = _.filter(cart, (item) => item.product !== event.data.product.id);

    localStorage.setItem("carts", JSON.stringify(cart));

    event.target.closest(".add-item").remove();
    $(".checkout_items").text(cart.length);
  }
  total();
};

const increment = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  const pr = _.find(products, { id: event.data.product.id });

  product.quantity += 1;
  const item = $(event.target.closest(".add-item"));
  item.find(".quanlity").val(product.quantity);
  product.total = pr.price * product.quantity;
  localStorage.setItem("carts", JSON.stringify(cart));
  total();
};

const decrement = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  const pr = _.find(products, { id: event.data.product.id });
  if (product.quantity === 1) return;
  else product.quantity -= 1;

  const item = $(event.target.closest(".add-item"));
  item.find(".quanlity").val(product.quantity);
  product.total = (pr.price * product.quantity).toFixed();
  localStorage.setItem("carts", JSON.stringify(cart));
  total();
};

$(function () {
  const items = _.map(_.cloneDeep(cart), (item) => {
    item.product = _.find(products, { id: item.product });
    return item;
  });

  $(".content-feature").prepend(
    _.map(items, (i) => {
      const itemTemplate = $("#item").html();
      const item = _.template(itemTemplate);

      const dom = $(item(i));
      dom.find(".btn-del").on("click", i, deleteItem);
      dom.find(".plus").on("click", i, increment);
      dom.find(".minus").on("click", i, decrement);
      return dom;
    })
  );

  total();
});

$(() => {
  $(".number-pr").text(cart.length);
  $(".checkout_items").text(cart.length);
});

function total() {
  let cout = 0;
  for (let i = 0; i < cart.length; i++) {
    cout += Number(cart[i].total);
  }
  $(".total").text(cout);
}

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
      size: "L",
    });
  }
  localStorage.setItem("carts", JSON.stringify(cart));
  $(".checkout_items").text(cart.length);
  toastr["success"]("Sản phẩm đã được thêm vào giỏ hàng trong giỏ hàng");
};

// render product
$(function () {
  render(products);

  $(".list-check").append(
    _.uniq(products.map(({ cartegory2 }) => cartegory2)).map((c) => {
      const categoryTemplate = $("#check-category").html();
      const template = _.template(categoryTemplate);

      const dom = $(template({ cartegory2: c }));

      return dom;
    })
  );

  $("button.filter-price").on("click", filterPrice);

  $("form.list-check").on("change", filter);

  $(".cartegory-right-top-item select").on("change", sortPrice);
});

// number cart
$(".checkout_items").text(cart.length);

// render product
const render = (products) => {
  $productlist = $(".product-gird");
  const productTemplate = $("#product").html();
  const product = _.template(productTemplate); // compile

  $productlist.html("");
  $(".product-gird").append(
    _.map(products, (pr) => {
      const dom = $(product(pr));
      dom.find(".add_to_card_button").on("click", pr, addToCart);
      return dom;
    })
  );
};

const categories = [];

// filter
const filter = () => {
  // filter by category
  const categories = [];

  $(".list-check input:checked").each(function () {
    categories.push(this.value);
  });

  const filteredProducts = products.filter(
    (p) => categories.length === 0 || categories.includes(p.cartegory2)
  );

  render(filteredProducts);
};

const filterPrice = () => {
  let min = $(".min").text();
  let max = $(".max").text();
  const filterNumber = products.filter((pr) => {
    return pr.price >= Number(min) && pr.price <= Number(max);
  });
  render(filterNumber);
};

let productCopy = [];
for (let index = 0; index < products.length; index++) {
  productCopy[index] = products[index];
}

const sortPrice = () => {
  const value = $(".cartegory-right-top-item select option:selected").val();
  if (value === "min") {
    render(products.sort((a, b) => a.price - b.price));
  } else if (value === "max") {
    render(products.sort((a, b) => b.price - a.price));
  } else {
    products.length = [];
    for (let index = 0; index < productCopy.length; index++) {
      products[index] = productCopy[index];
    }
    render(products);
  }
};

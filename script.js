const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let productsList = [];
if (sessionStorage.getItem("cart")) {
  productsList = JSON.parse(sessionStorage.getItem("cart"));
}

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onClick="addToCart(this.dataset.id)">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  productsList.forEach((cartItem) => {
    const li = document.createElement("li");
    li.innerHTML = `${cartItem.name} - $${cartItem.price} <button class="remove-from-cart-btn" data-id="${cartItem.id}" onClick="removeFromCart(this.dataset.id)">Remove</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  productsList.push(products[productId - 1]);
  sessionStorage.setItem("cart", JSON.stringify(productsList));
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  console.log(productId);
  productsList = productsList.filter((item) => {
    return productId != item.id;
  });
  sessionStorage.setItem("cart", JSON.stringify(productsList));
  renderCart();
}

// Clear cart
function clearCart() {
  productsList.splice(0);
  sessionStorage.setItem("cart", productsList);
  renderCart();
}

// Initial render
renderProducts();
renderCart();


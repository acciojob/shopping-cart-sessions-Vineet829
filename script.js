// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];


function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear previous content

  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product));
    li.appendChild(addButton);
    productList.appendChild(li);
  });
}


function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; 

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty</li>";
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
    });
  }
}


function addToCart(product) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart)); 
  renderCart(); 
}


function clearCart() {
  sessionStorage.removeItem("cart");
  renderCart(); 
}


document.getElementById("clear-cart-btn").addEventListener("click", clearCart);


function init() {
  renderProducts();
  renderCart(); 
}


init();

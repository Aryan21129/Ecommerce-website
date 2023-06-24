// Add event listeners to the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Function to handle adding a product to the cart
function addToCart() {
  var productCard = this.closest('.product-card');
  var productName = productCard.querySelector('h3').textContent;
  var productPrice = productCard.querySelector('p').textContent;
  
  // Perform further logic to add the product to the cart
  // This is just a basic example
  
  alert(productName + ' added to cart!');
}

var orderButton = document.querySelector(".featured-product__order");
var addToCartButtons = document.querySelectorAll(".product__add-to-cart");
var modal = document.querySelector(".modal");

if (orderButton) {
  orderButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--shown");
  });
}

if (addToCartButtons) {
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
      modal.classList.add("modal--shown");
    });
  }
}

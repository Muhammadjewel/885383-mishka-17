var orderButton = document.querySelector(".featured-product__order");
var modal = document.querySelector(".modal");

if (orderButton) {
  orderButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--shown");
  });
}

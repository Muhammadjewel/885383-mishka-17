var sitenav = document.querySelector(".sitenav");
var sitenavToggler = document.querySelector(".sitenav__toggler");
var orderButton = document.querySelector(".featured-product__order");
var addToCartButtons = document.querySelectorAll(".product__add-to-cart");
var modal = document.querySelector(".modal");

sitenav.classList.remove("sitenav--nojs");

sitenavToggler.addEventListener("click", function() {
  if (sitenav.classList.contains("sitenav--open")) {
    sitenav.classList.remove("sitenav--open");
    sitenav.classList.add("sitenav--closed");
  } else {
    sitenav.classList.remove("sitenav--closed");
    sitenav.classList.add("sitenav--open");
  }
});

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

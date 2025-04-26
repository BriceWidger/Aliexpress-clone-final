/**
 * This code snippet is an event listener for the "DOMContentLoaded" event.
 * It checks if all the cart counts stored in the localStorage are zero.
 * If all the cart counts are zero, it pushes a new state to the browser history
 * and reloads the page to display the shopping cart empty page.
 *
 * The cart counts are retrieved from the localStorage using the keys specified
 * in the 'cartCounts' array.
 *
 * The 'allZero' variable is initially set to true and is updated to false
 * if any of the cart counts is not zero.
 *
 * If all the cart counts are zero, the 'allZero' variable remains true.
 * In this case, the code pushes a new state to the browser history and
 * reloads the page to display the shopping cart empty page.
 */

function emptyCart_redirect() {
  var cartNumber = document.getElementById("cart-number");
  var triggerElements = [
    document.querySelector(".cart-icon-text-checkout"),
    document.querySelector(".cart-check-out-white"),
    document.querySelector(".cart-number-cart-text-wrap"),
    document.querySelector(".cart-text"),
  ];

  triggerElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      if (
        cartNumber.textContent === "0" ||
        cartNumber.textContent === "" ||
        cartNumber.textContent === null
      ) {
        event.preventDefault();
        window.location.href = "/shoppingCartEmpty.html";
      }
    });
  });
}

emptyCart_redirect();

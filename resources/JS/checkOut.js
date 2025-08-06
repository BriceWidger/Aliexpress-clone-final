/**

Prevents the product count elements (#productCountOne through #productCountEleven) and their respective counts in local storage from being decremented below a value of 1. 

*/

function notBelowOne_checkOut() {
  const words = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
  ];

  words.forEach((word) => {
    const id = `productCount${word}`;
    document
      .getElementById(id)
      .addEventListener("DOMSubtreeModified", function () {
        const currentCount = parseInt(this.textContent);
        if (currentCount < 1) {
          this.textContent = 1;
          localStorage.setItem(`count${word}`, 1);
        }
      });
  });
}

notBelowOne_checkOut();

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**

This code applies styles to the "+" and "-" button elements.

When a product count is 1, its corresponding minus icon (.quantity-minus-icons-radius-co) is set to 50% opacity and its cursor is changed to "not-allowed" on hover.

When a product count is 1 and the user clicks the plus icon (.quantity-plus-icons-radius-co), the styles are removed. 

*/

function updateIconStyles_checkOut(productCount, minusIcon) {
  minusIcon.style.opacity =
    parseInt(productCount.textContent) === 1 ? "0.5" : "1";
  minusIcon.style.cursor =
    parseInt(productCount.textContent) === 1 ? "not-allowed" : "";
}

function initProductCount_checkOut(
  productCountId,
  plusIconClass,
  minusIconClass
) {
  const productCount = document.getElementById(productCountId);
  const plusIcon = document.querySelector(`.${plusIconClass}`);
  const minusIcon = document.querySelector(`.${minusIconClass}`);

  updateIconStyles_checkOut(productCount, minusIcon);
  productCount.addEventListener("DOMSubtreeModified", () =>
    updateIconStyles_checkOut(productCount, minusIcon)
  );

  [plusIcon, minusIcon].forEach((icon) =>
    icon.addEventListener("click", () =>
      updateIconStyles_checkOut(productCount, minusIcon)
    )
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const numbers = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
  ];
  const productCounts = numbers.map((number, index) => ({
    id: `productCount${number}`,
    plusIconClass: `quantity-plus-icons-radius-co-${number.toLowerCase()}`,
    minusIconClass: `quantity-minus-icons-radius-co-${number.toLowerCase()}`,
  }));

  productCounts.forEach((productCount) =>
    initProductCount_checkOut(
      productCount.id,
      productCount.plusIconClass,
      productCount.minusIconClass
    )
  );

  const subtotalElement = document.getElementById("multiplied-subtotal");
  const shippingElement = document.querySelector(".summary-shipping-price");
  const totalElement = document.getElementById("multiplied-total");

  function updateTotalPriceCheckOut() {
    const subtotal = parseFloat(subtotalElement.textContent) || 0;
    const shipping =
      shippingElement.textContent.trim().toLowerCase() === "free"
        ? 0
        : parseFloat(shippingElement.textContent) || 0;

    const total = subtotal + shipping;
    totalElement.textContent = total.toFixed(2);
  }

  // Initial calculation
  updateTotalPriceCheckOut();

  // Observe changes in subtotal and shipping price to update total price
  const subtotalObserver = new MutationObserver(updateTotalPriceCheckOut);
  subtotalObserver.observe(subtotalElement, { childList: true });

  const shippingObserver = new MutationObserver(updateTotalPriceCheckOut);
  shippingObserver.observe(shippingElement, { childList: true });
});

// Override decrement functions to prevent count from going below 1 on checkout page
function decrementProductCountOne() {
  const productCountOne = document.getElementById("productCountOne");
  const currentCount = parseInt(productCountOne.textContent);
  if (currentCount > 1) {
    productCountOne.textContent = currentCount - 1;
  }
}

function decrementProductCountTwo() {
  const productCountTwo = document.getElementById("productCountTwo");
  const currentCount = parseInt(productCountTwo.textContent);
  if (currentCount > 1) {
    productCountTwo.textContent = currentCount - 1;
  }
}

function decrementProductCountThree() {
  const productCountThree = document.getElementById("productCountThree");
  const currentCount = parseInt(productCountThree.textContent);
  if (currentCount > 1) {
    productCountThree.textContent = currentCount - 1;
  }
}

function decrementProductCountFour() {
  const productCountFour = document.getElementById("productCountFour");
  const currentCount = parseInt(productCountFour.textContent);
  if (currentCount > 1) {
    productCountFour.textContent = currentCount - 1;
  }
}

function decrementProductCountFive() {
  const productCountFive = document.getElementById("productCountFive");
  const currentCount = parseInt(productCountFive.textContent);
  if (currentCount > 1) {
    productCountFive.textContent = currentCount - 1;
  }
}

function decrementProductCountSix() {
  const productCountSix = document.getElementById("productCountSix");
  const currentCount = parseInt(productCountSix.textContent);
  if (currentCount > 1) {
    productCountSix.textContent = currentCount - 1;
  }
}

function decrementProductCountSeven() {
  const productCountSeven = document.getElementById("productCountSeven");
  const currentCount = parseInt(productCountSeven.textContent);
  if (currentCount > 1) {
    productCountSeven.textContent = currentCount - 1;
  }
}

function decrementProductCountEight() {
  const productCountEight = document.getElementById("productCountEight");
  const currentCount = parseInt(productCountEight.textContent);
  if (currentCount > 1) {
    productCountEight.textContent = currentCount - 1;
  }
}

function decrementProductCountNine() {
  const productCountNine = document.getElementById("productCountNine");
  const currentCount = parseInt(productCountNine.textContent);
  if (currentCount > 1) {
    productCountNine.textContent = currentCount - 1;
  }
}

function decrementProductCountTen() {
  const productCountTen = document.getElementById("productCountTen");
  const currentCount = parseInt(productCountTen.textContent);
  if (currentCount > 1) {
    productCountTen.textContent = currentCount - 1;
  }
}

function decrementProductCountEleven() {
  const productCountEleven = document.getElementById("productCountEleven");
  const currentCount = parseInt(productCountEleven.textContent);
  if (currentCount > 1) {
    productCountEleven.textContent = currentCount - 1;
  }
}

// Ensure keys ending with _TEMP and having NaN as their value are removed from localStorage
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("_TEMP") && localStorage.getItem(key) === "NaN") {
      localStorage.removeItem(key);
    }
  });
});

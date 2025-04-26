// If no keys with imgData in their names in local storage, refresh page to shoppingCartEmpty.html
function noImgData_refreshToEmptyShoppingCart() {
  if (window.location.pathname.endsWith("noMatch.html")) {
    return; // Do not redirect if on noMatch.html
  }
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("imgData")) {
      return; // found a key with "imgData" in its name, exit function
    }
  }
  // no keys with "imgData" in their names found, refresh page
  window.location.href = "/shoppingCartEmpty.html";
}

// call the function
noImgData_refreshToEmptyShoppingCart();

// Ensure _TEMP keys and NaN values are removed from localStorage on shoppingCart.html
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.includes("_TEMP") || localStorage.getItem(key) === "NaN") {
      localStorage.removeItem(key);
    }
  });
});

// Ensure keys ending with _TEMP and having NaN as their value are removed from localStorage
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("_TEMP") && localStorage.getItem(key) === "NaN") {
      localStorage.removeItem(key);
    }
  });
});

/**
 *
 *
 *
 *
 *
 *
 */

// Process TEMP keys immediately
const countKeys = [
  "countOne",
  "countTwo",
  "countThree",
  "countFour",
  "countFive",
  "countSix",
  "countSeven",
  "countEight",
  "countNine",
  "countTen",
  "countEleven",
];

countKeys.forEach((countKey) => {
  const tempKey = `${countKey}_TEMP`;
  if (localStorage.getItem(tempKey) !== null) {
    const tempValue = localStorage.getItem(tempKey);
    if (!isNaN(tempValue) && parseInt(tempValue) >= 1) {
      localStorage.setItem(countKey, tempValue); // Update main key with TEMP value
    }
    localStorage.removeItem(tempKey); // Remove TEMP key
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const countElements = [
    "productCountOne",
    "productCountTwo",
    "productCountThree",
    "productCountFour",
    "productCountFive",
    "productCountSix",
    "productCountSeven",
    "productCountEight",
    "productCountNine",
    "productCountTen",
    "productCountEleven",
  ];

  // Initialize or restore counts from localStorage
  countElements.forEach((id, index) => {
    const countKey = countKeys[index];
    let storedCount = localStorage.getItem(countKey);

    if (storedCount === null || isNaN(storedCount) || storedCount === "") {
      // Initialize count in localStorage if it doesn't exist or is invalid
      storedCount = "1";
      localStorage.setItem(countKey, storedCount);
    }

    const element = document.getElementById(id);
    if (element) {
      element.textContent = storedCount;
    }
  });

  // Observe changes to update localStorage
  countElements.forEach((id, index) => {
    const countKey = countKeys[index];
    const element = document.getElementById(id);
    if (element) {
      const observer = new MutationObserver(() => {
        const newValue = element.textContent;
        if (!isNaN(newValue) && parseInt(newValue) >= 1) {
          localStorage.setItem(countKey, newValue);
        }
      });
      observer.observe(element, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
  });
});

// localStorage; 1 cart item per product ensured
function clickCounter(product) {
  if (typeof Storage !== "undefined") {
    let count = Number(localStorage.getItem(`cartCount_${product}`) || 0);
    if (!count) {
      count = 1;
      localStorage.setItem(`cartCount_${product}`, count);
    }
    const productKeys = [
      "pillow",
      "rccar",
      "camera",
      "potatohead",
      "makeupone",
      "beatsbydre",
      "jblspeaker",
      "simonrabbit",
      "truthhoodie",
      "makeuptwo",
      "degreaser",
    ];
    const totalCount = productKeys.reduce((acc, key) => {
      const itemCount = Number(localStorage.getItem(`cartCount_${key}`) || 0);
      return acc + itemCount;
    }, 0);
    document.getElementById("cart-number").innerHTML = totalCount;
    document.getElementById("shopping-cart-number").innerHTML = totalCount;
    // document.getElementById("cart-number-checkout").innerHTML = totalCount;
  }
}
window.addEventListener("load", clickCounter);

// Handle image loading and redirect to empty cart page if all images fail to load
const images = document.querySelectorAll(
  ".cart-product-details-wrap-one img, .cart-product-details-wrap-two img, .cart-product-details-wrap-three img, .cart-product-details-wrap-four img, .cart-product-details-wrap-five img, .cart-product-details-wrap-six img, .cart-product-details-wrap-seven img, .cart-product-details-wrap-eight img, .cart-product-details-wrap-nine img, .cart-product-details-wrap-ten img, .cart-product-details-wrap-eleven img"
);
let imagesLoaded = 0;
const totalImages = images.length;
// Wait for all images to finish loading
const imagesLoadedPromise = new Promise((resolve) => {
  // Loop through each image
  images.forEach((image) => {
    // Add an event listener for the onerror event
    image.addEventListener("error", () => {
      // Get the parent div of the image
      const parentDiv = image.closest(
        ".cart-product-details-wrap-one, .cart-product-details-wrap-two, .cart-product-details-wrap-three, .cart-product-details-wrap-four, .cart-product-details-wrap-five, .cart-product-details-wrap-six, .cart-product-details-wrap-seven, .cart-product-details-wrap-eight, .cart-product-details-wrap-nine, .cart-product-details-wrap-ten, .cart-product-details-wrap-eleven"
      );
      // Hide the parent div
      parentDiv.style.display = "none";
      imagesLoaded++;
      // Check if all images have loaded or failed to load
      if (imagesLoaded === totalImages) {
        resolve();
      }
    });
    // Add an event listener for the onload event
    image.addEventListener("load", () => {
      imagesLoaded++;
      // Check if all images have loaded or failed to load
      if (imagesLoaded === totalImages) {
        resolve();
      }
    });
  });
});
// Wait for all images to finish loading before proceeding
imagesLoadedPromise.then(() => {
  // Check if all cart-product-details-wrap-* divs are hidden
  const visibleCartDivs = document.querySelectorAll(
    '.cart-product-details-wrap-one:not([style*="display: none"]), .cart-product-details-wrap-two:not([style*="display: none"]), .cart-product-details-wrap-three:not([style*="display: none"]), .cart-product-details-wrap-four:not([style*="display: none"]), .cart-product-details-wrap-five:not([style*="display: none"]), .cart-product-details-wrap-six:not([style*="display: none"]), .cart-product-details-wrap-seven:not([style*="display: none"]), .cart-product-details-wrap-eight:not([style*="display: none"]), .cart-product-details-wrap-nine:not([style*="display: none"]), .cart-product-details-wrap-ten:not([style*="display: none"]), .cart-product-details-wrap-eleven:not([style*="display: none"])'
  );
  // if (visibleCartDivs.length === 0) {
  //     window.location.href = 'shoppingCartempty.html';
  // }
});

// Code to retrieve and update product titles and prices from localStorage (on beatsbydreCheckOut.html)
// Get references to the elements
const productTitleOne = document.getElementById("cp-product-title-one");
const priceOne = document.getElementById("cp-price-one");
const productTitleTwo = document.getElementById("cp-product-title-two");
const priceTwo = document.getElementById("cp-price-two");
const productTitleThree = document.getElementById("cp-product-title-three");
const priceThree = document.getElementById("cp-price-three");
const productTitleFour = document.getElementById("cp-product-title-four");
const priceFour = document.getElementById("cp-price-four");
const productTitleFive = document.getElementById("cp-product-title-five");
const priceFive = document.getElementById("cp-price-five");
const productTitleSix = document.getElementById("cp-product-title-six");
const priceSix = document.getElementById("cp-price-six");
const productTitleSeven = document.getElementById("cp-product-title-seven");
const priceSeven = document.getElementById("cp-price-seven");
const productTitleEight = document.getElementById("cp-product-title-eight");
const priceEight = document.getElementById("cp-price-eight");
const productTitleNine = document.getElementById("cp-product-title-nine");
const priceNine = document.getElementById("cp-price-nine");
const productTitleTen = document.getElementById("cp-product-title-ten");
const priceTen = document.getElementById("cp-price-ten");
const productTitleEleven = document.getElementById("cp-product-title-eleven");
const priceEleven = document.getElementById("cp-price-eleven");
// Retrieve the values from localStorage and update the elements
const storedTitleOne = localStorage.getItem("productTitleOne");
const storedPriceOne = localStorage.getItem("productPriceOne");
const storedTitleTwo = localStorage.getItem("productTitleTwo");
const storedPriceTwo = localStorage.getItem("productPriceTwo");
const storedTitleThree = localStorage.getItem("productTitleThree");
const storedPriceThree = localStorage.getItem("productPriceThree");
const storedTitleFour = localStorage.getItem("productTitleFour");
const storedPriceFour = localStorage.getItem("productPriceFour");
const storedTitleFive = localStorage.getItem("productTitleFive");
const storedPriceFive = localStorage.getItem("productPriceFive");
const storedTitleSix = localStorage.getItem("productTitleSix");
const storedPriceSix = localStorage.getItem("productPriceSix");
const storedTitleSeven = localStorage.getItem("productTitleSeven");
const storedPriceSeven = localStorage.getItem("productPriceSeven");
const storedTitleEight = localStorage.getItem("productTitleEight");
const storedPriceEight = localStorage.getItem("productPriceEight");
const storedTitleNine = localStorage.getItem("productTitleNine");
const storedPriceNine = localStorage.getItem("productPriceNine");
const storedTitleTen = localStorage.getItem("productTitleTen");
const storedPriceTen = localStorage.getItem("productPriceTen");
const storedTitleEleven = localStorage.getItem("productTitleEleven");
const storedPriceEleven = localStorage.getItem("productPriceEleven");
if (storedTitleOne && storedPriceOne) {
  productTitleOne.textContent = storedTitleOne;
  priceOne.textContent = storedPriceOne;
}
if (storedTitleTwo && storedPriceTwo) {
  productTitleTwo.textContent = storedTitleTwo;
  priceTwo.textContent = storedPriceTwo;
}
if (storedTitleThree && storedPriceThree) {
  productTitleThree.textContent = storedTitleThree;
  priceThree.textContent = storedPriceThree;
}
if (storedTitleFour && storedPriceFour) {
  productTitleFour.textContent = storedTitleFour;
  priceFour.textContent = storedPriceFour;
}
if (storedTitleFive && storedPriceFive) {
  productTitleFive.textContent = storedTitleFive;
  priceFive.textContent = storedPriceFive;
}
if (storedTitleSix && storedPriceSix) {
  productTitleSix.textContent = storedTitleSix;
  priceSix.textContent = storedPriceSix;
}
if (storedTitleSeven && storedPriceSeven) {
  productTitleSeven.textContent = storedTitleSeven;
  priceSeven.textContent = storedPriceSeven;
}
if (storedTitleEight && storedPriceEight) {
  productTitleEight.textContent = storedTitleEight;
  priceEight.textContent = storedPriceEight;
}
if (storedTitleNine && storedPriceNine) {
  productTitleNine.textContent = storedTitleNine;
  priceNine.textContent = storedPriceNine;
}
if (storedTitleTen && storedPriceTen) {
  productTitleTen.textContent = storedTitleTen;
  priceTen.textContent = storedPriceTen;
}
if (storedTitleEleven && storedPriceEleven) {
  productTitleEleven.textContent = storedTitleEleven;
  priceEleven.textContent = storedPriceEleven;
}

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
 */

/**

Updates product prices on the page based on values stored in local storage.

Essentially, whatever the value of the productPrice_(reg, fiftyOff, underTwo, superDeals) is, it makes the value of #cp-price-(one through eleven) the same. For example, if productPrice_reg in local storage is $23.50, then #cp-price-one will display $23.50 on the shopping cart webpage, etc. 

*/

// Define an object that maps product IDs to arrays containing the price element ID and price key
const updateProductPrices_SC = {
  one: ["cp-price-one", "productPriceOne"],
  two: ["cp-price-two", "productPriceTwo"],
  three: ["cp-price-three", "productPriceThree"],
  four: ["cp-price-four", "productPriceFour"],
  five: ["cp-price-five", "productPriceFive"],
  six: ["cp-price-six", "productPriceSix"],
  seven: ["cp-price-seven", "productPriceSeven"],
  eight: ["cp-price-eight", "productPriceEight"],
  nine: ["cp-price-nine", "productPriceNine"],
  ten: ["cp-price-ten", "productPriceTen"],
  eleven: ["cp-price-eleven", "productPriceEleven"],
};

// Iterate over the product IDs in the updateProductPrices_SC object
Object.keys(updateProductPrices_SC).forEach((product) => {
  // Extract the price element ID and price key from the array
  const priceElementId = updateProductPrices_SC[product][0];
  const priceKey = updateProductPrices_SC[product][1];

  // Retrieve the product prices from local storage
  const productPriceSuperDeals = localStorage.getItem(`${priceKey}_superDeals`);
  const productPriceUnderTwo = localStorage.getItem(`${priceKey}_underTwo`);
  const productPriceFiftyOff = localStorage.getItem(`${priceKey}_fiftyOff`);
  const productPriceReg = localStorage.getItem(`${priceKey}_reg`);

  // Update the price element with the highest priority price (super deals > under two > fifty off > regular)
  if (productPriceSuperDeals) {
    document.getElementById(priceElementId).textContent =
      productPriceSuperDeals;
  } else if (productPriceUnderTwo) {
    document.getElementById(priceElementId).textContent = productPriceUnderTwo;
  } else if (productPriceFiftyOff) {
    document.getElementById(priceElementId).textContent = productPriceFiftyOff;
  } else if (productPriceReg) {
    document.getElementById(priceElementId).textContent = productPriceReg;
  }
});

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
 */

/**
 * This code block handles the display and hiding of the "#custom-prompt-co" element based on user interactions.
 *
 * When the ".cart-header-delete-items-text" element is clicked, the "#custom-prompt-co" element is displayed, and when the "#cancel-btn-prompt", "#close-btn", or "#close-btn-x-symbol" elements are clicked, the "#custom-prompt-co" element is hidden.
 *
 */

document
  .querySelector(".cart-header-delete-items-text")
  .addEventListener("click", function () {
    document.getElementById("custom-prompt-co").style.display = "block";
  });

document
  .querySelector("#cancel-btn-prompt")
  .addEventListener("click", function () {
    document.getElementById("custom-prompt-co").style.display = "none";
  });

document.querySelector("#close-btn").addEventListener("click", function () {
  document.getElementById("custom-prompt-co").style.display = "none";
});

document
  .querySelector("#close-btn-x-symbol")
  .addEventListener("click", function () {
    document.getElementById("custom-prompt-co").style.display = "none";
  });

document
  .getElementById("confirm-btn-prompt")
  .addEventListener("click", function () {
    document.getElementById("custom-prompt-co").style.display = "none";
    location.reload();
  });

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
 */

/**
 * Event listener for the confirm button prompt.
 *
 * When clicked, it iterates through a list of product names and checks if the corresponding product's check mark icon is hidden.
 *
 * If the icon is hidden, it removes the product's details wrap element from the DOM and deletes the corresponding data from local storage.
 *
 * This effectively removes the product from the cart.
 *
 * THIS ALSO IS THE CONFIRMATION TO DELETE ALL SELECTED ITEMS FROM CART
 */

// Define an array of product names
const productNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
];

// Add an event listener to the element with the id 'confirm-btn-prompt'
document
  .getElementById("confirm-btn-prompt")
  .addEventListener("click", function () {
    // Loop through each product name in the array
    productNames.forEach((productName, index) => {
      // Create CSS class names for the product check mark icon and cart product details wrap
      const productClass = `.product-${productName}-check-mark-icon-SC`;
      const productWrapClass = `.cart-product-details-wrap-${productName}`;

      // Define a mapping of product names to display names
      const productNameMap = {
        one: "pillow",
        two: "rccar",
        three: "camera",
        four: "potatohead",
        five: "makeupone",
        six: "beatsbydre",
        seven: "jblspeaker",
        eight: "simonrabbit",
        nine: "truthhoodie",
        ten: "makeuptwo",
        eleven: "degreaser",
      };

      // Check if the product check mark icon has a zIndex of 1, is empty, or has a default value of 'auto'
      if (
        document.querySelector(productClass).style.zIndex === "" ||
        document.querySelector(productClass).style.zIndex === "1" ||
        document.querySelector(productClass).style.zIndex === "auto"
      ) {
        // If true, remove the cart product details wrap element
        document.querySelector(productWrapClass).remove();

        // Remove corresponding data from local storage
        localStorage.removeItem(
          `count${productName.charAt(0).toUpperCase() + productName.slice(1)}`
        );
        localStorage.removeItem(
          `imgData${productName.charAt(0).toUpperCase() + productName.slice(1)}`
        );
        localStorage.removeItem(
          `imgData${
            productName.charAt(0).toUpperCase() + productName.slice(1)
          }_TEMP`
        );
        const keys = Object.keys(localStorage).filter((key) =>
          key.startsWith(
            `productPrice${
              productName.charAt(0).toUpperCase() + productName.slice(1)
            }`
          )
        );
        keys.forEach((key) => localStorage.removeItem(key));
        localStorage.removeItem(
          `productTitle${
            productName.charAt(0).toUpperCase() + productName.slice(1)
          }`
        );
        localStorage.removeItem(`cartCount_${productNameMap[productName]}`);
      }
    });
  });

// Function to ensure total price is always the sum of subtotal and shipping price
function updateTotalPrice() {
  const subtotalElement = document.getElementById("multiplied-subtotal");
  const shippingElement = document.querySelector(".summary-shipping-price");
  const totalElement = document.getElementById("multiplied-total");

  const subtotal = parseFloat(subtotalElement.textContent) || 0;
  const shipping =
    shippingElement.textContent.trim().toLowerCase() === "free"
      ? 0
      : parseFloat(shippingElement.textContent) || 0;

  const total = subtotal + shipping;
  totalElement.textContent = total.toFixed(2);
}

// Call updateTotalPrice on page load
document.addEventListener("DOMContentLoaded", updateTotalPrice);

// Observe changes in subtotal and shipping price to update total price
const subtotalObserver = new MutationObserver(updateTotalPrice);
subtotalObserver.observe(document.getElementById("multiplied-subtotal"), {
  childList: true,
});

const shippingObserver = new MutationObserver(updateTotalPrice);
shippingObserver.observe(document.querySelector(".summary-shipping-price"), {
  childList: true,
});

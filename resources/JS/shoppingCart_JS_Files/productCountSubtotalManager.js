/**
 * 
 * 
This code adds the regular-priced subtotals to localStorage only if their respective productPrice{key}_reg is present in localStorage. 
*/

const products_reg_subtotal = [
  { name: "Pillow", price: "23.50", key: "productPriceOne_reg" },
  { name: "Car", price: "39.97", key: "productPriceTwo_reg" },
  { name: "Camera", price: "269.99", key: "productPriceThree_reg" },
  { name: "Potato Head", price: "17.98", key: "productPriceFour_reg" },
  { name: "Makeup One", price: "23.88", key: "productPriceFive_reg" },
  { name: "Beats by Dre", price: "149.95", key: "productPriceSix_reg" },
  { name: "JBL", price: "382.93", key: "productPriceSeven_reg" },
  { name: "Simon", price: "24.99", key: "productPriceEight_reg" },
  { name: "Truth Hoodie", price: "49.95", key: "productPriceNine_reg" },
  { name: "Makeup Two", price: "17.09", key: "productPriceTen_reg" },
  {
    name: "Automotive Degreaser",
    price: "8.98",
    key: "productPriceEleven_reg",
  },
];

products_reg_subtotal.forEach((product) => {
  if (localStorage.getItem(product.key) !== null) {
    localStorage.setItem(`${product.key}_subtotal`, product.price);
  }
});

/**
 * 
 * 
This code adds the fiftyOff subtotals to localStorage only if their respective productPrice{key}_reg is present in localStorage. 
*/

const products_fiftyOff_subtotal = [
  { name: "Pillow", price: "11.75", key: "productPriceOne_fiftyOff" },
  { name: "Car", price: "19.99", key: "productPriceTwo_fiftyOff" },
  { name: "Camera", price: "135.00", key: "productPriceThree_fiftyOff" },
  { name: "Potato Head", price: "8.99", key: "productPriceFour_fiftyOff" },
  { name: "Makeup One", price: "11.94", key: "productPriceFive_fiftyOff" },
  { name: "Beats by Dre", price: "74.98", key: "productPriceSix_fiftyOff" },
  { name: "JBL", price: "191.47", key: "productPriceSeven_fiftyOff" },
  { name: "Simon", price: "12.50", key: "productPriceEight_fiftyOff" },
  { name: "Truth Hoodie", price: "24.98", key: "productPriceNine_fiftyOff" },
  { name: "Makeup Two", price: "8.55", key: "productPriceTen_fiftyOff" },
  {
    name: "Automotive Degreaser",
    price: "4.49",
    key: "productPriceEleven_fiftyOff",
  },
];

products_fiftyOff_subtotal.forEach((product) => {
  if (localStorage.getItem(product.key) !== null) {
    localStorage.setItem(`${product.key}_subtotal`, product.price);
  }
});

/**
 * 
 * 
This code adds the underTwo subtotals to localStorage only if their respective productPrice{key}_reg is present in localStorage. 
*/

const products_underTwo_subtotal = [
  { name: "Pillow", price: "3.68", key: "productPriceOne_underTwo" },
  { name: "Car", price: "9.99", key: "productPriceTwo_underTwo" },
  { name: "Camera", price: "5.77", key: "productPriceThree_underTwo" },
  { name: "Potato Head", price: "5.99", key: "productPriceFour_underTwo" },
  { name: "Makeup One", price: "1.97", key: "productPriceFive_underTwo" },
  { name: "Beats by Dre", price: "9.95", key: "productPriceSix_underTwo" },
  { name: "JBL", price: "9.99", key: "productPriceSeven_underTwo" },
  { name: "Simon", price: "2.83", key: "productPriceEight_underTwo" },
  { name: "Truth Hoodie", price: "4.99", key: "productPriceNine_underTwo" },
  { name: "Makeup Two", price: "2.74", key: "productPriceTen_underTwo" },
  {
    name: "Automotive Degreaser",
    price: "1.99",
    key: "productPriceEleven_underTwo",
  },
];

products_underTwo_subtotal.forEach((product) => {
  if (localStorage.getItem(product.key) !== null) {
    localStorage.setItem(`${product.key}_subtotal`, product.price);
  }
});

/**
 * 
 * 
This code adds the superDeals subtotals to localStorage only if their respective productPrice{key}_reg is present in localStorage. 
*/

const products_superDeals_subtotal = [
  { name: "Pillow", price: "9.40", key: "productPriceOne_superDeals" },
  { name: "Car", price: "14.79", key: "productPriceTwo_superDeals" },
  { name: "Camera", price: "113.40", key: "productPriceThree_superDeals" },
  { name: "Potato Head", price: "5.39", key: "productPriceFour_superDeals" },
  { name: "Makeup One", price: "9.31", key: "productPriceFive_superDeals" },
  { name: "Beats by Dre", price: "61.48", key: "productPriceSix_superDeals" },
  { name: "JBL", price: "179.98", key: "productPriceSeven_superDeals" },
  { name: "Simon", price: "8.50", key: "productPriceEight_superDeals" },
  { name: "Truth Hoodie", price: "17.98", key: "productPriceNine_superDeals" },
  { name: "Makeup Two", price: "7.69", key: "productPriceTen_superDeals" },
  {
    name: "Automotive Degreaser",
    price: "4.40",
    key: "productPriceEleven_superDeals",
  },
];

products_superDeals_subtotal.forEach((product) => {
  if (localStorage.getItem(product.key) !== null) {
    localStorage.setItem(`${product.key}_subtotal`, product.price);
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
Ensures that only one productPrice key with a specific deal is stored in local storage.

When a new productPrice key is added, it removes all other productPrice keys with different deals for the SAME product.

This prevents duplicate products with different deals from being added to the cart. 
*/

const productPriceKeys_one = [
  "productPriceOne_reg",
  "productPriceOne_fiftyOff",
  "productPriceOne_underTwo",
  "productPriceOne_superDeals",
];

const productPriceKeys_two = [
  "productPriceTwo_reg",
  "productPriceTwo_fiftyOff",
  "productPriceTwo_underTwo",
  "productPriceTwo_superDeals",
];

const productPriceKeys_three = [
  "productPriceThree_reg",
  "productPriceThree_fiftyOff",
  "productPriceThree_underThree",
  "productPriceThree_superDeals",
];

const productPriceKeys_four = [
  "productPriceFour_reg",
  "productPriceFour_fiftyOff",
  "productPriceFour_underFour",
  "productPriceFour_superDeals",
];

const productPriceKeys_five = [
  "productPriceFive_reg",
  "productPriceFive_fiftyOff",
  "productPriceFive_underFive",
  "productPriceFive_superDeals",
];

const productPriceKeys_six = [
  "productPriceSix_reg",
  "productPriceSix_fiftyOff",
  "productPriceSix_underSix",
  "productPriceSix_superDeals",
];

const productPriceKeys_seven = [
  "productPriceSeven_reg",
  "productPriceSeven_fiftyOff",
  "productPriceSeven_underSeven",
  "productPriceSeven_superDeals",
];

const productPriceKeys_eight = [
  "productPriceEight_reg",
  "productPriceEight_fiftyOff",
  "productPriceEight_underEight",
  "productPriceEight_superDeals",
];

const productPriceKeys_nine = [
  "productPriceNine_reg",
  "productPriceNine_fiftyOff",
  "productPriceNine_underNine",
  "productPriceNine_superDeals",
];

const productPriceKeys_ten = [
  "productPriceTen_reg",
  "productPriceTen_fiftyOff",
  "productPriceTen_underTen",
  "productPriceTen_superDeals",
];

const productPriceKeys_eleven = [
  "productPriceEleven_reg",
  "productPriceEleven_fiftyOff",
  "productPriceEleven_underEleven",
  "productPriceEleven_superDeals",
];

const productPriceKeys = [
  ...productPriceKeys_one,
  ...productPriceKeys_two,
  ...productPriceKeys_three,
  ...productPriceKeys_four,
  ...productPriceKeys_five,
  ...productPriceKeys_six,
  ...productPriceKeys_seven,
  ...productPriceKeys_eight,
  ...productPriceKeys_nine,
  ...productPriceKeys_ten,
  ...productPriceKeys_eleven,
];

window.addEventListener("storage", (e) => {
  if (productPriceKeys.includes(e.key) && e.newValue !== null) {
    const array = [
      productPriceKeys_one,
      productPriceKeys_two,
      productPriceKeys_three,
      productPriceKeys_four,
      productPriceKeys_five,
      productPriceKeys_six,
      productPriceKeys_seven,
      productPriceKeys_eight,
      productPriceKeys_nine,
      productPriceKeys_ten,
      productPriceKeys_eleven,
    ].find((arr) => arr.includes(e.key));

    array.forEach((key) => {
      if (key !== e.key) {
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}_subtotal`);
      }
    });
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
 *
 * Increment and decrement for the "+" and "-" buttons (quantity buttons) for each product.
 *
 */

// Increment functions
function incrementProductCountOne() {
  const productCountOne = document.getElementById("productCountOne");
  const currentCount = parseInt(productCountOne.textContent);
  productCountOne.textContent = currentCount + 1;
}

function incrementProductCountTwo() {
  const productCountTwo = document.getElementById("productCountTwo");
  const currentCount = parseInt(productCountTwo.textContent);
  productCountTwo.textContent = currentCount + 1;
}

function incrementProductCountThree() {
  const productCountThree = document.getElementById("productCountThree");
  const currentCount = parseInt(productCountThree.textContent);
  productCountThree.textContent = currentCount + 1;
}

function incrementProductCountFour() {
  const productCountFour = document.getElementById("productCountFour");
  const currentCount = parseInt(productCountFour.textContent);
  productCountFour.textContent = currentCount + 1;
}

function incrementProductCountFive() {
  const productCountFive = document.getElementById("productCountFive");
  const currentCount = parseInt(productCountFive.textContent);
  productCountFive.textContent = currentCount + 1;
}

function incrementProductCountSix() {
  const productCountSix = document.getElementById("productCountSix");
  const currentCount = parseInt(productCountSix.textContent);
  productCountSix.textContent = currentCount + 1;
}

function incrementProductCountSeven() {
  const productCountSeven = document.getElementById("productCountSeven");
  const currentCount = parseInt(productCountSeven.textContent);
  productCountSeven.textContent = currentCount + 1;
}

function incrementProductCountEight() {
  const productCountEight = document.getElementById("productCountEight");
  const currentCount = parseInt(productCountEight.textContent);
  productCountEight.textContent = currentCount + 1;
}

function incrementProductCountNine() {
  const productCountNine = document.getElementById("productCountNine");
  const currentCount = parseInt(productCountNine.textContent);
  productCountNine.textContent = currentCount + 1;
}

function incrementProductCountTen() {
  const productCountTen = document.getElementById("productCountTen");
  const currentCount = parseInt(productCountTen.textContent);
  productCountTen.textContent = currentCount + 1;
}

function incrementProductCountEleven() {
  const productCountEleven = document.getElementById("productCountEleven");
  const currentCount = parseInt(productCountEleven.textContent);
  productCountEleven.textContent = currentCount + 1;
}

// Decrement functions
function decrementProductCountOne() {
  const productCountOne = document.getElementById("productCountOne");
  const currentCount = parseInt(productCountOne.textContent);
  if (currentCount > 0) {
    productCountOne.textContent = currentCount - 1;
  }
}

function decrementProductCountTwo() {
  const productCountTwo = document.getElementById("productCountTwo");
  const currentCount = parseInt(productCountTwo.textContent);
  if (currentCount > 0) {
    productCountTwo.textContent = currentCount - 1;
  }
}

function decrementProductCountThree() {
  const productCountThree = document.getElementById("productCountThree");
  const currentCount = parseInt(productCountThree.textContent);
  if (currentCount > 0) {
    productCountThree.textContent = currentCount - 1;
  }
}

function decrementProductCountFour() {
  const productCountFour = document.getElementById("productCountFour");
  const currentCount = parseInt(productCountFour.textContent);
  if (currentCount > 0) {
    productCountFour.textContent = currentCount - 1;
  }
}

function decrementProductCountFive() {
  const productCountFive = document.getElementById("productCountFive");
  const currentCount = parseInt(productCountFive.textContent);
  if (currentCount > 0) {
    productCountFive.textContent = currentCount - 1;
  }
}

function decrementProductCountSix() {
  const productCountSix = document.getElementById("productCountSix");
  const currentCount = parseInt(productCountSix.textContent);
  if (currentCount > 0) {
    productCountSix.textContent = currentCount - 1;
  }
}

function decrementProductCountSeven() {
  const productCountSeven = document.getElementById("productCountSeven");
  const currentCount = parseInt(productCountSeven.textContent);
  if (currentCount > 0) {
    productCountSeven.textContent = currentCount - 1;
  }
}

function decrementProductCountEight() {
  const productCountEight = document.getElementById("productCountEight");
  const currentCount = parseInt(productCountEight.textContent);
  if (currentCount > 0) {
    productCountEight.textContent = currentCount - 1;
  }
}

function decrementProductCountNine() {
  const productCountNine = document.getElementById("productCountNine");
  const currentCount = parseInt(productCountNine.textContent);
  if (currentCount > 0) {
    productCountNine.textContent = currentCount - 1;
  }
}

function decrementProductCountTen() {
  const productCountTen = document.getElementById("productCountTen");
  const currentCount = parseInt(productCountTen.textContent);
  if (currentCount > 0) {
    productCountTen.textContent = currentCount - 1;
  }
}

function decrementProductCountEleven() {
  const productCountEleven = document.getElementById("productCountEleven");
  const currentCount = parseInt(productCountEleven.textContent);
  if (currentCount > 0) {
    productCountEleven.textContent = currentCount - 1;
  }
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
 *
 */

/**
 *
 * Makes each count in localstorage the same value as its respective #productCount at all times, and both stay the same values after page refresh.
 */

function syncLocalStorageWithProductCounts() {
  const countElements = Array.from(
    document.querySelectorAll(
      "#productCountOne, #productCountTwo, #productCountThree, #productCountFour, #productCountFive, #productCountSix, #productCountSeven, #productCountEight, #productCountNine, #productCountTen, #productCountEleven"
    )
  );

  countElements.forEach((element, index) => {
    const countKey = `count${
      index === 0
        ? "One"
        : index === 1
        ? "Two"
        : index === 2
        ? "Three"
        : index === 3
        ? "Four"
        : index === 4
        ? "Five"
        : index === 5
        ? "Six"
        : index === 6
        ? "Seven"
        : index === 7
        ? "Eight"
        : index === 8
        ? "Nine"
        : index === 9
        ? "Ten"
        : "Eleven"
    }`;

    if (localStorage.getItem(countKey) !== null) {
      if (element.offsetParent !== null) {
        // Set the initial value of the element from local storage
        element.textContent = localStorage.getItem(countKey);

        const observer = new MutationObserver(() => {
          const newCountValue = element.textContent;
          localStorage.setItem(countKey, newCountValue);
        });

        observer.observe(element, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      } else {
        localStorage.removeItem(countKey);
      }
    }
  });
}

window.addEventListener("load", syncLocalStorageWithProductCounts);

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
Calculates and updates the subtotal values in localStorage for various product prices.

Specifically, it multiplies the value of 'count{productId}' with the corresponding product price values in localStorage and stores the results in the following keys:

productPrice{productId}_reg_subtotal
productPrice{productId}_fiftyOff_subtotal
productPrice{productId}_underTwo_subtotal
productPrice{productId}_superDeals_subtotal

This function is called repeatedly for each product ID in the productIds array. */

function updateProductPriceSubtotals(productId) {
  const prices = [
    `productPrice${productId}_reg`,
    `productPrice${productId}_fiftyOff`,
    `productPrice${productId}_underTwo`,
    `productPrice${productId}_superDeals`,
  ];

  const count = localStorage.getItem(`count${productId}`);

  prices.forEach((priceKey) => {
    const price = localStorage.getItem(priceKey);
    if (price && (priceKey !== `productPrice${productId}_reg` || count)) {
      const value = parseFloat(price.replace("$", ""));
      const subtotal = (value * (count ? parseFloat(count) : 1)).toFixed(2);
      localStorage.setItem(`${priceKey}_subtotal`, subtotal);
    }
  });
}

const productIds = [
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

productIds.forEach((productId) => {
  setInterval(() => updateProductPriceSubtotals(productId), 0);
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
 * Updates the #multiplied-subtotal element with the sum of all values in
 * localStorage that have a key ending with '_subtotal'. The update is done
 * initially and then continuously as fast as possible.
 */
function updateMultipliedSubtotal_SC() {
  function calculateSubtotalSum() {
    const subtotalKeys = Object.keys(localStorage).filter((key) =>
      key.endsWith("_subtotal")
    );
    const subtotalSum = subtotalKeys.reduce(
      (sum, key) => sum + parseFloat(localStorage.getItem(key)),
      0
    );
    document.getElementById("multiplied-subtotal").innerText =
      subtotalSum.toFixed(2);
  }

  calculateSubtotalSum();

  setInterval(calculateSubtotalSum, 0);
}
updateMultipliedSubtotal_SC();

/**
 * Updates the #calculated-tax element with 8.875% of the subtotal value.
 * The update is done initially and then continuously as fast as possible.
 */
function updateCalculatedTax() {
  function calculateTax() {
    const subtotalElement = document.getElementById("multiplied-subtotal");
    const taxElement = document.getElementById("calculated-tax");
    if (subtotalElement && taxElement) {
      const subtotal = parseFloat(subtotalElement.innerText) || 0;
      const tax = (subtotal * 0.08875).toFixed(2);
      taxElement.innerText = tax;
    }
  }

  calculateTax();

  setInterval(calculateTax, 0);
}

updateCalculatedTax();

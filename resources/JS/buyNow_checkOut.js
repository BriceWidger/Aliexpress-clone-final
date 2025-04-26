/**
 *
 * This code retrieves what was added to localStorage from buyNow_showOnly() on storeLocalStorageImg.js (i.e., buyNow_showOnly_[product]) and ensures that only the buyNow_showOnly_[product] in localStorage will be visible on the buyNow_checkOut page.
 *
 * This completes the purpose of the "Buy Now" option, which will only display one product at a time on the buyNow_checkOut page.
 */

// Define a mapping of product names to the elements that should be hidden
const productHideMapping = {
  pillow: [
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  car: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  camera: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  potatoHead: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  makeupOne: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  beats: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  jbl: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  simon: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  truth: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  makeupTwo: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-eleven",
  ],
  degreaser: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
  ],
};

// Function to hide elements based on the product name
function hideElements_buyNow_showOnly(productName) {
  const elementsToHide = productHideMapping[productName];
  if (elementsToHide) {
    const elements = document.querySelectorAll(elementsToHide.join(", "));
    elements.forEach((element) => {
      element.style.display = "none";
    });
  }
}

// Call the function for each product
Object.keys(productHideMapping).forEach((productName) => {
  if (localStorage.getItem(`buyNow_showOnly_${productName}`) !== null) {
    hideElements_buyNow_showOnly(productName);
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
 *
 *  */

/**
 *
 * This ensures that when there is no count, or null value, in local storage for the product on the buyNow_checkOut page, then by default the quanity count is 1 due to the nature of always needing at least 1 quanity as a "buy now" feature.
 *
 *
 *  */

function buyNowQuantity_defaultIs1() {
  const products = [
    { id: "countOne", name: "Pillow" },
    { id: "countTwo", name: "Car" },
    { id: "countThree", name: "Camera" },
    { id: "countFour", name: "Potato Head" },
    { id: "countFive", name: "Makeup One" },
    { id: "countSix", name: "Beats by Dre" },
    { id: "countSeven", name: "JBL Speaker" },
    { id: "countEight", name: "Simon Rabbit" },
    { id: "countNine", name: "Truth Hoodie" },
    { id: "countTen", name: "Makeup Two" },
    { id: "countEleven", name: "Automotive Degreaser" },
  ];

  products.forEach((product) => {
    const count = localStorage.getItem(product.id);
    if (count !== null) {
      document.getElementById(
        `productCount${product.id.replace("count", "")}`
      ).innerText = count;
    }
  });
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
 */

/**
 *
 * This code retrieves specific key names' values from localstorage (i.e., [product]_price_buyNow_ ) only if its #cart-product-img is not displayed as "none" and it sets those values to the subtotal on buyNow_checkOut page.
 */

// Pillow
const pillow_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgOne = document.getElementById("cart-product-img-one");

if (cartProductImgOne.style.display !== "none") {
  const storedPillowPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("pillow_price_buyNow_")
  );

  if (storedPillowPrice) {
    pillow_price_subtotal.innerText = localStorage.getItem(storedPillowPrice);
  }
}

// Car (countTwo)
const car_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgTwo = document.getElementById("cart-product-img-two");

if (cartProductImgTwo.style.display !== "none") {
  const storedCarPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("car_price_buyNow_")
  );

  if (storedCarPrice) {
    car_price_subtotal.innerText = localStorage.getItem(storedCarPrice);
  }
}

// Camera (countThree)
const camera_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgThree = document.getElementById("cart-product-img-three");

if (cartProductImgThree.style.display !== "none") {
  const storedCameraPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("camera_price_buyNow_")
  );

  if (storedCameraPrice) {
    camera_price_subtotal.innerText = localStorage.getItem(storedCameraPrice);
  }
}

// Potato Head (countFour)
const potatoHead_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgFour = document.getElementById("cart-product-img-four");

if (cartProductImgFour.style.display !== "none") {
  const storedPotatoHeadPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("potatoHead_price_buyNow_")
  );

  if (storedPotatoHeadPrice) {
    potatoHead_price_subtotal.innerText = localStorage.getItem(
      storedPotatoHeadPrice
    );
  }
}

// Makeup One (countFive)
const makeupOne_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgFive = document.getElementById("cart-product-img-five");

if (cartProductImgFive.style.display !== "none") {
  const storedMakeupOnePrice = Object.keys(localStorage).find((key) =>
    key.startsWith("makeupOne_price_buyNow_")
  );

  if (storedMakeupOnePrice) {
    makeupOne_price_subtotal.innerText =
      localStorage.getItem(storedMakeupOnePrice);
  }
}

// Beats by Dre
const beats_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgSix = document.getElementById("cart-product-img-six");

if (cartProductImgSix.style.display !== "none") {
  const storedBeatsPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("beats_price_buyNow_")
  );
  if (storedBeatsPrice) {
    beats_price_subtotal.innerText = localStorage.getItem(storedBeatsPrice);
  }
}

// JBL (countSeven)
const jbl_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgSeven = document.getElementById("cart-product-img-seven");

if (cartProductImgSeven.style.display !== "none") {
  const storedJblPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("jbl_price_buyNow_")
  );

  if (storedJblPrice) {
    jbl_price_subtotal.innerText = localStorage.getItem(storedJblPrice);
  }
}

// Simon Rabbit (countEight)
const simon_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgEight = document.getElementById("cart-product-img-eight");

if (cartProductImgEight.style.display !== "none") {
  const storedSimonPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("simon_price_buyNow_")
  );

  if (storedSimonPrice) {
    simon_price_subtotal.innerText = localStorage.getItem(storedSimonPrice);
  }
}

// Truth (countNine)
const truth_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgNine = document.getElementById("cart-product-img-nine");

if (cartProductImgNine.style.display !== "none") {
  const storedTruthPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("truth_price_buyNow_")
  );

  if (storedTruthPrice) {
    truth_price_subtotal.innerText = localStorage.getItem(storedTruthPrice);
  }
}

// Makeup Two (countTen)
const makeupTwo_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgTen = document.getElementById("cart-product-img-ten");

if (cartProductImgTen.style.display !== "none") {
  const storedMakeupTwoPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("makeupTwo_price_buyNow_")
  );

  if (storedMakeupTwoPrice) {
    makeupTwo_price_subtotal.innerText =
      localStorage.getItem(storedMakeupTwoPrice);
  }
}

// Automotive Degreaser (countEleven)
const degreaser_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgEleven = document.getElementById("cart-product-img-eleven");

if (cartProductImgEleven.style.display !== "none") {
  const storedDegreaserPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("degreaser_price_buyNow_")
  );

  if (storedDegreaserPrice) {
    degreaser_price_subtotal.innerText =
      localStorage.getItem(storedDegreaserPrice);
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

This code applies styles to the "+" and "-" button elements.

When a product count is 1, its corresponding minus icon (.quantity-minus-icons-radius-co) is set to 50% opacity and its cursor is changed to "not-allowed" on hover.

When a product count is 1 and the user clicks the plus icon (.quantity-plus-icons-radius-co), the styles are removed. 

*/

function updateIconStyles_buyNow_checkOut(productCount, minusIcon) {
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

  updateIconStyles_buyNow_checkOut(productCount, minusIcon);
  productCount.addEventListener("DOMSubtreeModified", () =>
    updateIconStyles_buyNow_checkOut(productCount, minusIcon)
  );

  [plusIcon, minusIcon].forEach((icon) =>
    icon.addEventListener("click", () =>
      updateIconStyles_buyNow_checkOut(productCount, minusIcon)
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
 */

/**
 *
 * ProductCounts on page match localstorage counts, and their values change in real time together.
 *
 * This code also prevents both productCounts and counts in localstorage to go below 1.
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
 *
 *
 *
 *
 */

/**
 *
 * When on the buyNow_checkOut page, only the keys in local storage with _TEMP at the end of their names will display on the page.
 *
 * Because the _TEMP keys are temporary and used specifically for the buyNow_checkOut page, the other keys that don't have _TEMP attached to them remain hidden from the page but still available in local storage for the shoppingCart page.
 *
 */

const noneTEMPkeys_displayNone_buyNow = [
  {
    id: "One",
    temp: "imgDataOne_TEMP",
    selector: ".cart-product-details-wrap-one",
  },
  {
    id: "Two",
    temp: "imgDataTwo_TEMP",
    selector: ".cart-product-details-wrap-two",
  },
  {
    id: "Three",
    temp: "imgDataThree_TEMP",
    selector: ".cart-product-details-wrap-three",
  },
  {
    id: "Four",
    temp: "imgDataFour_TEMP",
    selector: ".cart-product-details-wrap-four",
  },
  {
    id: "Five",
    temp: "imgDataFive_TEMP",
    selector: ".cart-product-details-wrap-five",
  },
  {
    id: "Six",
    temp: "imgDataSix_TEMP",
    selector: ".cart-product-details-wrap-six",
  },
  {
    id: "Seven",
    temp: "imgDataSeven_TEMP",
    selector: ".cart-product-details-wrap-seven",
  },
  {
    id: "Eight",
    temp: "imgDataEight_TEMP",
    selector: ".cart-product-details-wrap-eight",
  },
  {
    id: "Nine",
    temp: "imgDataNine_TEMP",
    selector: ".cart-product-details-wrap-nine",
  },
  {
    id: "Ten",
    temp: "imgDataTen_TEMP",
    selector: ".cart-product-details-wrap-ten",
  },
  {
    id: "Eleven",
    temp: "imgDataEleven_TEMP",
    selector: ".cart-product-details-wrap-eleven",
  },
];

function toggleCartProductDetails_buyNow(productId) {
  const imgDataTemp = localStorage.getItem(productId.temp);
  const cartProductDetails = document.querySelector(productId.selector);
  if (imgDataTemp !== null) {
    cartProductDetails.style.display = "block";
  } else {
    cartProductDetails.style.display = "none";
  }
}

// Call the function for each product ID
noneTEMPkeys_displayNone_buyNow.forEach((productId) =>
  toggleCartProductDetails_buyNow(productId)
);

// Function to dynamically display products in the cart-list based on _TEMP keys
function renderCartProducts_buyNow() {
  noneTEMPkeys_displayNone_buyNow.forEach((product) => {
    const imgDataTemp = localStorage.getItem(product.temp);
    const cartProductDetails = document.querySelector(product.selector);
    const cartProductImg = document.querySelector(`${product.selector} img`);

    if (imgDataTemp && cartProductDetails && cartProductImg) {
      cartProductDetails.style.display = "block"; // Show the product container
      cartProductImg.src = imgDataTemp; // Set the image source
    } else if (cartProductDetails) {
      cartProductDetails.style.display = "none"; // Hide the product container
    }
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", renderCartProducts_buyNow);

// Update products when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  renderCartProducts_buyNow();
});

// Force a reload when navigating back/forward to this page
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
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

This code synchronizes the values of the #cp-prices elements on the buyNow_checkOut page with their corresponding storageKeys_buyNow_CO values.

For example, the value of #cp-price-one will be updated to match the value of pillow_price_buyNow_reg_TEMP, pillow_price_buyNow_fiftyOff_TEMP, etc.

*/

function updatePriceElement_buyNow_checkOut(elementId, storageKeys_buyNow_CO) {
  const priceElement = document.getElementById(elementId);
  const storedPrices = storageKeys_buyNow_CO.map((storageKey) =>
    localStorage.getItem(storageKey)
  );

  if (storedPrices.some((price) => price)) {
    priceElement.textContent = storedPrices.find((price) => price);
  }
}

const storageKeys_buyNow_CO = {
  "cp-price-one": [
    "pillow_price_buyNow_reg_TEMP",
    "pillow_price_buyNow_fiftyOff_TEMP",
    "pillow_price_buyNow_underTwo_TEMP",
    "pillow_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-two": [
    "car_price_buyNow_reg_TEMP",
    "car_price_buyNow_fiftyOff_TEMP",
    "car_price_buyNow_underTwo_TEMP",
    "car_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-three": [
    "camera_price_buyNow_reg_TEMP",
    "camera_price_buyNow_fiftyOff_TEMP",
    "camera_price_buyNow_underTwo_TEMP",
    "camera_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-four": [
    "potatoHead_price_buyNow_reg_TEMP",
    "potatoHead_price_buyNow_fiftyOff_TEMP",
    "potatoHead_price_buyNow_underTwo_TEMP",
    "potatoHead_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-five": [
    "makeupOne_price_buyNow_reg_TEMP",
    "makeupOne_price_buyNow_fiftyOff_TEMP",
    "makeupOne_price_buyNow_underTwo_TEMP",
    "makeupOne_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-six": [
    "beats_price_buyNow_reg_TEMP",
    "beats_price_buyNow_fiftyOff_TEMP",
    "beats_price_buyNow_underTwo_TEMP",
    "beats_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-seven": [
    "jbl_price_buyNow_reg_TEMP",
    "jbl_price_buyNow_fiftyOff_TEMP",
    "jbl_price_buyNow_underTwo_TEMP",
    "jbl_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-eight": [
    "simon_price_buyNow_reg_TEMP",
    "simon_price_buyNow_fiftyOff_TEMP",
    "simon_price_buyNow_underTwo_TEMP",
    "simon_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-nine": [
    "truth_price_buyNow_reg_TEMP",
    "truth_price_buyNow_fiftyOff_TEMP",
    "truth_price_buyNow_underTwo_TEMP",
    "truth_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-ten": [
    "makeupTwo_price_buyNow_reg_TEMP",
    "makeupTwo_price_buyNow_fiftyOff_TEMP",
    "makeupTwo_price_buyNow_underTwo_TEMP",
    "makeupTwo_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-eleven": [
    "degreaser_price_buyNow_reg_TEMP",
    "degreaser_price_buyNow_fiftyOff_TEMP",
    "degreaser_price_buyNow_underTwo_TEMP",
    "degreaser_price_buyNow_superDeals_TEMP",
  ],
};

Object.keys(storageKeys_buyNow_CO).forEach((elementId) => {
  updatePriceElement_buyNow_checkOut(
    elementId,
    storageKeys_buyNow_CO[elementId]
  );
});

window.addEventListener("storage", () => {
  Object.keys(storageKeys_buyNow_CO).forEach((elementId) => {
    updatePriceElement_buyNow_checkOut(
      elementId,
      storageKeys_buyNow_CO[elementId]
    );
  });
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
 *
 */

/**
 * Calculates the subtotal from the values in local storage
 *
 * Updates the value of the #multiplied-subtotal_buyNow element by adding together all the values of items in local storage with "_price_buyNow_" in their name.
 */

// Function to calculate subtotal for buyNow
function buyNow_prices_subtotal() {
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  document.getElementById("multiplied-subtotal_buyNow").innerHTML =
    subtotal.toFixed(2);
}

// Call the function
buyNow_prices_subtotal();

// Function to calculate and update the total price
function buyNow_updateTotalPrice() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const taxElement = document.getElementById("calculated-tax");
  const totalElement = document.getElementById("multiplied-total");

  const subtotal = parseFloat(subtotalElement.textContent) || 0;
  const tax = parseFloat(taxElement.textContent) || 0;

  const total = subtotal + tax;
  totalElement.textContent = total.toFixed(2);
}

// Call buyNow_updateTotalPrice on page load
document.addEventListener("DOMContentLoaded", buyNow_updateTotalPrice);

// Observe changes in subtotal and tax to update total price
const buyNow_subtotalObserver = new MutationObserver(buyNow_updateTotalPrice);
buyNow_subtotalObserver.observe(
  document.getElementById("multiplied-subtotal_buyNow"),
  { childList: true }
);

const buyNow_taxObserver = new MutationObserver(buyNow_updateTotalPrice);
buyNow_taxObserver.observe(document.getElementById("calculated-tax"), {
  childList: true,
});

// Example: Update subtotal and trigger tax calculation
function updateBuyNowSubtotal() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  subtotalElement.textContent = subtotal.toFixed(2);

  // Trigger tax and total calculation
  calculateTaxAndTotalBuyNow();
}

// Call updateBuyNowSubtotal on page load
document.addEventListener("DOMContentLoaded", updateBuyNowSubtotal);

/**
 * Calculates and updates the tax and total prices based on the current subtotal.
 */
function calculateTaxAndTotalBuyNow() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const taxElement = document.getElementById("calculated-tax");
  const totalElement = document.getElementById("multiplied-total");

  if (subtotalElement && taxElement && totalElement) {
    const subtotal = parseFloat(subtotalElement.textContent) || 0;
    const taxRate = 8.875 / 100; // 8.875% tax rate
    const tax = parseFloat((subtotal * taxRate).toFixed(2));
    const total = parseFloat((subtotal + tax).toFixed(2));

    taxElement.textContent = tax;
    totalElement.textContent = total;
  }
}

// Observe changes in the subtotal to dynamically update tax and total prices
const subtotalObserver = new MutationObserver(calculateTaxAndTotalBuyNow);
subtotalObserver.observe(
  document.getElementById("multiplied-subtotal_buyNow"),
  { childList: true, subtree: true, characterData: true }
);

// Call calculateTaxAndTotalBuyNow on page load
document.addEventListener("DOMContentLoaded", calculateTaxAndTotalBuyNow);

// Add event listener to update total price when tax or shipping changes
document.addEventListener("DOMContentLoaded", () => {
  const taxElement = document.getElementById("calculated-tax");
  const shippingElement = document.querySelector(".summary-shipping-price");

  if (taxElement) {
    const taxObserver = new MutationObserver(buyNow_updateTotalPrice);
    taxObserver.observe(taxElement, { childList: true });
  }

  if (shippingElement) {
    const shippingObserver = new MutationObserver(buyNow_updateTotalPrice);
    shippingObserver.observe(shippingElement, { childList: true });
  }
});

// Save _TEMP keys to sessionStorage before leaving the page
window.addEventListener("beforeunload", () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      sessionStorage.setItem(key, localStorage.getItem(key));
    }
  });
});

// Restore _TEMP keys from sessionStorage to localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(sessionStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      localStorage.setItem(key, sessionStorage.getItem(key));
    }
  });
});

// Restore _TEMP keys when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  Object.keys(sessionStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      localStorage.setItem(key, sessionStorage.getItem(key));
    }
  });
});

// Function to update product counts dynamically
function updateProductCounts_buyNow() {
  const productCounts = [
    { id: "productCountOne", tempKey: "countOne_TEMP" },
    { id: "productCountTwo", tempKey: "countTwo_TEMP" },
    { id: "productCountThree", tempKey: "countThree_TEMP" },
    { id: "productCountFour", tempKey: "countFour_TEMP" },
    { id: "productCountFive", tempKey: "countFive_TEMP" },
    { id: "productCountSix", tempKey: "countSix_TEMP" },
    { id: "productCountSeven", tempKey: "countSeven_TEMP" },
    { id: "productCountEight", tempKey: "countEight_TEMP" },
    { id: "productCountNine", tempKey: "countNine_TEMP" },
    { id: "productCountTen", tempKey: "countTen_TEMP" },
    { id: "productCountEleven", tempKey: "countEleven_TEMP" },
  ];

  productCounts.forEach(({ id, tempKey }) => {
    const element = document.getElementById(id);
    const count = localStorage.getItem(tempKey);
    if (element && count !== null) {
      element.textContent = count;
    }
  });
}

// Function to update product prices dynamically
function updateProductPrices_buyNow() {
  const priceMappings = {
    "cp-price-one": [
      "pillow_price_buyNow_reg_TEMP",
      "pillow_price_buyNow_fiftyOff_TEMP",
      "pillow_price_buyNow_underTwo_TEMP",
      "pillow_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-two": [
      "car_price_buyNow_reg_TEMP",
      "car_price_buyNow_fiftyOff_TEMP",
      "car_price_buyNow_underTwo_TEMP",
      "car_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-three": [
      "camera_price_buyNow_reg_TEMP",
      "camera_price_buyNow_fiftyOff_TEMP",
      "camera_price_buyNow_underTwo_TEMP",
      "camera_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-four": [
      "potatoHead_price_buyNow_reg_TEMP",
      "potatoHead_price_buyNow_fiftyOff_TEMP",
      "potatoHead_price_buyNow_underTwo_TEMP",
      "potatoHead_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-five": [
      "makeupOne_price_buyNow_reg_TEMP",
      "makeupOne_price_buyNow_fiftyOff_TEMP",
      "makeupOne_price_buyNow_underTwo_TEMP",
      "makeupOne_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-six": [
      "beats_price_buyNow_reg_TEMP",
      "beats_price_buyNow_fiftyOff_TEMP",
      "beats_price_buyNow_underTwo_TEMP",
      "beats_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-seven": [
      "jbl_price_buyNow_reg_TEMP",
      "jbl_price_buyNow_fiftyOff_TEMP",
      "jbl_price_buyNow_underTwo_TEMP",
      "jbl_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-eight": [
      "simon_price_buyNow_reg_TEMP",
      "simon_price_buyNow_fiftyOff_TEMP",
      "simon_price_buyNow_underTwo_TEMP",
      "simon_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-nine": [
      "truth_price_buyNow_reg_TEMP",
      "truth_price_buyNow_fiftyOff_TEMP",
      "truth_price_buyNow_underTwo_TEMP",
      "truth_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-ten": [
      "makeupTwo_price_buyNow_reg_TEMP",
      "makeupTwo_price_buyNow_fiftyOff_TEMP",
      "makeupTwo_price_buyNow_underTwo_TEMP",
      "makeupTwo_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-eleven": [
      "degreaser_price_buyNow_reg_TEMP",
      "degreaser_price_buyNow_fiftyOff_TEMP",
      "degreaser_price_buyNow_underTwo_TEMP",
      "degreaser_price_buyNow_superDeals_TEMP",
    ],
  };

  Object.keys(priceMappings).forEach((id) => {
    const element = document.getElementById(id);
    const prices = priceMappings[id].map((key) => localStorage.getItem(key));
    const validPrice = prices.find((price) => price !== null);
    if (element) {
      element.textContent = validPrice || "0.00";
    }
  });
}

// Function to update subtotal, tax, and total dynamically
function updateSummaryValues_buyNow() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const taxElement = document.getElementById("calculated-tax");
  const totalElement = document.getElementById("multiplied-total");

  // Calculate subtotal
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  subtotalElement.textContent = subtotal.toFixed(2);

  // Calculate tax
  const taxRate = 8.875 / 100; // 8.875% tax rate
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  taxElement.textContent = tax;

  // Calculate total
  const shippingElement = document.querySelector(".summary-shipping-price");
  const shipping =
    shippingElement.textContent.trim().toLowerCase() === "free"
      ? 0
      : parseFloat(shippingElement.textContent) || 0;
  const total = subtotal + tax + shipping;
  totalElement.textContent = total.toFixed(2);
}

// Update products, prices, and summary values when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  updateProductCounts_buyNow();
  updateProductPrices_buyNow();
  updateSummaryValues_buyNow();
});

// Update products and prices when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  updateProductCounts_buyNow();
  updateProductPrices_buyNow();
});

// Function to calculate and update multiplied-subtotal_buyNow in real time
function updateMultipliedSubtotalBuyNow() {
  const productCounts = [
    { priceId: "cp-price-one", countId: "productCountOne" },
    { priceId: "cp-price-two", countId: "productCountTwo" },
    { priceId: "cp-price-three", countId: "productCountThree" },
    { priceId: "cp-price-four", countId: "productCountFour" },
    { priceId: "cp-price-five", countId: "productCountFive" },
    { priceId: "cp-price-six", countId: "productCountSix" },
    { priceId: "cp-price-seven", countId: "productCountSeven" },
    { priceId: "cp-price-eight", countId: "productCountEight" },
    { priceId: "cp-price-nine", countId: "productCountNine" },
    { priceId: "cp-price-ten", countId: "productCountTen" },
    { priceId: "cp-price-eleven", countId: "productCountEleven" },
  ];

  let subtotal = 0;

  productCounts.forEach(({ priceId, countId }) => {
    const priceElement = document.getElementById(priceId);
    const countElement = document.getElementById(countId);

    if (priceElement && countElement) {
      const price = parseFloat(priceElement.textContent) || 0;
      const count = parseInt(countElement.textContent) || 0;
      subtotal += price * count;
    }
  });

  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  if (subtotalElement) {
    subtotalElement.textContent = subtotal.toFixed(2);
  }
}

// Observe changes in product counts and prices to update multiplied-subtotal_buyNow
function observeBuyNowChanges() {
  const productCounts = [
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

  const priceIds = [
    "cp-price-one",
    "cp-price-two",
    "cp-price-three",
    "cp-price-four",
    "cp-price-five",
    "cp-price-six",
    "cp-price-seven",
    "cp-price-eight",
    "cp-price-nine",
    "cp-price-ten",
    "cp-price-eleven",
  ];

  [...productCounts, ...priceIds].forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      const observer = new MutationObserver(updateMultipliedSubtotalBuyNow);
      observer.observe(element, { childList: true, subtree: true });
    }
  });
}

// Initialize real-time updates on page load
document.addEventListener("DOMContentLoaded", () => {
  updateMultipliedSubtotalBuyNow();
  observeBuyNowChanges();
});

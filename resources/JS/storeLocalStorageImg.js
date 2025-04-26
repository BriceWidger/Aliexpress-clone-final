/**
 * This function updates the image data in the local storage.
 *
 * It retrieves the source of the image element with the given id
 * and stores it in the local storage with a specific key.
 *
 * This is specifically used so that when the user clicks on the
 * add-item icon, it saves the image to local storage so it can
 * later be retrieved and displayed in the checkout page.
 *
 * Note: When a user is on an item's product page and clicks the "Buy now" button, the corresponding image data will be stored in local storage with a "_TEMP" suffix. This is specifically for the purpose of the buyNow_checkOut.html page, where the "_TEMP" image data will be used.
 *
 * @function updateImagePillow
 * @function updateImageRCCar
 * @function updateImageCamera
 * @function updateImagePotatoHead
 * @function updateImageMakeupOne
 * @function updateImageBeatsByDre
 * @function updateImageJBLspeaker
 * @function updateImageSimonRabbit
 * @function updateImageTruthHoodie
 * @function updateImageMakeupTwo
 * @function updateImageDegreaser
 */

// Pillow
var preventUpdateImagePillow = false;

function updateImagePillow() {
  if (preventUpdateImagePillow) return;

  if (
    window.location.pathname.endsWith("pillow.html") ||
    window.location.pathname.endsWith("pillow_fiftyOff.html") ||
    window.location.pathname.endsWith("pillow_underTwo.html") ||
    window.location.pathname.endsWith("pillow_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataOne",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/pillow.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataOne",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/pillow.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImagePillow = true;

  if (
    window.location.pathname.endsWith("pillow.html") ||
    window.location.pathname.endsWith("pillow_fiftyOff.html") ||
    window.location.pathname.endsWith("pillow_underTwo.html") ||
    window.location.pathname.endsWith("pillow_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataOne_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/pillow.jpg"
    );
  }
});

// Car
var preventUpdateImageRCCar = false;

function updateImageRCCar() {
  if (preventUpdateImageRCCar) return;

  if (
    window.location.pathname.endsWith("rcRaceCar.html") ||
    window.location.pathname.endsWith("rcRaceCar_fiftyOff.html") ||
    window.location.pathname.endsWith("rcRaceCar_underTwo.html") ||
    window.location.pathname.endsWith("rcRaceCar_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataTwo",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/rc-toy.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataTwo",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/rc-toy.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageRCCar = true;

  if (
    window.location.pathname.endsWith("rcRaceCar.html") ||
    window.location.pathname.endsWith("rcRaceCar_fiftyOff.html") ||
    window.location.pathname.endsWith("rcRaceCar_underTwo.html") ||
    window.location.pathname.endsWith("rcRaceCar_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataTwo_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/rc-toy.jpg"
    );
  }
});

// Camera
var preventUpdateImageCamera = false;

function updateImageCamera() {
  if (preventUpdateImageCamera) return;

  if (
    window.location.pathname.endsWith("olympusCamera.html") ||
    window.location.pathname.endsWith("olympusCamera_fiftyOff.html") ||
    window.location.pathname.endsWith("olympusCamera_underTwo.html") ||
    window.location.pathname.endsWith("olympusCamera_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataThree",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/olympus-camera.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataThree",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/olympus-camera.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageCamera = true;

  if (
    window.location.pathname.endsWith("olympusCamera.html") ||
    window.location.pathname.endsWith("olympusCamera_fiftyOff.html") ||
    window.location.pathname.endsWith("olympusCamera_underTwo.html") ||
    window.location.pathname.endsWith("olympusCamera_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataThree_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/olympus-camera.jpg"
    );
  }
});

// Potato Head
var preventUpdateImagePotatoHead = false;

function updateImagePotatoHead() {
  if (preventUpdateImagePotatoHead) return;

  if (
    window.location.pathname.endsWith("mrPotatoHead.html") ||
    window.location.pathname.endsWith("mrPotatoHead_fiftyOff.html") ||
    window.location.pathname.endsWith("mrPotatoHead_underTwo.html") ||
    window.location.pathname.endsWith("mrPotatoHead_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataFour",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/potatohead.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataFour",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/potatohead.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImagePotatoHead = true;

  if (
    window.location.pathname.endsWith("mrPotatoHead.html") ||
    window.location.pathname.endsWith("mrPotatoHead_fiftyOff.html") ||
    window.location.pathname.endsWith("mrPotatoHead_underTwo.html") ||
    window.location.pathname.endsWith("mrPotatoHead_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataFour_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/potatohead.jpg"
    );
  }
});

// Makeup One
var preventUpdateImageMakeupOne = false;

function updateImageMakeupOne() {
  if (preventUpdateImageMakeupOne) return;

  if (
    window.location.pathname.endsWith("makeup.html") ||
    window.location.pathname.endsWith("makeup_fiftyOff.html") ||
    window.location.pathname.endsWith("makeup_underTwo.html") ||
    window.location.pathname.endsWith("makeup_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataFive",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataFive",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageMakeupOne = true;

  if (
    window.location.pathname.endsWith("makeup.html") ||
    window.location.pathname.endsWith("makeup_fiftyOff.html") ||
    window.location.pathname.endsWith("makeup_underTwo.html") ||
    window.location.pathname.endsWith("makeup_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataFive_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img.jpg"
    );
  }
});

// Beats
var preventUpdateImageBeatsByDre = false;

function updateImageBeatsByDre() {
  if (preventUpdateImageBeatsByDre) return;

  if (
    window.location.pathname.endsWith("beatsbydre.html") ||
    window.location.pathname.endsWith("beatsbydre_fiftyOff.html") ||
    window.location.pathname.endsWith("beatsbydre_underTwo.html") ||
    window.location.pathname.endsWith("beatsbydre_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataSix",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/beatsbydre.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataSix",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/beatsbydre.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageBeatsByDre = true;

  if (
    window.location.pathname.endsWith("beatsbydre.html") ||
    window.location.pathname.endsWith("beatsbydre_fiftyOff.html") ||
    window.location.pathname.endsWith("beatsbydre_underTwo.html") ||
    window.location.pathname.endsWith("beatsbydre_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataSix_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/beatsbydre.jpg"
    );
  }
});

// JBL
var preventUpdateImageJBLspeaker = false;

function updateImageJBLspeaker() {
  if (preventUpdateImageJBLspeaker) return;

  if (
    window.location.pathname.endsWith("jblPartybox.html") ||
    window.location.pathname.endsWith("jblPartybox_fiftyOff.html") ||
    window.location.pathname.endsWith("jblPartybox_underTwo.html") ||
    window.location.pathname.endsWith("jblPartybox_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataSeven",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/JBLspeaker.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataSeven",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/JBLspeaker.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageJBLspeaker = true;

  if (
    window.location.pathname.endsWith("jblPartybox.html") ||
    window.location.pathname.endsWith("jblPartybox_fiftyOff.html") ||
    window.location.pathname.endsWith("jblPartybox_underTwo.html") ||
    window.location.pathname.endsWith("jblPartybox_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataSeven_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/JBLspeaker.jpg"
    );
  }
});

// Simon
var preventUpdateImageSimonRabbit = false;

function updateImageSimonRabbit() {
  if (preventUpdateImageSimonRabbit) return;

  if (
    window.location.pathname.endsWith("simonRabbit.html") ||
    window.location.pathname.endsWith("simonRabbit_fiftyOff.html") ||
    window.location.pathname.endsWith("simonRabbit_underTwo.html") ||
    window.location.pathname.endsWith("simonRabbit_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataEight",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/simon-toy.png"
    );
  } else {
    localStorage.setItem(
      "imgDataEight",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/simon-toy.png"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageSimonRabbit = true;

  if (
    window.location.pathname.endsWith("simonRabbit.html") ||
    window.location.pathname.endsWith("simonRabbit_fiftyOff.html") ||
    window.location.pathname.endsWith("simonRabbit_underTwo.html") ||
    window.location.pathname.endsWith("simonRabbit_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataEight_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/simon-toy.png"
    );
  }
});

// Truth Hoodie
var preventUpdateImageTruthHoodie = false;

function updateImageTruthHoodie() {
  if (preventUpdateImageTruthHoodie) return;

  if (
    window.location.pathname.endsWith("truthHoodie.html") ||
    window.location.pathname.endsWith("truthHoodie_fiftyOff.html") ||
    window.location.pathname.endsWith("truthHoodie_underTwo.html") ||
    window.location.pathname.endsWith("truthHoodie_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataNine",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/truthhoodie.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataNine",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/truthhoodie.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageTruthHoodie = true;

  if (
    window.location.pathname.endsWith("truthHoodie.html") ||
    window.location.pathname.endsWith("truthHoodie_fiftyOff.html") ||
    window.location.pathname.endsWith("truthHoodie_underTwo.html") ||
    window.location.pathname.endsWith("truthHoodie_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataNine_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/truthhoodie.jpg"
    );
  }
});

// Makeup Two
var preventUpdateImageMakeupTwo = false;

function updateImageMakeupTwo() {
  if (preventUpdateImageMakeupTwo) return;

  if (
    window.location.pathname.endsWith("makeupTwo.html") ||
    window.location.pathname.endsWith("makeupTwo_fiftyOff.html") ||
    window.location.pathname.endsWith("makeupTwo_underTwo.html") ||
    window.location.pathname.endsWith("makeupTwo_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataTen_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img-two.jpg"
    );
  } else {
    localStorage.setItem(
      "imgDataTen",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img-two.jpg"
    );
  }
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageMakeupTwo = true;

  if (
    window.location.pathname.endsWith("makeupTwo.html") ||
    window.location.pathname.endsWith("makeupTwo_fiftyOff.html") ||
    window.location.pathname.endsWith("makeupTwo_underTwo.html") ||
    window.location.pathname.endsWith("makeupTwo_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataTen_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/makeup-img-two.jpg"
    );
  }
});

// Degreaser
var preventUpdateImageDegreaser = false;

// Function to handle "Add to cart" for automotiveDegreaser_fiftyOff
function updateImageDegreaser() {
  const degreaserImgSrc = document.getElementById(
    "localStorageImg-Degreaser"
  ).src;

  // Update localStorage with the correct key
  localStorage.setItem("imgDataEleven", degreaserImgSrc); // Use imgDataEleven instead of imgDataEleven_TEMP
}

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  preventUpdateImageDegreaser = true;

  if (
    window.location.pathname.endsWith("automotiveDegreaser.html") ||
    window.location.pathname.endsWith("automotiveDegreaser_fiftyOff.html") ||
    window.location.pathname.endsWith("automotiveDegreaser_underTwo.html") ||
    window.location.pathname.endsWith("automotiveDegreaser_superDeals.html")
  ) {
    localStorage.setItem(
      "imgDataEleven_TEMP",
      "https://raw.githubusercontent.com/BriceWidger/Aliexpress-clone-v106/refs/heads/main/resources/images/automotiveDegreaser.jpg"
    );
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
 */

/**
 * This function ensures that when the user is on a product page with the product's URL and clicks the "Buy now" button, the key "buyNow_showOnly_[product]" is added to the local storage.
 *
 * The "buyNow_showOnly_[product]" key in the local storage is used on the buyNow_checkOut page to display only one product when the user clicks the "Buy now" button and is directed to the checkout page.
 *
 * This function also removes any other "buyNow_showOnly_[product]" keys except itself, ensuring that only one "buyNow_showOnly_[product]" key is present in the local storage at a time.
 *
 * buyNow_checkOut.js will retrieve "buyNow_showOnly_[product]" in local storage on the checkout page.
 */

function buyNow_showOnly() {
  const products = {
    automotiveDegreaser: "degreaser",
    beatsbydre: "beats",
    jblPartybox: "jbl",
    makeup: "makeupOne",
    makeupTwo: "makeupTwo",
    mrPotatoHead: "potatoHead",
    olympusCamera: "camera",
    pillow: "pillow",
    rcRaceCar: "car",
    simonRabbit: "simon",
    truthHoodie: "truth",
  };

  // Clear existing "_TEMP" keys from localStorage before adding new ones
  // Ensures only one product can exist at a time on the buyNow_checkOut page
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      localStorage.removeItem(key);
    }
  });

  Object.keys(products).forEach((product) => {
    if (window.location.href.includes(product)) {
      document
        .getElementById("buy-now-wrap")
        .addEventListener("click", function () {
          const key = `buyNow_showOnly_${products[product]}_TEMP`;
          localStorage.setItem(key, true);
          Object.keys(localStorage).forEach((localStorageKey) => {
            if (
              localStorageKey.startsWith("buyNow_showOnly_") &&
              localStorageKey !== key
            ) {
              localStorage.removeItem(localStorageKey);
            }
          });
        });
    }
  });
}

buyNow_showOnly();

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
This code listens for a click event on the "Buy Now" button and calculates the new product price for multiple products based on their respective counts and prices.

It retrieves the count values from local storage, extracts the product prices from the page, calculates the new product prices, and stores them in local storage.

This allows the new product prices to be retrieved and displayed later, such as in a checkout page. */

// Pillow (countOne)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countOne = localStorage.getItem("countOne");
  var priceDiv = document.querySelector(".product-price-inline_pillow");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countOne * price;
  localStorage.setItem("pillow_price_buyNow", newProductPrice.toFixed(2));
});

// Car (countTwo)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countTwo = localStorage.getItem("countTwo");
  var priceDiv = document.querySelector(".product-price-inline_car");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countTwo * price;
  localStorage.setItem("car_price_buyNow", newProductPrice.toFixed(2));
});

// Camera (countThree)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countThree = localStorage.getItem("countThree");
  var priceDiv = document.querySelector(".product-price-inline_camera");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countThree * price;
  localStorage.setItem("camera_price_buyNow", newProductPrice.toFixed(2));
});

// Potato Head (countFour)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countFour = localStorage.getItem("countFour");
  var priceDiv = document.querySelector(".product-price-inline_potatoHead");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countFour * price;
  localStorage.setItem("potatoHead_price_buyNow", newProductPrice.toFixed(2));
});

// Makeup One (countFive)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countFive = localStorage.getItem("countFive");
  var priceDiv = document.querySelector(".product-price-inline_makeupOne");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countFive * price;
  localStorage.setItem("makeupOne_price_buyNow", newProductPrice.toFixed(2));
});

// Beats by Dre (countSix)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countSix = localStorage.getItem("countSix");
  var priceDiv = document.querySelector(".product-price-inline_beats");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countSix * price;
  localStorage.setItem("beats_price_buyNow", newProductPrice.toFixed(2));
});

// JBL Speaker (countSeven)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countSeven = localStorage.getItem("countSeven");
  var priceDiv = document.querySelector(".product-price-inline_jbl");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countSeven * price;
  localStorage.setItem("jbl_price_buyNow", newProductPrice.toFixed(2));
});

// Simon Rabbit (countEight)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countEight = localStorage.getItem("countEight");
  var priceDiv = document.querySelector(".product-price-inline_simon");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countEight * price;
  localStorage.setItem("simon_price_buyNow", newProductPrice.toFixed(2));
});

// Truth Hoodie (countNine)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countNine = localStorage.getItem("countNine");
  var priceDiv = document.querySelector(".product-price-inline_truth");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countNine * price;
  localStorage.setItem("truth_price_buyNow", newProductPrice.toFixed(2));
});

// Makeup Two (countTen)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countTen = localStorage.getItem("countTen");
  var priceDiv = document.querySelector(".product-price-inline_makeupTwo");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countTen * price;
  localStorage.setItem("makeupTwo_price_buyNow", newProductPrice.toFixed(2));
});

// Automotive Degreaser (countEleven)
document.getElementById("buy-now-wrap").addEventListener("click", function () {
  var countEleven = localStorage.getItem("countEleven");
  var priceDiv = document.querySelector(".product-price-inline_degreaser");
  var price = "";
  var priceDigits = priceDiv.querySelectorAll("span");
  priceDigits.forEach(function (digit) {
    price += digit.textContent;
  });
  price = parseFloat(price.replace("$", ""));
  var newProductPrice = countEleven * price;
  localStorage.setItem("degreaser_price_buyNow", newProductPrice.toFixed(2));
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
 */

/**
Sets the buy-now price for the current product in local storage when the #buy-now-wrap element is clicked.

This updates the subtotal on the buy-now checkout page to reflect the selected quantity.

The code checks the current URL to determine which product is being purchased and updates the corresponding price in local storage. 
*/

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  if (window.location.href.includes("degreaser")) {
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "degreaser_price_buyNow",
      document.getElementById("degreaser_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("beatsbydre")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "beats_price_buyNow",
      document.getElementById("beats_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("jblPartybox")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "jbl_price_buyNow",
      document.getElementById("jbl_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("makeupOne")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "makeupOne_price_buyNow",
      document.getElementById("makeupOne_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("makeupTwo")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "makeupTwo_price_buyNow",
      document.getElementById("makeupTwo_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("potatoHead")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "potatoHead_price_buyNow",
      document.getElementById("potatoHead_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("camera")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "camera_price_buyNow",
      document.getElementById("camera_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("pillow")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "pillow_price_buyNow",
      document.getElementById("pillow_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("car")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "car_price_buyNow",
      document.getElementById("car_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("simon")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("truth_price_buyNow");
    localStorage.setItem(
      "simon_price_buyNow",
      document.getElementById("simon_price_buyNow").innerHTML
    );
  } else if (window.location.href.includes("truth")) {
    localStorage.removeItem("degreaser_price_buyNow");
    localStorage.removeItem("beats_price_buyNow");
    localStorage.removeItem("jbl_price_buyNow");
    localStorage.removeItem("makeupOne_price_buyNow");
    localStorage.removeItem("makeupTwo_price_buyNow");
    localStorage.removeItem("potatoHead_price_buyNow");
    localStorage.removeItem("camera_price_buyNow");
    localStorage.removeItem("pillow_price_buyNow");
    localStorage.removeItem("car_price_buyNow");
    localStorage.removeItem("simon_price_buyNow");
    localStorage.setItem(
      "truth_price_buyNow",
      document.getElementById("truth_price_buyNow").innerHTML
    );
  }
  // I have to put this here or else when any _price_buyNow is added to localstorage [truth and simon]_price_buyNow remains. This ensure when any _price_buyNow is added to localstorage truth_pirce_buyNow is removed.
  if (
    localStorage.getItem("degreaser_price_buyNow") ||
    localStorage.getItem("beats_price_buyNow") ||
    localStorage.getItem("jbl_price_buyNow") ||
    localStorage.getItem("makeupOne_price_buyNow") ||
    localStorage.getItem("makeupTwo_price_buyNow") ||
    localStorage.getItem("potatoHead_price_buyNow") ||
    localStorage.getItem("camera_price_buyNow") ||
    localStorage.getItem("pillow_price_buyNow") ||
    localStorage.getItem("car_price_buyNow") ||
    localStorage.getItem("simon_price_buyNow")
  ) {
    localStorage.removeItem("truth_price_buyNow");
  }
  if (
    localStorage.getItem("degreaser_price_buyNow") ||
    localStorage.getItem("beats_price_buyNow") ||
    localStorage.getItem("jbl_price_buyNow") ||
    localStorage.getItem("makeupOne_price_buyNow") ||
    localStorage.getItem("makeupTwo_price_buyNow") ||
    localStorage.getItem("potatoHead_price_buyNow") ||
    localStorage.getItem("camera_price_buyNow") ||
    localStorage.getItem("pillow_price_buyNow") ||
    localStorage.getItem("car_price_buyNow") ||
    localStorage.getItem("truth_price_buyNow")
  ) {
    localStorage.removeItem("simon_price_buyNow");
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
 *
 *
 */

/** *
When the user clicks the "Buy now" button on the shopping page, depending on the deal the item has, the price is stored in localStorage as either "_reg_TEMP", "_fiftyOff_TEMP", "_underTwo_TEMP", or "_superDeals_TEMP". Each of these names in localStorage holds a price based on their respective deals, so when the buyNow_checkOut page appears, this specific key and price in localStorage will match the item deal for the "Buy now" feature.
*/

// Pillow (countOne)
const pillowPaths = {
  "/Item_Pages/pillow.html": "reg",
  "/Item_Pages/fiftyOff_items/pillow_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/pillow_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/pillow_superDeals.html": "superDeals",
};

const pillowPrices = {
  pillow_price_buyNow_reg_TEMP: "23.50",
  pillow_price_buyNow_fiftyOff_TEMP: "11.75",
  pillow_price_buyNow_underTwo_TEMP: "3.68",
  pillow_price_buyNow_superDeals_TEMP: "9.40",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = pillowPaths[path];
  if (key) {
    const fullKey = `pillow_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "pillow_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("pillow_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, pillowPrices[fullKey]);
  }
});

// Car (countTwo)
const carPaths = {
  "/Item_Pages/rcRaceCar.html": "reg",
  "/Item_Pages/fiftyOff_items/rcRaceCar_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/rcRaceCar_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/rcRaceCar_superDeals.html": "superDeals",
};

const carPrices = {
  car_price_buyNow_reg_TEMP: "39.97",
  car_price_buyNow_fiftyOff_TEMP: "19.99",
  car_price_buyNow_underTwo_TEMP: "9.99",
  car_price_buyNow_superDeals_TEMP: "14.79",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = carPaths[path];
  if (key) {
    const fullKey = `car_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "car_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("car_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, carPrices[fullKey]);
  }
});

// Camera (countThree)
const cameraPaths = {
  "/Item_Pages/olympusCamera.html": "reg",
  "/Item_Pages/fiftyOff_items/olympusCamera_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/olympusCamera_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/olympusCamera_superDeals.html": "superDeals",
};

const cameraPrices = {
  camera_price_buyNow_reg_TEMP: "269.99",
  camera_price_buyNow_fiftyOff_TEMP: "135.00",
  camera_price_buyNow_underTwo_TEMP: "5.77",
  camera_price_buyNow_superDeals_TEMP: "113.40",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = cameraPaths[path];
  if (key) {
    const fullKey = `camera_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "camera_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("camera_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, cameraPrices[fullKey]);
  }
});

// Potato Head (countFour)
const potatoHeadPaths = {
  "/Item_Pages/mrPotatoHead.html": "reg",
  "/Item_Pages/fiftyOff_items/mrPotatoHead_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/mrPotatoHead_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/mrPotatoHead_superDeals.html": "superDeals",
};

const potatoHeadPrices = {
  potatoHead_price_buyNow_reg_TEMP: "17.98",
  potatoHead_price_buyNow_fiftyOff_TEMP: "8.99",
  potatoHead_price_buyNow_underTwo_TEMP: "5.99",
  potatoHead_price_buyNow_superDeals_TEMP: "5.39",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = potatoHeadPaths[path];
  if (key) {
    const fullKey = `potatoHead_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "potatoHead_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("potatoHead_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, potatoHeadPrices[fullKey]);
  }
});

// Makeup One (countFive)
const makeupOnePaths = {
  "/Item_Pages/makeup.html": "reg",
  "/Item_Pages/fiftyOff_items/makeup_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/makeup_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/makeup_superDeals.html": "superDeals",
};

const makeupOnePrices = {
  makeupOne_price_buyNow_reg_TEMP: "23.88",
  makeupOne_price_buyNow_fiftyOff_TEMP: "11.94",
  makeupOne_price_buyNow_underTwo_TEMP: "1.97",
  makeupOne_price_buyNow_superDeals_TEMP: "9.31",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = makeupOnePaths[path];
  if (key) {
    const fullKey = `makeupOne_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "makeupOne_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("makeupOne_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, makeupOnePrices[fullKey]);
  }
});

const beatsByDrePaths = {
  "/Item_Pages/beatsbydre.html": "reg",
  "/Item_Pages/fiftyOff_items/beatsbydre_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/beatsbydre_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/beatsbydre_superDeals.html": "superDeals",
};

const beatsByDrePrices = {
  beats_price_buyNow_reg_TEMP: "149.95",
  beats_price_buyNow_fiftyOff_TEMP: "74.98",
  beats_price_buyNow_underTwo_TEMP: "9.95",
  beats_price_buyNow_superDeals_TEMP: "61.48",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = beatsByDrePaths[path];
  if (key) {
    const fullKey = `beats_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "beats_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("beats_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, beatsByDrePrices[fullKey]);
  }
});

// JBL (countSeven)
const jblPaths = {
  "/Item_Pages/jblPartybox.html": "reg",
  "/Item_Pages/fiftyOff_items/jblPartybox_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/jblPartybox_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/jblPartybox_superDeals.html": "superDeals",
};

const jblPrices = {
  jbl_price_buyNow_reg_TEMP: "382.93",
  jbl_price_buyNow_fiftyOff_TEMP: "191.47",
  jbl_price_buyNow_underTwo_TEMP: "9.99",
  jbl_price_buyNow_superDeals_TEMP: "179.98",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = jblPaths[path];
  if (key) {
    const fullKey = `jbl_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "jbl_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("jbl_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, jblPrices[fullKey]);
  }
});

// Simon Rabbit (countEight)
const simonRabbitPaths = {
  "/Item_Pages/simonRabbit.html": "reg",
  "/Item_Pages/fiftyOff_items/simonRabbit_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/simonRabbit_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/simonRabbit_superDeals.html": "superDeals",
};

const simonRabbitPrices = {
  simon_price_buyNow_reg_TEMP: "24.99",
  simon_price_buyNow_fiftyOff_TEMP: "12.50",
  simon_price_buyNow_underTwo_TEMP: "2.83",
  simon_price_buyNow_superDeals_TEMP: "8.50",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = simonRabbitPaths[path];
  if (key) {
    const fullKey = `simon_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "simon_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("simon_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, simonRabbitPrices[fullKey]);
  }
});

// Truth Hoodie (countNine)
const truthHoodiePaths = {
  "/Item_Pages/truthHoodie.html": "reg",
  "/Item_Pages/fiftyOff_items/truthHoodie_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/truthHoodie_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/truthHoodie_superDeals.html": "superDeals",
};

const truthHoodiePrices = {
  truth_price_buyNow_reg_TEMP: "49.95",
  truth_price_buyNow_fiftyOff_TEMP: "24.98",
  truth_price_buyNow_underTwo_TEMP: "4.99",
  truth_price_buyNow_superDeals_TEMP: "17.98",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = truthHoodiePaths[path];
  if (key) {
    const fullKey = `truth_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "truth_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("truth_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, truthHoodiePrices[fullKey]);
  }
});

// Makeup Two (countTen)
const makeupTwoPaths = {
  "/Item_Pages/makeupTwo.html": "reg",
  "/Item_Pages/fiftyOff_items/makeupTwo_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/makeupTwo_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/makeupTwo_superDeals.html": "superDeals",
};

const makeupTwoPrices = {
  makeupTwo_price_buyNow_reg_TEMP: "17.09",
  makeupTwo_price_buyNow_fiftyOff_TEMP: "8.55",
  makeupTwo_price_buyNow_underTwo_TEMP: "2.74",
  makeupTwo_price_buyNow_superDeals_TEMP: "7.69",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = makeupTwoPaths[path];
  if (key) {
    const fullKey = `makeupTwo_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "makeupTwo_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (storageKey.startsWith("makeupTwo_price_buyNow")) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, makeupTwoPrices[fullKey]);
  }
});

// Automotive Degreaser (countEleven)
const automotiveDegreaserPaths = {
  "/Item_Pages/automotiveDegreaser.html": "reg",
  "/Item_Pages/fiftyOff_items/automotiveDegreaser_fiftyOff.html": "fiftyOff",
  "/Item_Pages/underTwo_items/automotiveDegreaser_underTwo.html": "underTwo",
  "/Item_Pages/superDeals_items/automotiveDegreaser_superDeals.html":
    "superDeals",
};

const automotiveDegreaserPrices = {
  degreaser_price_buyNow_reg_TEMP: "8.98",
  degreaser_price_buyNow_fiftyOff_TEMP: "4.49",
  degreaser_price_buyNow_underTwo_TEMP: "1.99",
  degreaser_price_buyNow_superDeals_TEMP: "4.40",
};

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const path = window.location.pathname;
  const key = automotiveDegreaserPaths[path];
  if (key) {
    const fullKey = `degreaser_price_buyNow_${key}_TEMP`;
    // remove all items from local storage that start with "degreaser_price_buyNow"
    // except for the current key
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      if (
        storageKey.startsWith("degreaser_price_buyNow") &&
        storageKey !== fullKey
      ) {
        localStorage.removeItem(storageKey);
      }
    }
    Object.keys(localStorage).forEach((key) => {
      if (key.includes("price_buyNow")) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(fullKey, automotiveDegreaserPrices[fullKey]);
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
Saves product quantity to local storage when "Buy now" is clicked (works for all products).

When a user clicks the "Buy now" button on a product page, this code adds the product quantity to local storage as a key-value pair, where the key is "count[number]" and the value is the quantity.

Example: If the product quantity is 2, clicking "Buy now" will store the value 2 in local storage under the key "count[number]_TEMP". 
*/

document.getElementById("buy-now-wrap").addEventListener("click", function () {
  const productCountElements = document.querySelectorAll(
    '[id^="productCount"]'
  );
  productCountElements.forEach((element) => {
    const count = element.textContent;
    const keyTemp = `count${element.id.replace("productCount", "")}_TEMP`;
    const key = `count${element.id.replace("productCount", "")}`;
    // Store both keys without overriding or deleting each other
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, count);
    }
    localStorage.setItem(keyTemp, count);
  });
});

/**
 * This function is responsible for updating the count of a specific product in the cart.
 * It checks if the browser supports the Web Storage API and retrieves the current count for the given product from localStorage.
 * If the count doesn't exist, it sets it to 0.
 * If the count is currently 0, it sets it to 1 and stores it in localStorage.
 * It defines an array of product keys and calculates the total count by summing up the counts for all products.
 * Finally, it updates the HTML element with the id "cart-number" with the total count.
 * The function is called when the page loads.
 */
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
  }
}

window.addEventListener("load", clickCounter);

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

/**

Product Add-on Management

This code handles the addition of product add-ons to the shopping cart page.

When a product add-on is clicked, its title, price, and count are stored in localStorage.

To prevent duplicate additions, the count for each product is capped at 1, ensuring that the quantity on the shopping cart page is not incremented when the same product is added multiple times.

The stored values are then used to display the selected add-ons on the shopping cart page. 

*/

// Pillow (updated version)
const addOnIconPillows = document.querySelectorAll(
  ".add-on-icon-pillow, .add-on-icon-pillow-row-c, .add-on-icon-pillow-row-d, .add-to-cart-pillow_reg, .add-to-cart-pillow_fiftyOff, .add-to-cart-pillow_underTwo, .add-to-cart-pillow_superDeals, .product-page-add-on-icon-pillow"
);

const pillow_deal_prices = {
  reg: "$23.50",
  fiftyOff: "$11.75",
  underTwo: "$3.68",
  superDeals: "$9.40",
};

addOnIconPillows.forEach((addOnIconPillow) => {
  addOnIconPillow.addEventListener("click", () => {
    if (addOnIconPillow.classList.contains("add-on-icon-pillow-row-c")) {
      // Special case for `.add-on-icon-pillow-row-c`
      localStorage.setItem(
        "productTitleOne",
        "Basics Down Alternative Bed Pillow, Medium Density for Back and Side Sleepers, Standard, 26 x 20 Inch - Pack of 2, White"
      );
      localStorage.setItem("productPriceOne_superDeals", "$9.40");
      localStorage.setItem("productPriceOne_superDeals_subtotal", "9.40");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconPillow.classList.contains(
        "add-to-cart-pillow_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconPillow.classList.contains("add-to-cart-pillow_underTwo")
        ? "underTwo"
        : addOnIconPillow.classList.contains("add-to-cart-pillow_superDeals")
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleOne",
        "Basics Down Alternative Bed Pillow, Medium Density for Back and Side Sleepers, Standard, 26 x 20 Inch - Pack of 2, White"
      );
      localStorage.setItem(
        `productPriceOne_${priceKey}`,
        pillow_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countOne")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countOne", "1");
    }
    showAdded(addOnIconPillow);
    updateImagePillow();
  });
});

// RC Car (updated version)
const addOnIconRCCars = document.querySelectorAll(
  ".add-on-icon-rccar, .add-on-icon-rccar-row-c, .add-on-icon-rccar-row-d, .add-to-cart-car_reg, .add-to-cart-car_fiftyOff, .add-to-cart-car_underTwo, .add-to-cart-car_superDeals, .product-page-add-on-icon-rccar"
);

const car_deal_prices = {
  reg: "$39.97",
  fiftyOff: "$19.99",
  underTwo: "$9.99",
  superDeals: "$14.79",
};

addOnIconRCCars.forEach((addOnIconRCCar) => {
  addOnIconRCCar.addEventListener("click", () => {
    if (addOnIconRCCar.classList.contains("add-on-icon-rccar-row-c")) {
      // Special case for `.add-on-icon-rccar-row-c`
      localStorage.setItem(
        "productTitleTwo",
        "Adventure Force Radio Control 1:8 Trail Chaser Buggy, Green"
      );
      localStorage.setItem("productPriceTwo_superDeals", "$14.79");
      localStorage.setItem("productPriceTwo_superDeals_subtotal", "14.79");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconRCCar.classList.contains(
        "add-to-cart-car_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconRCCar.classList.contains("add-to-cart-car_underTwo")
        ? "underTwo"
        : addOnIconRCCar.classList.contains("add-to-cart-car_superDeals")
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleTwo",
        "Adventure Force Radio Control 1:8 Trail Chaser Buggy, Green"
      );
      localStorage.setItem(
        `productPriceTwo_${priceKey}`,
        car_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countTwo")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countTwo", "1");
    }
    showAdded(addOnIconRCCar);
    updateImageRCCar();
  });
});

// Camera (updated version)
const addOnIconCameras = document.querySelectorAll(
  ".add-on-icon-camera, .add-on-icon-camera-row-c, .add-on-icon-camera-row-d, .add-to-cart-camera_reg, .add-to-cart-camera_fiftyOff, .add-to-cart-camera_underTwo, .add-to-cart-camera_superDeals, .product-page-add-on-icon-camera"
);

const camera_deal_prices = {
  reg: "$269.99",
  fiftyOff: "$135.00",
  underTwo: "$5.77",
  superDeals: "$113.40",
};

addOnIconCameras.forEach((addOnIconCamera) => {
  addOnIconCamera.addEventListener("click", () => {
    if (addOnIconCamera.classList.contains("add-on-icon-camera-row-c")) {
      // Special case for `.add-on-icon-camera-row-c`
      localStorage.setItem(
        "productTitleThree",
        "Olympus OM-1 | 35mm Film Camera"
      );
      localStorage.setItem("productPriceThree_superDeals", "$113.40");
      localStorage.setItem("productPriceThree_superDeals_subtotal", "113.40");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconCamera.classList.contains(
        "add-to-cart-camera_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconCamera.classList.contains("add-to-cart-camera_underTwo")
        ? "underTwo"
        : addOnIconCamera.classList.contains("add-to-cart-camera_superDeals")
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleThree",
        "Olympus OM-1 | 35mm Film Camera"
      );
      localStorage.setItem(
        `productPriceThree_${priceKey}`,
        camera_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countThree")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countThree", "1");
    }
    showAdded(addOnIconCamera);
    updateImageCamera();
  });
});

// Potato Head (updated version)
const addOnIconPotatoHeads = document.querySelectorAll(
  ".add-on-icon-potatohead, .add-on-icon-potatohead-row-c, .add-on-icon-potatohead-row-d, .add-to-cart-potatoHead_reg, .add-to-cart-potatoHead_fiftyOff, .add-to-cart-potatoHead_underTwo, .add-to-cart-potatoHead_superDeals, .product-page-add-on-icon-potatohead"
);

const potatoHead_deal_prices = {
  reg: "$17.98",
  fiftyOff: "$8.99",
  underTwo: "$5.99",
  superDeals: "$5.39",
};

addOnIconPotatoHeads.forEach((addOnIconPotatoHead) => {
  addOnIconPotatoHead.addEventListener("click", () => {
    if (
      addOnIconPotatoHead.classList.contains("add-on-icon-potatohead-row-c")
    ) {
      // Special case for `.add-on-icon-potatohead-row-c`
      localStorage.setItem(
        "productTitleFour",
        "New Mr. Potato Head Playskool Egg Head Toy Fun Assembled Gift Figure Collection Hobby Mrs Potatoes The Joker Surprise Gifts Doll"
      );
      localStorage.setItem("productPriceFour_superDeals", "$5.39");
      localStorage.setItem("productPriceFour_superDeals_subtotal", "5.39");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconPotatoHead.classList.contains(
        "add-to-cart-potatoHead_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconPotatoHead.classList.contains(
            "add-to-cart-potatoHead_underTwo"
          )
        ? "underTwo"
        : addOnIconPotatoHead.classList.contains(
            "add-to-cart-potatoHead_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleFour",
        "New Mr. Potato Head Playskool Egg Head Toy Fun Assembled Gift Figure Collection Hobby Mrs Potatoes The Joker Surprise Gifts Doll"
      );
      localStorage.setItem(
        `productPriceFour_${priceKey}`,
        potatoHead_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countFour")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countFour", "1");
    }
    showAdded(addOnIconPotatoHead);
    updateImagePotatoHead();
  });
});

// Makeup One (updated version)
const addOnIconMakeupOnes = document.querySelectorAll(
  ".add-on-icon-makeupone, .add-on-icon-makeupone-row-c, .add-on-icon-makeupone-row-d, .add-to-cart-makeupOne_reg, .add-to-cart-makeupOne_fiftyOff, .add-to-cart-makeupOne_underTwo, .add-to-cart-makeupOne_superDeals, .product-page-add-on-icon-makeupone"
);

const makeupOne_deal_prices = {
  reg: "$23.88",
  fiftyOff: "$11.94",
  underTwo: "$1.97",
  superDeals: "$9.31",
};

addOnIconMakeupOnes.forEach((addOnIconMakeupOne) => {
  addOnIconMakeupOne.addEventListener("click", () => {
    if (addOnIconMakeupOne.classList.contains("add-on-icon-makeupone-row-c")) {
      // Special case for `.add-on-icon-makeupone-row-c`
      localStorage.setItem(
        "productTitleFive",
        "All In One Makeup Kit 12 Colors Naked Eyeshadow Palette, Makeup Brush, Buff Beige Foundation, Vibely Mascara, Liquid Lipstick, Makeup Sponge, Eyebrow Soap Kit, Winged Eyeliner Stamp, Makeup Sets for Women Full Kit (Set B)"
      );
      localStorage.setItem("productPriceFive_superDeals", "$9.31");
      localStorage.setItem("productPriceFive_superDeals_subtotal", "9.31");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconMakeupOne.classList.contains(
        "add-to-cart-makeupOne_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconMakeupOne.classList.contains(
            "add-to-cart-makeupOne_underTwo"
          )
        ? "underTwo"
        : addOnIconMakeupOne.classList.contains(
            "add-to-cart-makeupOne_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleFive",
        "All In One Makeup Kit 12 Colors Naked Eyeshadow Palette, Makeup Brush, Buff Beige Foundation, Vibely Mascara, Liquid Lipstick, Makeup Sponge, Eyebrow Soap Kit, Winged Eyeliner Stamp, Makeup Sets for Women Full Kit (Set B)"
      );
      localStorage.setItem(
        `productPriceFive_${priceKey}`,
        makeupOne_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countFive")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countFive", "1");
    }
    showAdded(addOnIconMakeupOne);
    updateImageMakeupOne();
  });
});

// Beats by Dre (updated version)
const addOnIconBeatsByDres = document.querySelectorAll(
  ".add-on-icon-beatsbydre, .add-on-icon-beatsbydre-row-c, .add-on-icon-beatsbydre-row-d, .add-to-cart-beats_reg, .add-to-cart-beats_fiftyOff, .add-to-cart-beats_underTwo, .add-to-cart-beats_superDeals, .product-page-add-on-icon-beatsbydre"
);

const beatsByDre_deal_prices = {
  reg: "$149.95",
  fiftyOff: "$74.98",
  underTwo: "$9.95",
  superDeals: "$61.48",
};

addOnIconBeatsByDres.forEach((addOnIconBeatsByDre) => {
  addOnIconBeatsByDre.addEventListener("click", () => {
    if (
      addOnIconBeatsByDre.classList.contains("add-on-icon-beatsbydre-row-c")
    ) {
      // Special case for `.add-on-icon-beatsbydre-row-c`
      localStorage.setItem(
        "productTitleSix",
        "Beats by Dr. Dre Beats Solo3 Wireless On-Ear Headphones ((PRODUCT)RED Citrus Red / Icon)"
      );
      localStorage.setItem("productPriceSix_superDeals", "$61.48");
      localStorage.setItem("productPriceSix_superDeals_subtotal", "61.48");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconBeatsByDre.classList.contains(
        "add-to-cart-beats_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconBeatsByDre.classList.contains("add-to-cart-beats_underTwo")
        ? "underTwo"
        : addOnIconBeatsByDre.classList.contains("add-to-cart-beats_superDeals")
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleSix",
        "Beats by Dr. Dre Beats Solo3 Wireless On-Ear Headphones ((PRODUCT)RED Citrus Red / Icon)"
      );
      localStorage.setItem(
        `productPriceSix_${priceKey}`,
        beatsByDre_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countSix")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countSix", "1");
    }
    showAdded(addOnIconBeatsByDre);
    updateImageBeatsByDre();
  });
});

// JBL Speaker (updated version)
const addOnIconJBLspeakers = document.querySelectorAll(
  ".add-on-icon-jblspeaker, .add-on-icon-jblspeaker-row-c, .add-on-icon-jblspeaker-row-d, .add-to-cart-jbl_reg, .add-to-cart-jbl_fiftyOff, .add-to-cart-jbl_underTwo, .add-to-cart-jbl_superDeals, .product-page-add-on-icon-jblspeaker"
);

const jblSpeaker_deal_prices = {
  reg: "$382.93",
  fiftyOff: "$191.47",
  underTwo: "$9.99",
  superDeals: "$179.98",
};

addOnIconJBLspeakers.forEach((addOnIconJBLspeaker) => {
  addOnIconJBLspeaker.addEventListener("click", () => {
    if (
      addOnIconJBLspeaker.classList.contains("add-on-icon-jblspeaker-row-c")
    ) {
      // Special case for `.add-on-icon-jblspeaker-row-c`
      localStorage.setItem(
        "productTitleSeven",
        "JBL 100% Original Partybox Encore Essential Wireless Bluetooth Speaker Portable 100W Sound Built-In Dynamic Light Show"
      );
      localStorage.setItem("productPriceSeven_superDeals", "$179.98");
      localStorage.setItem("productPriceSeven_superDeals_subtotal", "179.98");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconJBLspeaker.classList.contains(
        "add-to-cart-jbl_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconJBLspeaker.classList.contains("add-to-cart-jbl_underTwo")
        ? "underTwo"
        : addOnIconJBLspeaker.classList.contains("add-to-cart-jbl_superDeals")
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleSeven",
        "JBL 100% Original Partybox Encore Essential Wireless Bluetooth Speaker Portable 100W Sound Built-In Dynamic Light Show"
      );
      localStorage.setItem(
        `productPriceSeven_${priceKey}`,
        jblSpeaker_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countSeven")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countSeven", "1");
    }
    showAdded(addOnIconJBLspeaker);
    updateImageJBLspeaker();
  });
});

// Simon Rabbit (updated version)
const addOnIconSimonRabbits = document.querySelectorAll(
  ".add-on-icon-simonrabbit, .add-on-icon-simonrabbit-row-c, .add-on-icon-simonrabbit-row-d, .add-to-cart-simon_reg, .add-to-cart-simon_fiftyOff, .add-to-cart-simon_underTwo, .add-to-cart-simon_superDeals, .product-page-add-on-icon-simonrabbit"
);

const simonRabbit_deal_prices = {
  reg: "$24.99",
  fiftyOff: "$12.50",
  underTwo: "$2.83",
  superDeals: "$8.50",
};

addOnIconSimonRabbits.forEach((addOnIconSimonRabbit) => {
  addOnIconSimonRabbit.addEventListener("click", () => {
    if (
      addOnIconSimonRabbit.classList.contains("add-on-icon-simonrabbit-row-c")
    ) {
      // Special case for `.add-on-icon-simonrabbit-row-c`
      localStorage.setItem(
        "productTitleEight",
        "Simon – Plush toy Rabbit Simon Quality super soft (11’41″/29cm, SUPER HERO)"
      );
      localStorage.setItem("productPriceEight_superDeals", "$8.50");
      localStorage.setItem("productPriceEight_superDeals_subtotal", "8.50");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconSimonRabbit.classList.contains(
        "add-to-cart-simon_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconSimonRabbit.classList.contains("add-to-cart-simon_underTwo")
        ? "underTwo"
        : addOnIconSimonRabbit.classList.contains(
            "add-to-cart-simon_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleEight",
        "Simon – Plush toy Rabbit Simon Quality super soft (11’41″/29cm, SUPER HERO)"
      );
      localStorage.setItem(
        `productPriceEight_${priceKey}`,
        simonRabbit_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countEight")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countEight", "1");
    }
    showAdded(addOnIconSimonRabbit);
    updateImageSimonRabbit();
  });
});

// Truth Hoodie (updated version)
const addOnIconTruthHoodies = document.querySelectorAll(
  ".add-on-icon-truthhoodie, .add-on-icon-truthhoodie-row-c, .add-on-icon-truthhoodie-row-d, .add-to-cart-truth_reg, .add-to-cart-truth_fiftyOff, .add-to-cart-truth_underTwo, .add-to-cart-truth_superDeals, .product-page-add-on-icon-truthhoodie"
);

const truthHoodie_deal_prices = {
  reg: "$49.95",
  fiftyOff: "$24.98",
  underTwo: "$4.99",
  superDeals: "$17.98",
};

addOnIconTruthHoodies.forEach((addOnIconTruthHoodie) => {
  addOnIconTruthHoodie.addEventListener("click", () => {
    if (
      addOnIconTruthHoodie.classList.contains("add-on-icon-truthhoodie-row-c")
    ) {
      // Special case for `.add-on-icon-truthhoodie-row-c`
      localStorage.setItem("productTitleNine", "New York Times Truth Hoodie");
      localStorage.setItem("productPriceNine_superDeals", "$17.98");
      localStorage.setItem("productPriceNine_superDeals_subtotal", "17.98");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconTruthHoodie.classList.contains(
        "add-to-cart-truth_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconTruthHoodie.classList.contains("add-to-cart-truth_underTwo")
        ? "underTwo"
        : addOnIconTruthHoodie.classList.contains(
            "add-to-cart-truth_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem("productTitleNine", "New York Times Truth Hoodie");
      localStorage.setItem(
        `productPriceNine_${priceKey}`,
        truthHoodie_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countNine")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countNine", "1");
    }
    showAdded(addOnIconTruthHoodie);
    updateImageTruthHoodie();
  });
});

// Makeup Two (updated version)
const addOnIconMakeupTwos = document.querySelectorAll(
  ".add-on-icon-makeuptwo, .add-on-icon-makeuptwo-row-c, .add-on-icon-makeuptwo-row-d, .add-to-cart-makeupTwo_reg, .add-to-cart-makeupTwo_fiftyOff, .add-to-cart-makeupTwo_underTwo, .add-to-cart-makeupTwo_superDeals, .product-page-add-on-icon-makeupTwo"
);

const makeupTwo_deal_prices = {
  reg: "$17.09",
  fiftyOff: "$8.55",
  underTwo: "$2.74",
  superDeals: "$7.69",
};

addOnIconMakeupTwos.forEach((addOnIconMakeupTwo) => {
  addOnIconMakeupTwo.addEventListener("click", () => {
    if (addOnIconMakeupTwo.classList.contains("add-on-icon-makeuptwo-row-c")) {
      // Special case for `.add-on-icon-makeuptwo-row-c`
      localStorage.setItem(
        "productTitleTen",
        "Rechoo 99 Colors Eyeshadow Palette, Rainbow Colors Fusion Eyeshadow Palette, Professional Matte Glitter Makeup Pallet, Colorful Powder Long Lasting Eye Shadow"
      );
      localStorage.setItem("productPriceTen_superDeals", "$7.69");
      localStorage.setItem("productPriceTen_superDeals_subtotal", "7.69");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconMakeupTwo.classList.contains(
        "add-to-cart-makeupTwo_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconMakeupTwo.classList.contains(
            "add-to-cart-makeupTwo_underTwo"
          )
        ? "underTwo"
        : addOnIconMakeupTwo.classList.contains(
            "add-to-cart-makeupTwo_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleTen",
        "Rechoo 99 Colors Eyeshadow Palette, Rainbow Colors Fusion Eyeshadow Palette, Professional Matte Glitter Makeup Pallet, Colorful Powder Long Lasting Eye Shadow"
      );
      localStorage.setItem(
        `productPriceTen_${priceKey}`,
        makeupTwo_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countTen")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countTen", "1");
    }
    showAdded(addOnIconMakeupTwo);
    updateImageMakeupTwo();
  });
});

// Degreaser (updated version)
const addOnIconDegreasers = document.querySelectorAll(
  ".add-on-icon-degreaser, .add-on-icon-degreaser-row-c, .add-on-icon-degreaser-row-d, .add-to-cart-degreaser_reg, .add-to-cart-degreaser_fiftyOff, .add-to-cart-degreaser_underTwo, .add-to-cart-degreaser_superDeals, .product-page-add-on-icon-degreaser"
);

const degreaser_deal_prices = {
  reg: "$8.98",
  fiftyOff: "$4.49",
  underTwo: "$1.99",
  superDeals: "$4.40",
};

addOnIconDegreasers.forEach((addOnIconDegreaser) => {
  addOnIconDegreaser.addEventListener("click", () => {
    if (addOnIconDegreaser.classList.contains("add-on-icon-degreaser-row-c")) {
      // Special case for `.add-on-icon-degreaser-row-c`
      localStorage.setItem(
        "productTitleEleven",
        "1 Gal. Max Automotive Cleaner and Degreaser"
      );
      localStorage.setItem("productPriceEleven_superDeals", "$4.40");
      localStorage.setItem("productPriceEleven_superDeals_subtotal", "4.40");
    } else {
      // Default behavior for other classes
      const priceKey = addOnIconDegreaser.classList.contains(
        "add-to-cart-degreaser_fiftyOff"
      )
        ? "fiftyOff"
        : addOnIconDegreaser.classList.contains(
            "add-to-cart-degreaser_underTwo"
          )
        ? "underTwo"
        : addOnIconDegreaser.classList.contains(
            "add-to-cart-degreaser_superDeals"
          )
        ? "superDeals"
        : "reg";

      localStorage.setItem(
        "productTitleEleven",
        "1 Gal. Max Automotive Cleaner and Degreaser"
      );
      localStorage.setItem(
        `productPriceEleven_${priceKey}`,
        degreaser_deal_prices[priceKey]
      );
    }

    const currentCount = parseInt(localStorage.getItem("countEleven")) || 0;
    if (currentCount === 0) {
      localStorage.setItem("countEleven", "1");
    }
    showAdded(addOnIconDegreaser);
    updateImageDegreaser();
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
 */

/**
Saves product quantity to local storage when "Add to cart" is clicked (works for all products).

When a user clicks the "Add to cart" button on a product page, this code adds the product quantity to local storage as a key-value pair, where the key is "count[number]" and the value is the quantity.

Example: If the product quantity is 2, clicking "Add to cart" will store the value 2 in local storage under the key "count[number]". 
*/

document.querySelector(".add-to-cart-wrap").addEventListener("click", () => {
  document.querySelectorAll('[id^="productCount"]').forEach((element) => {
    localStorage.setItem(
      `count${element.id.replace("productCount", "")}`,
      element.textContent
    );
  });
});

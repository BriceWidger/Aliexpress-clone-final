// Update the setURL function to return the inner function directly
function setURL(newUrl) {
  return function () {
    document.getElementById("main-img").setAttribute("src", newUrl);
    document.getElementById("mag-overlay_beats").style.backgroundImage =
      "url('" + newUrl + "')";
    document.getElementById("mag-overlay_beats").style.display = "none";
    document.getElementById("mag-overlay-two_beats").style.display = "none";
  };
}

// Beats by Dre
document
  .getElementById("preview-img-one_beats")
  .addEventListener("mouseover", setURL("/resources/images/beatsbydre.jpg"));
document
  .getElementById("preview-img-two_beats")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/beatsbydre-rightside.jpg")
  );
document
  .getElementById("preview-img-three_beats")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/beatsbydre-side.jpg")
  );
document
  .getElementById("preview-img-four_beats")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/beatsbydre-bottom.jpg")
  );
document
  .getElementById("preview-img-five_beats")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/beatsbydre-case.jpg")
  );

// Make sure to define the zoomIn function
function zoomIn(event) {
  var mainImg = document.getElementById("main-img");
  var containerRect = mainImg.getBoundingClientRect();

  var offsetX = event.clientX - containerRect.left;
  var offsetY = event.clientY - containerRect.top;

  var imageWidth = mainImg.offsetWidth;
  var imageHeight = mainImg.offsetHeight;

  var posX = (offsetX / imageWidth) * 100;
  var posY = (offsetY / imageHeight) * 100;

  var element = document.getElementById("mag-overlay_beats");
  element.style.display = "inline-block";
  element.style.backgroundPosition = posX + "% " + posY + "%";

  var element2 = document.getElementById("mag-overlay-two_beats");
  element2.style.display = "inline-block";
  element2.style.backgroundPosition = posX + "% " + posY + "%";
}

document
  .getElementById("mag-overlay_beats")
  .addEventListener("mousemove", zoomIn);

// Preview-img hover-border-stay effect
function prevImgDecoyFunctionOne_beats() {
  // prevImgDecoyFunctionOne
  // hides img-one and displays img-one-after
  document.getElementById("preview-img-one_beats").style.opacity = "0";
  document.getElementById("preview-img-one-after_beats").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-two-after_beats").style.opacity = "0";
  document.getElementById("preview-img-three-after_beats").style.opacity = "0";
  document.getElementById("preview-img-four-after_beats").style.opacity = "0";
  document.getElementById("preview-img-five-after_beats").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-two_beats").style.opacity = "1";
  document.getElementById("preview-img-three_beats").style.opacity = "1";
  document.getElementById("preview-img-four_beats").style.opacity = "1";
  document.getElementById("preview-img-five_beats").style.opacity = "1";
}
function prevImgDecoyFunctionTwo_beats() {
  // prevImgDecoyFunctionTwo
  // hides img-two and displays img-two-after
  document.getElementById("preview-img-two_beats").style.opacity = "0";
  document.getElementById("preview-img-two-after_beats").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_beats").style.opacity = "0";
  document.getElementById("preview-img-three-after_beats").style.opacity = "0";
  document.getElementById("preview-img-four-after_beats").style.opacity = "0";
  document.getElementById("preview-img-five-after_beats").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_beats").style.opacity = "1";
  document.getElementById("preview-img-three_beats").style.opacity = "1";
  document.getElementById("preview-img-four_beats").style.opacity = "1";
  document.getElementById("preview-img-five_beats").style.opacity = "1";
}
function prevImgDecoyFunctionThree_beats() {
  // prevImgDecoyFunctionThree
  // hides img-three and displays img-three-after
  document.getElementById("preview-img-three_beats").style.opacity = "0";
  document.getElementById("preview-img-three-after_beats").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_beats").style.opacity = "0";
  document.getElementById("preview-img-two-after_beats").style.opacity = "0";
  document.getElementById("preview-img-four-after_beats").style.opacity = "0";
  document.getElementById("preview-img-five-after_beats").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_beats").style.opacity = "1";
  document.getElementById("preview-img-two_beats").style.opacity = "1";
  document.getElementById("preview-img-four_beats").style.opacity = "1";
  document.getElementById("preview-img-five_beats").style.opacity = "1";
}
function prevImgDecoyFunctionFour_beats() {
  // prevImgDecoyFunctionFour
  // hides img-four and displays img-four-after
  document.getElementById("preview-img-four_beats").style.opacity = "0";
  document.getElementById("preview-img-four-after_beats").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_beats").style.opacity = "0";
  document.getElementById("preview-img-two-after_beats").style.opacity = "0";
  document.getElementById("preview-img-three-after_beats").style.opacity = "0";
  document.getElementById("preview-img-five-after_beats").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_beats").style.opacity = "1";
  document.getElementById("preview-img-two_beats").style.opacity = "1";
  document.getElementById("preview-img-three_beats").style.opacity = "1";
  document.getElementById("preview-img-five_beats").style.opacity = "1";
}
function prevImgDecoyFunctionFive_beats() {
  // prevImgDecoyFunctionFive
  // hides img-five and displays img-five-after
  document.getElementById("preview-img-five_beats").style.opacity = "0";
  document.getElementById("preview-img-five-after_beats").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_beats").style.opacity = "0";
  document.getElementById("preview-img-two-after_beats").style.opacity = "0";
  document.getElementById("preview-img-three-after_beats").style.opacity = "0";
  document.getElementById("preview-img-four-after_beats").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_beats").style.opacity = "1";
  document.getElementById("preview-img-two_beats").style.opacity = "1";
  document.getElementById("preview-img-three_beats").style.opacity = "1";
  document.getElementById("preview-img-four_beats").style.opacity = "1";
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

// Robust scroll-based UI logic for product page
document.addEventListener("DOMContentLoaded", function () {
  // Nav Scroll (product-page)
  var prevScrollpos = window.pageYOffset;
  var navProductPage = document.getElementById("whole-nav-product-page");
  window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (navProductPage) {
      if (prevScrollpos > currentScrollPos) {
        navProductPage.style.top = "0";
      } else {
        navProductPage.style.top = "-200px";
      }
    }
    prevScrollpos = currentScrollPos;
  });

  // Action-box-top shows/hides on scroll
  var actionBoxID = document.getElementById("action-box-top-id");
  var myScrollFunc = function () {
    // Re-query in case DOM changes
    var box = document.getElementById("action-box-top-id");
    if (!box) return;
    var y = window.scrollY;
    if (y >= 100) {
      box.className = "action-box-top action-box-top-show";
    } else if (y <= 500) {
      box.className = "action-box-top action-box-top-hide";
    }
  };
  window.addEventListener("scroll", myScrollFunc);
  myScrollFunc(); // Run once on load

  // Adjust .action-box-container on scroll
  var adjustActionBox = function () {
    var actionBox = document.querySelector(".action-box-container");
    if (!actionBox) return;
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      actionBox.style.top = "132.60px";
      actionBox.style.padding = "14px 0 31px 24px";
    } else {
      actionBox.style.top = "0px";
      actionBox.style.padding = "8px 0 31px 24px";
    }
  };
  window.addEventListener("scroll", adjustActionBox);
  adjustActionBox(); // Run once on load
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

This code applies styles to the "+" and "-" button elements.

When a product count is 1, its corresponding minus icon (.quantity-minus-icons-radius-co) is set to 50% opacity and its cursor is changed to "not-allowed" on hover.

When a product count is 1 and the user clicks the plus icon (.quantity-plus-icons-radius-co), the styles are removed. 

*/

function updateIconStyles_productPages(productCount, minusIcon) {
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
  const productCounts = document.querySelectorAll(`#${productCountId}`);
  const plusIcons = document.querySelectorAll(`.${plusIconClass}`);
  const minusIcons = document.querySelectorAll(`.${minusIconClass}`);

  productCounts.forEach((productCount, index) => {
    const plusIcon = plusIcons[index];
    const minusIcon = minusIcons[index];

    updateIconStyles_productPages(productCount, minusIcon);
    productCount.addEventListener("DOMSubtreeModified", () =>
      updateIconStyles_productPages(productCount, minusIcon)
    );

    [plusIcon, minusIcon].forEach((icon) =>
      icon.addEventListener("click", () =>
        updateIconStyles_productPages(productCount, minusIcon)
      )
    );
  });
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

// --- Action Box Toggle Tab/Modal Logic for <=1615px ---
document.addEventListener("DOMContentLoaded", function () {
  var tab = document.getElementById("actionBoxToggleTab");
  var modal = document.getElementById("actionBoxModal");
  var modalContent = document.getElementById("actionBoxModalContent");
  var closeBtn = document.getElementById("actionBoxModalClose");
  var actionBoxContainer = document.querySelector(".action-box-container");

  function checkWidthAndToggleTab() {
    if (window.innerWidth <= 1615) {
      if (tab) tab.style.display = "flex";
      if (actionBoxContainer && actionBoxContainer.parentElement)
        actionBoxContainer.parentElement.style.display = "none";
    } else {
      if (tab) tab.style.display = "none";
      if (modal) modal.classList.remove("open");
      if (actionBoxContainer && actionBoxContainer.parentElement)
        actionBoxContainer.parentElement.style.display = "";
    }
  }

  // --- Modal open/close logic ---
  if (tab) {
    tab.addEventListener("click", function () {
      if (modal && actionBoxContainer) {
        modalContent.innerHTML = "";
        modalContent.appendChild(actionBoxContainer);
        modal.classList.add("open");
        // Re-apply scroll logic for modal
        setupActionBoxScrollLogic(actionBoxContainer);
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) modal.classList.remove("open");
      var originalParent = document.querySelector(".body-wrap-top-right");
      if (originalParent && !originalParent.contains(actionBoxContainer)) {
        originalParent.appendChild(actionBoxContainer);
        setupActionBoxScrollLogic(actionBoxContainer);
      }
    });
  }
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("open");
        var originalParent = document.querySelector(".body-wrap-top-right");
        if (originalParent && !originalParent.contains(actionBoxContainer)) {
          originalParent.appendChild(actionBoxContainer);
          setupActionBoxScrollLogic(actionBoxContainer);
        }
      }
    });
  }
  window.addEventListener("resize", checkWidthAndToggleTab);
  checkWidthAndToggleTab();

  // --- Helper: Setup scroll logic for action box in current parent ---
  function setupActionBoxScrollLogic(container) {
    var actionBoxTop = container.querySelector("#action-box-top-id");
    if (!actionBoxTop) return;
    var myScrollFunc = function () {
      var box = container.querySelector("#action-box-top-id");
      if (!box) return;
      var y = window.scrollY;
      if (y >= 100) {
        box.className = "action-box-top action-box-top-show";
      } else if (y <= 500) {
        box.className = "action-box-top action-box-top-hide";
      }
    };
    window.removeEventListener("scroll", myScrollFunc); // Remove any previous
    window.addEventListener("scroll", myScrollFunc);
    myScrollFunc();

    // Adjust .action-box-container on scroll
    var adjustActionBox = function () {
      var actionBox = container;
      if (!actionBox) return;
      var scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        actionBox.style.top = "132.60px";
        actionBox.style.padding = "14px 0 31px 24px";
      } else {
        actionBox.style.top = "0px";
        actionBox.style.padding = "8px 0 31px 24px";
      }
    };
    window.removeEventListener("scroll", adjustActionBox);
    window.addEventListener("scroll", adjustActionBox);
    adjustActionBox();
  }
  // Initial setup for default location
  setupActionBoxScrollLogic(actionBoxContainer);
});

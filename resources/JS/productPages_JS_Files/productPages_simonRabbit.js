// Update the setURL function to return the inner function directly
function setURL(newUrl) {
  return function () {
    document.getElementById("main-img").setAttribute("src", newUrl);
    document.getElementById("mag-overlay_simon").style.backgroundImage =
      "url('" + newUrl + "')";
    document.getElementById("mag-overlay_simon").style.display = "none";
    document.getElementById("mag-overlay-two_simon").style.display = "none";
  };
}

// Simon Rabbit
document
  .getElementById("preview-img-one_simon")
  .addEventListener("mouseover", setURL("/resources/images/simon-toy.png"));
document
  .getElementById("preview-img-two_simon")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/simon-toy_simon.png")
  );
document
  .getElementById("preview-img-three_simon")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/simon-toy_yellow.png")
  );
document
  .getElementById("preview-img-four_simon")
  .addEventListener(
    "mouseover",
    setURL("/resources/images/simon-toy_super.png")
  );
document
  .getElementById("preview-img-five_simon")
  .addEventListener("mouseover", setURL("/resources/images/simon-toy_box.png"));

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

  var element = document.getElementById("mag-overlay_simon");
  element.style.display = "inline-block";
  element.style.backgroundPosition = posX + "% " + posY + "%";

  var element2 = document.getElementById("mag-overlay-two_simon");
  element2.style.display = "inline-block";
  element2.style.backgroundPosition = posX + "% " + posY + "%";
}

document
  .getElementById("mag-overlay_simon")
  .addEventListener("mousemove", zoomIn);

function prevImgDecoyFunctionOne_simon() {
  // prevImgDecoyFunctionOne_simon
  // hides img-one and displays img-one-after
  document.getElementById("preview-img-one_simon").style.opacity = "0";
  document.getElementById("preview-img-one-after_simon").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-two-after_simon").style.opacity = "0";
  document.getElementById("preview-img-three-after_simon").style.opacity = "0";
  document.getElementById("preview-img-four-after_simon").style.opacity = "0";
  document.getElementById("preview-img-five-after_simon").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-two_simon").style.opacity = "1";
  document.getElementById("preview-img-three_simon").style.opacity = "1";
  document.getElementById("preview-img-four_simon").style.opacity = "1";
  document.getElementById("preview-img-five_simon").style.opacity = "1";
}
function prevImgDecoyFunctionTwo_simon() {
  // prevImgDecoyFunctionTwo_simon
  // hides img-two and displays img-two-after
  document.getElementById("preview-img-two_simon").style.opacity = "0";
  document.getElementById("preview-img-two-after_simon").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_simon").style.opacity = "0";
  document.getElementById("preview-img-three-after_simon").style.opacity = "0";
  document.getElementById("preview-img-four-after_simon").style.opacity = "0";
  document.getElementById("preview-img-five-after_simon").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_simon").style.opacity = "1";
  document.getElementById("preview-img-three_simon").style.opacity = "1";
  document.getElementById("preview-img-four_simon").style.opacity = "1";
  document.getElementById("preview-img-five_simon").style.opacity = "1";
}
function prevImgDecoyFunctionThree_simon() {
  // prevImgDecoyFunctionThree_simon
  // hides img-three and displays img-three-after
  document.getElementById("preview-img-three_simon").style.opacity = "0";
  document.getElementById("preview-img-three-after_simon").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_simon").style.opacity = "0";
  document.getElementById("preview-img-two-after_simon").style.opacity = "0";
  document.getElementById("preview-img-four-after_simon").style.opacity = "0";
  document.getElementById("preview-img-five-after_simon").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_simon").style.opacity = "1";
  document.getElementById("preview-img-two_simon").style.opacity = "1";
  document.getElementById("preview-img-four_simon").style.opacity = "1";
  document.getElementById("preview-img-five_simon").style.opacity = "1";
}
function prevImgDecoyFunctionFour_simon() {
  // prevImgDecoyFunctionFour_simon
  // hides img-four and displays img-four-after
  document.getElementById("preview-img-four_simon").style.opacity = "0";
  document.getElementById("preview-img-four-after_simon").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_simon").style.opacity = "0";
  document.getElementById("preview-img-two-after_simon").style.opacity = "0";
  document.getElementById("preview-img-three-after_simon").style.opacity = "0";
  document.getElementById("preview-img-five-after_simon").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_simon").style.opacity = "1";
  document.getElementById("preview-img-two_simon").style.opacity = "1";
  document.getElementById("preview-img-three_simon").style.opacity = "1";
  document.getElementById("preview-img-five_simon").style.opacity = "1";
}
function prevImgDecoyFunctionFive_simon() {
  // prevImgDecoyFunctionFive_simon
  // hides img-five and displays img-five-after
  document.getElementById("preview-img-five_simon").style.opacity = "0";
  document.getElementById("preview-img-five-after_simon").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_simon").style.opacity = "0";
  document.getElementById("preview-img-two-after_simon").style.opacity = "0";
  document.getElementById("preview-img-three-after_simon").style.opacity = "0";
  document.getElementById("preview-img-four-after_simon").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_simon").style.opacity = "1";
  document.getElementById("preview-img-two_simon").style.opacity = "1";
  document.getElementById("preview-img-three_simon").style.opacity = "1";
  document.getElementById("preview-img-four_simon").style.opacity = "1";
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
  // Nav Scroll (product-page) - Navigation stays visible on scroll
  var prevScrollpos = window.pageYOffset;
  var navProductPage = document.getElementById("whole-nav-product-page");
  window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (navProductPage) {
      // Keep navigation visible at all times
      navProductPage.style.top = "0";
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
 *
 */

/*
    This code adds a scroll event listener to the window. 
 
    It dynamically adjusts the top position and padding of the '.action-box-container' element based on the scroll position. 
 
    When the scroll position is greater than 0, it sets the top position to '62.60px' and padding to '14px 0 31px 24px'. 
    
    Otherwise, it sets the top position to '0px' and padding to '0px 0 31px 24px'.
*/
window.addEventListener("scroll", function () {
  var actionBox = document.querySelector(".action-box-container");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    actionBox.style.top = "132.60px";
    actionBox.style.padding = "14px 0 31px 24px";
  } else {
    actionBox.style.top = "0px";
    actionBox.style.padding = "8px 0 31px 24px";
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
        // Hide the tab when modal is open
        tab.style.display = "none";
        // Re-apply scroll logic for modal
        setupActionBoxScrollLogic(actionBoxContainer);
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) modal.classList.remove("open");
      // Show the tab again when modal is closed (if still <=1615px)
      if (window.innerWidth <= 1615 && tab) tab.style.display = "flex";
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
        // Show the tab again when modal is closed (if still <=1615px)
        if (window.innerWidth <= 1615 && tab) tab.style.display = "flex";
        var originalParent = document.querySelector(".body-wrap-top-right");
        if (originalParent && !originalParent.contains(actionBoxContainer)) {
          originalParent.appendChild(actionBoxContainer);
          setupActionBoxScrollLogic(actionBoxContainer);
        }
      }
    });
  }
  window.addEventListener("resize", function () {
    // If modal is open, close it and restore the action box to its original parent
    if (modal && modal.classList.contains("open")) {
      modal.classList.remove("open");
      if (window.innerWidth <= 1615 && tab) tab.style.display = "flex";
      var originalParent = document.querySelector(".body-wrap-top-right");
      if (originalParent && !originalParent.contains(actionBoxContainer)) {
        originalParent.appendChild(actionBoxContainer);
        setupActionBoxScrollLogic(actionBoxContainer);
      }
    }
    checkWidthAndToggleTab();
  });
  checkWidthAndToggleTab();

  // --- Helper: Setup scroll logic for action box in current parent ---
  function setupActionBoxScrollLogic(container) {
    var actionBoxTop = container.querySelector("#action-box-top-id");
    if (!actionBoxTop) return;
    var myScrollFunc = function () {
      var box = container.querySelector("#action-box-top-id");
      if (!box) return;
      // If inside modal, always show and remove any scroll-triggered effects
      if (box.closest(".action-box-modal-content")) {
        box.className = "action-box-top action-box-top-show";
        box.style.transition = "none"; // Remove any transition effects if present
        return;
      }
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
      // If the action box is inside the modal, always set fixed position and padding
      if (actionBox.closest(".action-box-modal-content")) {
        actionBox.style.top = "132.60px";
        actionBox.style.padding = "14px 0 31px 24px";
        return;
      }
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

// --- Keep modal-cart-number in sync with cart-number ---
document.addEventListener("DOMContentLoaded", function () {
  var cartNumber = document.getElementById("cart-number");
  var modalCartNumber = document.getElementById("modal-cart-number");
  if (!cartNumber || !modalCartNumber) return;

  // Set modal-cart-number color (in case CSS fails)
  modalCartNumber.style.color = "#fd384f";

  // Helper to sync value
  function syncModalCartNumber() {
    modalCartNumber.textContent = cartNumber.textContent;
  }

  // Initial sync
  syncModalCartNumber();

  // Observe changes to cart-number
  var observer = new MutationObserver(syncModalCartNumber);
  observer.observe(cartNumber, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  // Also listen for manual events in case cart-number is updated via JS
  ["input", "change"].forEach(function (evt) {
    cartNumber.addEventListener(evt, syncModalCartNumber);
  });
});

// ===================================
// RECOMMENDED SECTION SCROLL INDICATORS
// ===================================

// Function to instantly hide scroll indicator when user scrolls
function hideScrollIndicatorOnScroll(sliderWrapper, scrollContainer) {
  let isScrolling = false;

  // Function to hide indicator immediately
  function hideIndicator() {
    if (scrollContainer.scrollLeft > 0) {
      sliderWrapper.classList.add("scrolled");
      // Force immediate DOM update for mobile browsers
      sliderWrapper.style.transform = "translateZ(0)";
    } else {
      sliderWrapper.classList.remove("scrolled");
    }
  }

  // Handle all scroll events (including touch on mobile)
  scrollContainer.addEventListener("scroll", hideIndicator, { passive: true });

  // Additional mobile-specific events for better responsiveness
  scrollContainer.addEventListener(
    "touchstart",
    function () {
      isScrolling = true;
    },
    { passive: true }
  );

  scrollContainer.addEventListener(
    "touchmove",
    function () {
      if (isScrolling) {
        hideIndicator();
      }
    },
    { passive: true }
  );

  scrollContainer.addEventListener(
    "touchend",
    function () {
      isScrolling = false;
      // Ensure final state is correct after touch ends
      setTimeout(hideIndicator, 16); // Next frame
    },
    { passive: true }
  );
}

// Initialize scroll indicators for recommended sections
document.addEventListener("DOMContentLoaded", function () {
  // Find slider wrappers and their corresponding scroll containers
  const sliderWrappers = document.querySelectorAll(".slider-wrapper");

  sliderWrappers.forEach((wrapper) => {
    const scrollContainer = wrapper.querySelector(".recommended-imgs-row-wrap");

    if (scrollContainer) {
      hideScrollIndicatorOnScroll(wrapper, scrollContainer);
    }
  });
});

/**
 * ACCOUNT DROPDOWN FUNCTIONALITY
 * Mobile account dropdown functionality specifically for this product page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Function to check if device is touch-enabled (mobile/tablet) or using touch simulation
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0 ||
      // Check for touch simulation in dev tools
      window.TouchEvent !== undefined ||
      // Check for mobile screen size as fallback
      window.innerWidth <= 900
    );
  }

  // Function to check if we're on mobile screen size
  function isMobileScreen() {
    return window.innerWidth <= 900;
  }

  // Function to check if device is iOS Safari
  function isIOSSafari() {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|OPiOS|FxiOS/.test(ua);
    return isIOS && (isSafari || !window.chrome);
  }

  const accDropdown = document.querySelector(".acc-dropdown");
  const accDropbtn = document.querySelector(".acc-dropbtn");
  const accCategoryDropdownTitle = document.querySelector(
    ".acc-category-dropdown-title"
  );
  const accDropdownContent = document.querySelector(".acc-dropdown-content");
  const personAccountIcon = document.querySelector(".person-account-icon");

  if (accDropdown && accDropbtn && accDropdownContent) {
    let isAccDropdownOpen = false;

    // Function to show dropdown (both mobile and desktop)
    function showAccDropdown() {
      accDropdownContent.style.display = "block";
      accDropdown.classList.add("mobile-active");
      isAccDropdownOpen = true;
    }

    // Function to hide dropdown (both mobile and desktop)
    function hideAccDropdown() {
      accDropdownContent.style.display = "none";
      accDropdown.classList.remove("mobile-active");
      isAccDropdownOpen = false;
    }

    // Add mobile functionality for touch devices OR mobile screen sizes
    if (isTouchDevice() || isMobileScreen()) {
      let lastTouchTime = 0;
      
      // Function to handle toggle for mobile with iOS Safari optimization
      function handleMobileToggle(e) {
        e.preventDefault();
        e.stopPropagation();

        if (isAccDropdownOpen) {
          hideAccDropdown();
        } else {
          showAccDropdown();
        }
      }

      // Function to handle touch events with iOS Safari optimization
      function handleTouchToggle(e) {
        const currentTime = Date.now();
        
        // Prevent rapid fire events (debouncing)
        if (currentTime - lastTouchTime < 300) {
          return;
        }
        lastTouchTime = currentTime;

        e.preventDefault();
        e.stopPropagation();

        if (isAccDropdownOpen) {
          hideAccDropdown();
        } else {
          showAccDropdown();
        }
      }

      // Add click event to toggle account dropdown on mobile
      accDropbtn.addEventListener("click", handleMobileToggle);

      // Also add click event to the person account icon specifically for mobile
      if (personAccountIcon) {
        personAccountIcon.addEventListener("click", handleMobileToggle);
      }

      // For iOS Safari, use touchend instead of touchstart for better compatibility
      const touchEvent = isIOSSafari() ? "touchend" : "touchstart";
      
      // Add touch event for better mobile responsiveness
      accDropbtn.addEventListener(touchEvent, handleTouchToggle, { passive: false });

      // Also add touch event to the person account icon specifically for mobile
      if (personAccountIcon) {
        personAccountIcon.addEventListener(touchEvent, handleTouchToggle, { passive: false });
      }

      // Add click event to acc-category-dropdown-title for mobile
      if (accCategoryDropdownTitle) {
        accCategoryDropdownTitle.addEventListener("click", handleMobileToggle);
        accCategoryDropdownTitle.addEventListener(touchEvent, handleTouchToggle, { passive: false });
      }

      // Close account dropdown when clicking outside
      document.addEventListener("click", function (e) {
        if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
          hideAccDropdown();
        }
      });

      // Close account dropdown when touching outside - optimized for iOS Safari
      document.addEventListener(touchEvent, function (e) {
        if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
          hideAccDropdown();
        }
      }, { passive: true });

      // Close account dropdown when a link is clicked
      const accDropdownLinks = accDropdownContent.querySelectorAll("a");
      accDropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.stopPropagation();
          hideAccDropdown();
        });

        link.addEventListener(touchEvent, function (e) {
          e.stopPropagation();
        }, { passive: true });
      });

      // Prevent account dropdown content from closing when clicking inside it
      accDropdownContent.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      accDropdownContent.addEventListener(touchEvent, function (e) {
        e.stopPropagation();
      }, { passive: true });

      // Reset account dropdown when screen size changes
      window.addEventListener("resize", function () {
        hideAccDropdown();
      });
    }
  }
});

// Mobile menu functionality for circle-menu-background_pp
document.addEventListener("DOMContentLoaded", function () {
  const circleMenu = document.querySelector(".circle-menu-background_pp");

  if (circleMenu) {
    let isMenuOpen = false;

    // Function to check if device is touch-enabled (mobile/tablet)
    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }

    // Function to check if device has hover capability
    function hasHoverCapability() {
      return window.matchMedia("(hover: hover)").matches;
    }

    // Add click functionality for ALL touch devices, regardless of screen size
    // This ensures mobile functionality works on tablets, phones, and any touch-enabled device
    if (isTouchDevice()) {
      // Add touchstart and click events for comprehensive mobile support
      circleMenu.addEventListener("touchstart", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Toggle the mobile menu active class
        if (isMenuOpen) {
          circleMenu.classList.remove("mobile-active");
          isMenuOpen = false;
        } else {
          circleMenu.classList.add("mobile-active");
          isMenuOpen = true;
        }
      });

      circleMenu.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Toggle the mobile menu active class
        if (isMenuOpen) {
          circleMenu.classList.remove("mobile-active");
          isMenuOpen = false;
        } else {
          circleMenu.classList.add("mobile-active");
          isMenuOpen = true;
        }
      });

      // Close menu when clicking outside
      document.addEventListener("click", function (e) {
        // Don't close circle menu if clicking on account dropdown elements
        const accDropdown = document.querySelector(".acc-dropdown");
        const isAccountDropdownClick = accDropdown && accDropdown.contains(e.target);
        
        if (isMenuOpen && !circleMenu.contains(e.target) && !isAccountDropdownClick) {
          circleMenu.classList.remove("mobile-active");
          isMenuOpen = false;
        }
      });

      // Close menu when touching outside
      document.addEventListener("touchstart", function (e) {
        // Don't close circle menu if touching account dropdown elements
        const accDropdown = document.querySelector(".acc-dropdown");
        const isAccountDropdownTouch = accDropdown && accDropdown.contains(e.target);
        
        if (isMenuOpen && !circleMenu.contains(e.target) && !isAccountDropdownTouch) {
          circleMenu.classList.remove("mobile-active");
          isMenuOpen = false;
        }
      });

      // Ensure menu box links are clickable
      const menuBox = document.querySelector(".circle-menu-hover-box");
      if (menuBox) {
        menuBox.addEventListener("click", function (e) {
          e.stopPropagation();
        });

        menuBox.addEventListener("touchstart", function (e) {
          e.stopPropagation();
        });
      }
    }
  }
});

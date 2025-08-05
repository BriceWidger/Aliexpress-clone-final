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

// ===================================
// SHOPPING CART EMPTY - SCROLL INDICATORS
// ===================================

// Function to instantly hide scroll indicator when user scrolls (for shopping cart empty page)
function hideScrollIndicatorOnScrollSCE(sliderWrapper, scrollContainer) {
  let isScrolling = false;
  let scrollTimeout = null;
  let initialScrollLeft = 0;
  let hasScrolled = false;

  // Function to hide indicator with optimized performance
  function hideIndicator() {
    // Use requestAnimationFrame for smooth DOM updates
    requestAnimationFrame(() => {
      if (scrollContainer.scrollLeft > 0) {
        if (!sliderWrapper.classList.contains("scrolled")) {
          sliderWrapper.classList.add("scrolled");
        }
      } else {
        if (sliderWrapper.classList.contains("scrolled")) {
          sliderWrapper.classList.remove("scrolled");
        }
      }
    });
  }

  // Throttled version for scroll events to prevent excessive calls
  function throttledHideIndicator() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(hideIndicator, 8); // Reduced timeout for responsiveness
  }

  // Handle scroll events with throttling
  scrollContainer.addEventListener("scroll", throttledHideIndicator, {
    passive: true,
  });

  // Mobile touch events - improved to prevent scroll blocking
  scrollContainer.addEventListener(
    "touchstart",
    function (e) {
      isScrolling = true;
      initialScrollLeft = scrollContainer.scrollLeft;
      hasScrolled = false;
      // Allow natural touch scrolling behavior
    },
    { passive: true }
  );

  scrollContainer.addEventListener(
    "touchmove",
    function (e) {
      if (isScrolling) {
        // Check if we've actually scrolled beyond initial position
        if (Math.abs(scrollContainer.scrollLeft - initialScrollLeft) > 5) {
          hasScrolled = true;
          throttledHideIndicator();
        }
      }
    },
    { passive: true }
  );

  scrollContainer.addEventListener(
    "touchend",
    function () {
      isScrolling = false;
      // Ensure final state is correct after touch ends
      setTimeout(() => {
        hideIndicator();
        // Reset scroll behavior if user returns to start
        if (scrollContainer.scrollLeft === 0) {
          hasScrolled = false;
        }
      }, 100); // Longer delay to allow momentum scrolling to settle
    },
    { passive: true }
  );
}

// Mobile-specific scroll indicator optimization for shopping cart empty page
function optimizeForMobileSCE() {
  // Detect if we're on a mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Add mobile-specific class for CSS targeting
    document.body.classList.add("mobile-device");

    // Force immediate DOM updates on mobile
    const sliderWrappers = document.querySelectorAll(".slider-wrapper");
    sliderWrappers.forEach((wrapper) => {
      wrapper.style.transform = "translate3d(0, 0, 0)";
    });
  }
}

// Initialize scroll indicators for shopping cart empty page carousel
document.addEventListener("DOMContentLoaded", function () {
  // Small delay to ensure all DOM elements are fully loaded
  setTimeout(() => {
    // Find slider wrappers and their corresponding scroll containers
    const sliderWrappers = document.querySelectorAll(".slider-wrapper");

    sliderWrappers.forEach((wrapper) => {
      const scrollContainer =
        wrapper.querySelector(".slides-container") ||
        wrapper.querySelector("#slides-container") ||
        wrapper.querySelector("#slides-containerB");

      if (scrollContainer) {
        hideScrollIndicatorOnScrollSCE(wrapper, scrollContainer);
      }
    });

    // Also handle specific containers by ID
    const slidesContainer = document.getElementById("slides-container");
    if (slidesContainer) {
      const wrapper = slidesContainer.closest(".slider-wrapper");
      if (wrapper) {
        hideScrollIndicatorOnScrollSCE(wrapper, slidesContainer);
      }
    }

    // Initialize mobile optimizations
    optimizeForMobileSCE();
  }, 100); // Small delay to ensure DOM is ready
});

// Mobile Dropdown Fix for Shopping Cart Empty Page
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit for all other scripts to load and initialize
  setTimeout(function () {
    initializeMobileDropdownFix_ShoppingCartEmpty();
  }, 200);
});

function initializeMobileDropdownFix_ShoppingCartEmpty() {
  const accDropdown = document.querySelector(".acc-dropdown");
  const accDropbtn = document.querySelector(".acc-dropbtn");
  const accDropdownContent = document.querySelector(".acc-dropdown-content");
  const personAccountIcon = document.querySelector(".person-account-icon");

  if (!accDropdown || !accDropbtn || !accDropdownContent) {
    return; // Elements not found, skip initialization
  }

  // Check if we're on a mobile device or mobile screen size
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0 ||
      window.TouchEvent !== undefined ||
      window.innerWidth <= 900
    );
  }

  function isMobileScreen() {
    return window.innerWidth <= 900;
  }

  // Only apply mobile fix if we're on mobile
  if (!isTouchDevice() && !isMobileScreen()) {
    return;
  }

  let isAccDropdownOpen = false;
  let touchStarted = false;

  // Function to show dropdown
  function showAccDropdown() {
    accDropdownContent.style.display = "block";
    accDropdown.classList.add("show-dropdown");
    isAccDropdownOpen = true;
  }

  // Function to hide dropdown
  function hideAccDropdown() {
    accDropdownContent.style.display = "none";
    accDropdown.classList.remove("show-dropdown");
    isAccDropdownOpen = false;
  }

  // Function to toggle dropdown
  function toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    // Close hamburger menu if it exists and is open
    if (window.closeHamburgerMenu) {
      window.closeHamburgerMenu();
    }

    if (isAccDropdownOpen) {
      hideAccDropdown();
    } else {
      showAccDropdown();
    }
  }

  // Remove any existing event listeners that might conflict
  const newAccDropbtn = accDropbtn.cloneNode(true);
  accDropbtn.parentNode.replaceChild(newAccDropbtn, accDropbtn);

  if (personAccountIcon) {
    const newPersonAccountIcon = personAccountIcon.cloneNode(true);
    personAccountIcon.parentNode.replaceChild(
      newPersonAccountIcon,
      personAccountIcon
    );
  }

  // Get references to the new elements
  const freshAccDropbtn = document.querySelector(".acc-dropbtn");
  const freshPersonAccountIcon = document.querySelector(".person-account-icon");

  // Add touch event listeners for mobile
  if (isTouchDevice()) {
    // Handle touchstart
    freshAccDropbtn.addEventListener(
      "touchstart",
      function (e) {
        touchStarted = true;
        e.stopPropagation();
      },
      { passive: false }
    );

    // Handle touchend for actual toggle
    freshAccDropbtn.addEventListener(
      "touchend",
      function (e) {
        if (touchStarted) {
          toggleDropdown(e);
          touchStarted = false;
        }
      },
      { passive: false }
    );

    // Also handle the person account icon specifically
    if (freshPersonAccountIcon) {
      freshPersonAccountIcon.addEventListener(
        "touchstart",
        function (e) {
          touchStarted = true;
          e.stopPropagation();
          e.stopImmediatePropagation();
        },
        { passive: false }
      );

      freshPersonAccountIcon.addEventListener(
        "touchend",
        function (e) {
          if (touchStarted) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            toggleDropdown(e);
            touchStarted = false;
          }
        },
        { passive: false }
      );

      // Prevent click events to avoid double triggering
      freshPersonAccountIcon.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // Prevent click events on the main button to avoid conflicts
    freshAccDropbtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  } else {
    // Fallback for non-touch mobile devices
    freshAccDropbtn.addEventListener("click", toggleDropdown);

    if (freshPersonAccountIcon) {
      freshPersonAccountIcon.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        toggleDropdown(e);
      });
    }
  }

  // Close dropdown when clicking/touching outside
  document.addEventListener("click", function (e) {
    if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
      hideAccDropdown();
    }
  });

  document.addEventListener("touchstart", function (e) {
    if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
      hideAccDropdown();
    }
  });

  // Prevent dropdown content from closing when interacting with it
  accDropdownContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  accDropdownContent.addEventListener("touchstart", function (e) {
    e.stopPropagation();
  });

  // Close dropdown when links inside are clicked
  const dropdownLinks = accDropdownContent.querySelectorAll("a");
  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.stopPropagation();
      hideAccDropdown();
    });

    link.addEventListener("touchstart", function (e) {
      e.stopPropagation();
    });
  });

  // Reset dropdown on window resize
  window.addEventListener("resize", function () {
    hideAccDropdown();
  });

  console.log("Mobile dropdown fix initialized for shopping cart empty page");
}

// MAKE SURE THIS JAVASCRIPT FILE IS A SCRIPT FOR THE HTML FILES WITH A SEARCH BAR OR THE HTML FILES WITH SEARCH BARS WILL NOT WORK WITH THIS CODE

/**
 * Allows the user to input text into any search bar with the ID #search-bar, which is then saved as "searchText" in localStorage.
 * The saved input is displayed in noMatch.html if a product is not found.
 */

// Retrieve the search text from local storage
var searchText_noMatch = localStorage.getItem("searchText");

if (searchText_noMatch) {
  document.getElementById("search-bar").value = searchText_noMatch;
}

// Update .sorry-txt only after the page has loaded
window.addEventListener("load", function () {
  var searchText_noMatch = localStorage.getItem("searchText");
  if (searchText_noMatch) {
    var sorryTxtElement = document.querySelector(".sorry-txt");
    if (sorryTxtElement) {
      sorryTxtElement.innerHTML =
        'Sorry, your search "' +
        searchText_noMatch +
        '" did not match any products. Please try again.';
    }
  }
});

// Event listener for search submission
document.getElementById("search-submit").addEventListener("click", function () {
  var searchText_noMatch = document
    .getElementById("search-bar")
    .value.trim()
    .toLowerCase();

  if (!searchText_noMatch) {
    // Do nothing if the search bar is empty
    return;
  }

  localStorage.setItem("searchText", searchText_noMatch);

  // Check if the search matches any product
  var productLinks = document.querySelectorAll("#search-list a");
  var matched = false;

  productLinks.forEach(function (link) {
    var productName = link.textContent.trim().toLowerCase();
    if (productName.includes(searchText_noMatch)) {
      matched = true;
      window.location.href = link.getAttribute("href"); // Redirect to the product page
    }
  });

  if (!matched) {
    // Redirect to noMatch.html if no product matches
    window.location.href = "/noMatch.html";
  }
});

// Event listener for pressing Enter in the search bar
document
  .getElementById("search-bar")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      var searchText_noMatch = this.value.trim().toLowerCase();

      if (!searchText_noMatch) {
        // Do nothing if the search bar is empty
        return;
      }

      localStorage.setItem("searchText", searchText_noMatch);

      // Check if the search matches any product
      var productLinks = document.querySelectorAll("#search-list a");
      var matched = false;

      productLinks.forEach(function (link) {
        var productName = link.textContent.trim().toLowerCase();
        if (productName.includes(searchText_noMatch)) {
          matched = true;
          window.location.href = link.getAttribute("href"); // Redirect to the product page
        }
      });

      if (!matched) {
        // Redirect to noMatch.html if no product matches
        window.location.href = "/noMatch.html";
      }
    }
  });

// Check if the current URL path is not noMatch.html
if (window.location.pathname !== "/noMatch.html") {
  // Remove the searchText and its value from local storage
  localStorage.removeItem("searchText");

  // Clear the input value of search-bar
  document.getElementById("search-bar").value = "";
}

// Mobile Dropdown Fix for noMatch.html page
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit for all other scripts to load and initialize
  setTimeout(function () {
    initializeMobileDropdownFix();
  }, 100);
});

function initializeMobileDropdownFix() {
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

  console.log("Mobile dropdown fix initialized for noMatch page");
}

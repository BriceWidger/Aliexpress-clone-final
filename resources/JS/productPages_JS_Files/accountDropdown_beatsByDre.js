/**
 * ACCOUNT DROPDOWN FUNCTIONALITY FOR BEATSBYDRE.HTML
 * This file adds mobile account dropdown functionality specifically for the beatsbydre.html page
 * without modifying the main index.js file.
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
      // Function to handle toggle for mobile
      function handleMobileToggle(e) {
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

      // Also add click event to the person account icon specifically
      if (personAccountIcon) {
        personAccountIcon.addEventListener("click", handleMobileToggle);
      }

      // Add touchstart event for better mobile responsiveness
      accDropbtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (isAccDropdownOpen) {
          hideAccDropdown();
        } else {
          showAccDropdown();
        }
      });

      // Also add touchstart event to the person account icon specifically
      if (personAccountIcon) {
        personAccountIcon.addEventListener("touchstart", function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (isAccDropdownOpen) {
            hideAccDropdown();
          } else {
            showAccDropdown();
          }
        });
      }

      // Close account dropdown when clicking outside
      document.addEventListener("click", function (e) {
        if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
          hideAccDropdown();
        }
      });

      // Close account dropdown when touching outside
      document.addEventListener("touchstart", function (e) {
        if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
          hideAccDropdown();
        }
      });

      // Close account dropdown when a link is clicked
      const accDropdownLinks = accDropdownContent.querySelectorAll("a");
      accDropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.stopPropagation();
          hideAccDropdown();
        });

        link.addEventListener("touchstart", function (e) {
          e.stopPropagation();
        });
      });

      // Prevent account dropdown content from closing when clicking inside it
      accDropdownContent.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      accDropdownContent.addEventListener("touchstart", function (e) {
        e.stopPropagation();
      });

      // Reset account dropdown when screen size changes
      window.addEventListener("resize", function () {
        hideAccDropdown();
      });
    }
  }
});

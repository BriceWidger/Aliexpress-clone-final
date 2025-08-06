/**
 * FOR ALL PAGES
 *
 * Show an "Added!" notification on the given element.
 * The notification will be displayed for a duration of 1000 milliseconds. Pointer events will be disabled during this time.
 */

// Add-on icons (all)
function showAdded(element) {
  const wrapper =
    element.closest(".add-on-icon-wrapper") ||
    element.closest(".page-container") ||
    element.closest(".product-page-body-wrap");

  if (!wrapper) {
    console.error("Could not find a valid wrapper element");
    return;
  }

  // Instead of disabling all pointer events, only disable add-on-icon interactions
  // This allows scrolling while preventing multiple clicks on add-on-icons
  const allAddOnIcons = document.querySelectorAll(
    '[class*="add-on-icon"], [class*="add-to-cart"]'
  );
  allAddOnIcons.forEach((icon) => {
    icon.style.pointerEvents = "none";
    icon.style.cursor = "default";
  });

  // Create a more targeted overlay that only prevents clicks on interactive elements
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "transparent",
    zIndex: "9999",
    pointerEvents: "none", // Allow scroll events to pass through
  });

  // Only prevent clicks on specific interactive elements, not scrolling
  overlay.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches('[class*="add-on-icon"], [class*="add-to-cart"]')) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  document.body.appendChild(overlay);

  element.style.backgroundColor = "lightgreen";
  element.style.backgroundImage = "none";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundSize = "auto";
  element.style.backgroundPosition = "center";
  element.style.background = "lightgreen";
  element.querySelector(".notification-text").innerText = "Added!";

  setTimeout(() => {
    element.querySelector(".notification-text").innerText = "";
    element.style.background = "";
    element.style.backgroundColor = "";
    element.style.setProperty(
      "background-image",
      'url("/resources/images/plus-icon-black.png")',
      "important"
    );
    element.style.setProperty("background-repeat", "no-repeat", "important");
    element.style.setProperty("background-size", "29px 29px", "important");
    element.style.setProperty("background-position", "center", "important");
    element.style.setProperty("background-color", "#fff", "important");

    // Remove overlay
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }

    // Re-enable pointer events on add-on-icons
    allAddOnIcons.forEach((icon) => {
      icon.style.pointerEvents = "auto";
      icon.style.cursor = "pointer";
    });
  }, 1000);
}

/**
 * FOR PRODUCT PAGES
 *
 * Show an "Added!" notification on the "Add to Cart" button.
 * Pointer events will be disabled only on add-on-icons during the notification duration.
 */
function showAdded_addToCartBtn(element) {
  // Instead of disabling all pointer events, only disable add-on-icon interactions
  // This allows scrolling while preventing multiple clicks on add-on-icons
  const allAddOnIcons = document.querySelectorAll(
    '[class*="add-on-icon"], [class*="add-to-cart"]'
  );
  allAddOnIcons.forEach((icon) => {
    icon.style.pointerEvents = "none";
    icon.style.cursor = "default";
  });

  element.style.backgroundColor = "lightgreen";
  element.style.backgroundImage = "none";
  element.style.background = "lightgreen";

  setTimeout(() => {
    element.querySelector(".notification-text-add-to-cart-button").innerText =
      "";
    element.style.background = "";
    element.style.backgroundImage =
      'url("/resources/images/plus-icon-black.png")';
    element.style.backgroundColor = "";

    // Re-enable pointer events on add-on-icons
    allAddOnIcons.forEach((icon) => {
      icon.style.pointerEvents = "auto";
      icon.style.cursor = "pointer";
    });
  }, 1000);
}

// Update "Add to Cart" button text
const addToCart_textChange = document.querySelector(".add-to-cart-wrap");
addToCart_textChange.addEventListener("click", () => {
  const addToCartText = addToCart_textChange.querySelector(".add-to-cart-text");
  addToCartText.textContent = "Added!";

  setTimeout(() => {
    addToCartText.textContent = "Add to Cart";
  }, 1000);
});

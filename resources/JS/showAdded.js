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

  // Disable pointer events and set cursor to default
  document.body.style.pointerEvents = "none";
  document.body.style.cursor = "default";

  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "transparent",
    zIndex: "1",
    cursor: "default",
  });
  wrapper.appendChild(overlay);

  overlay.addEventListener("click", (event) => event.preventDefault());

  element.style.backgroundColor = "lightgreen";
  element.style.backgroundImage = "none";
  element.querySelector(".notification-text").innerText = "Added!";

  setTimeout(() => {
    element.querySelector(".notification-text").innerText = "";
    element.style.backgroundImage =
      'url("/resources/images/plus-icon-black.png")';
    element.style.backgroundColor = "";
    if (wrapper.contains(overlay)) wrapper.removeChild(overlay);

    // Re-enable pointer events and reset cursor
    document.body.style.pointerEvents = "auto";
    document.body.style.cursor = "pointer";
  }, 1000);
}

/**
 * FOR PRODUCT PAGES
 *
 * Show an "Added!" notification on the "Add to Cart" button.
 * Pointer events will be disabled during the notification duration.
 */
function showAdded_addToCartBtn(element) {
  // Disable pointer events and set cursor to default
  document.body.style.pointerEvents = "none";
  document.body.style.cursor = "default";

  element.style.backgroundColor = "lightgreen";
  element.style.backgroundImage = "none";

  setTimeout(() => {
    element.querySelector(".notification-text-add-to-cart-button").innerText =
      "";
    element.style.backgroundImage =
      'url("/resources/images/plus-icon-black.png")';
    element.style.backgroundColor = "";

    // Re-enable pointer events and reset cursor
    document.body.style.pointerEvents = "auto";
    document.body.style.cursor = "pointer";
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

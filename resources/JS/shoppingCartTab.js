// Shopping Cart Tab for Responsive Summary Panel
// Shows a tab on the right for summary when screen is small

document.addEventListener("DOMContentLoaded", function () {
  const cartRightSide = document.querySelector(".cart-right-side");
  if (!cartRightSide) return;

  // Create the tab button
  const tabBtn = document.createElement("button");
  tabBtn.className = "cart-summary-tab-btn";
  tabBtn.innerHTML = "Summary";
  tabBtn.setAttribute("aria-label", "Show cart summary");
  tabBtn.style.display = "none";
  document.body.appendChild(tabBtn);

  let summaryOpen = false;

  function updateTabDisplay() {
    if (window.innerWidth <= 900) {
      cartRightSide.classList.add("cart-right-side-tabbed");
      tabBtn.style.display = "block";
      if (!summaryOpen) {
        cartRightSide.classList.add("cart-summary-hidden");
      }
    } else {
      cartRightSide.classList.remove("cart-right-side-tabbed");
      cartRightSide.classList.remove("cart-summary-hidden");
      tabBtn.style.display = "none";
      summaryOpen = false;
    }
  }

  tabBtn.addEventListener("click", function () {
    summaryOpen = !summaryOpen;
    cartRightSide.classList.toggle("cart-summary-hidden", !summaryOpen);
    tabBtn.classList.toggle("active", summaryOpen);
  });

  window.addEventListener("resize", updateTabDisplay);
  updateTabDisplay();
});

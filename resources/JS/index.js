// Search bar
function search_items() {
  let input = document.getElementById("search-bar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("search-item-names");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

// List toggle (search bar)
const searchBar = document.querySelector("#search-bar");
const searchList = document.querySelector("#search-list");

// Function to position search list relative to search bar container
function positionSearchList() {
  const searchBarContainer = document.querySelector("#search-bar-container");
  if (searchBarContainer && searchList) {
    const rect = searchBarContainer.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Position search list to match search bar container exactly
    searchList.style.position = "absolute";
    searchList.style.left = rect.left + "px";
    searchList.style.width = rect.width + "px";
    searchList.style.top = rect.bottom + scrollTop + 6 + "px";
  }
}

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

// Add mobile toggle functionality for search bar container
const searchBarContainer = document.querySelector("#search-bar-container");
if (searchBarContainer) {
  searchBarContainer.addEventListener("click", function (event) {
    // Only apply toggle behavior on mobile devices or when testing mobile on desktop
    if (isTouchDevice() || isMobileScreen()) {
      // If the click is anywhere within the search bar container
      if (
        event.target.closest("#search-bar-container") &&
        !event.target.closest("#search-submit-container")
      ) {
        // Toggle the search list visibility
        if (searchList.style.display === "block") {
          searchList.style.display = "none";
        } else {
          positionSearchList();
          searchList.style.display = "block";
        }

        event.preventDefault();
        event.stopPropagation();
      }
    }
  });

  // Also add touch event for better mobile responsiveness
  searchBarContainer.addEventListener(
    "touchstart",
    function (event) {
      if (isTouchDevice() || isMobileScreen()) {
        if (
          event.target.closest("#search-bar-container") &&
          !event.target.closest("#search-submit-container")
        ) {
          if (searchList.style.display === "block") {
            searchList.style.display = "none";
          } else {
            positionSearchList();
            searchList.style.display = "block";
          }

          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    { passive: false }
  );
}

// For desktop devices, keep the original search bar click behavior
searchBar.addEventListener("click", () => {
  // Only show search list on desktop (non-mobile) devices
  if (!isTouchDevice() && !isMobileScreen()) {
    positionSearchList();
    searchList.style.display = "block";
  }
});

// Add click outside functionality for mobile devices
document.addEventListener("click", function (event) {
  // Only apply this behavior on mobile devices or when testing mobile on desktop
  if (isTouchDevice() || isMobileScreen()) {
    // Check if the search list is currently visible
    if (searchList.style.display === "block") {
      // Check if the click was outside the search bar container and not on a search list link
      if (
        !event.target.closest("#search-bar-container") &&
        !event.target.closest("#search-list")
      ) {
        searchList.style.display = "none";
      }
    }
  }
});

// Add touch outside functionality for mobile devices
document.addEventListener(
  "touchstart",
  function (event) {
    // Only apply this behavior on mobile devices or when testing mobile on desktop
    if (isTouchDevice() || isMobileScreen()) {
      // Check if the search list is currently visible
      if (searchList.style.display === "block") {
        // Check if the touch was outside the search bar container and not on a search list link
        if (
          !event.target.closest("#search-bar-container") &&
          !event.target.closest("#search-list")
        ) {
          searchList.style.display = "none";
        }
      }
    }
  },
  { passive: true }
);

// Add mobile-specific handling for search list links
document.addEventListener("DOMContentLoaded", function () {
  const searchListElement = document.querySelector("#search-list");
  if (searchListElement && (isTouchDevice() || isMobileScreen())) {
    // Get all links within the search list
    const searchLinks = searchListElement.querySelectorAll("a");

    searchLinks.forEach(function (link) {
      // Add touch and click events for mobile compatibility
      link.addEventListener(
        "touchstart",
        function (event) {
          // Prevent the search list from closing when touching a link
          event.stopPropagation();
        },
        { passive: true }
      );

      link.addEventListener("click", function (event) {
        // Ensure navigation works and close search list
        event.stopPropagation();
        if (searchList.style.display === "block") {
          searchList.style.display = "none";
        }
        // Allow default link navigation behavior
      });
    });
  }
});

// Update position on window resize
window.addEventListener("resize", () => {
  if (searchList.style.display === "block") {
    positionSearchList();
  }
});

// Hide search dropdown on scroll (standard dropdown behavior)
window.addEventListener(
  "scroll",
  () => {
    if (searchList.style.display === "block") {
      searchList.style.display = "none";
    }
  },
  { passive: true }
);

// Hide search dropdown on mobile scroll/touch move events
window.addEventListener(
  "touchmove",
  () => {
    if (
      (isTouchDevice() || isMobileScreen()) &&
      searchList.style.display === "block"
    ) {
      searchList.style.display = "none";
    }
  },
  { passive: true }
);

// Hide search dropdown on mobile orientation change
window.addEventListener("orientationchange", () => {
  if (
    (isTouchDevice() || isMobileScreen()) &&
    searchList.style.display === "block"
  ) {
    searchList.style.display = "none";
  }
});
const updateListState = (e) => {
  // Only apply mousemove hide behavior on desktop (non-mobile) devices
  if (!isTouchDevice() && !isMobileScreen()) {
    const targetId = e.target.id;
    if (
      targetId !== "search-bar" &&
      targetId !== "search-list" &&
      targetId !== "search-bar-filler" &&
      targetId !== "search-bar-container" &&
      targetId !== "search-item-names" &&
      targetId !== "search-submit" &&
      targetId !== "search-submit-container"
    ) {
      searchList.style.display = "none";
    }
  }
};
document.addEventListener("mousemove", updateListState);

// Letter search (search bar)
function search_items() {
  let input = document.getElementById("search-bar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("search-item-names");
  const regex = new RegExp(input, "gi");

  for (let i = 0; i < x.length; i++) {
    let originalText = x[i].getAttribute("data-original-text");
    if (!originalText) {
      originalText = x[i].textContent;
      x[i].setAttribute("data-original-text", originalText);
    }
    if (!originalText.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
      const formattedText = originalText.replace(
        regex,
        (match) => `<b>${match}</b>`
      );
      x[i].innerHTML = formattedText;

      // Check if any two words are bold and match the search input
      const boldWords = x[i].querySelectorAll("b");
      if (
        boldWords.length >= 2 &&
        boldWords[0].textContent.toLowerCase().includes(input) &&
        boldWords[1].textContent.toLowerCase().includes(input)
      ) {
        const link = x[i].getAttribute("data-link");
        if (link) {
          reloadNewHTML(link);
        }
      }
    }
  }
}

// Function to reload new HTML in a new window
function reloadNewHTML(url) {
  window.open(url, "_blank");
}

// Event listener for input event on search bar element
document.getElementById("search-bar").addEventListener("input", function () {
  const searchList = document.querySelector("#search-list");
  positionSearchList(); // Position search list correctly
  searchList.style.display = "block"; // Ensure the search list is visible
  search_items(); // Call the search_items function to update the list
});

// Removes whitespace from search input & opens html in new tab
document
  .getElementById("search-submit-container")
  .addEventListener("click", openLink);

function openLink() {
  var link = document.getElementById("search-bar").value.trim().toLowerCase();

  if (!link) {
    // Do nothing if the search bar is empty
    return;
  }

  // Automotive Degreaser
  if (
    link === "au" ||
    link === "aut" ||
    link === "auto" ||
    link === "autom" ||
    link === "automo" ||
    link === "automot" ||
    link === "automoti" ||
    link === "automotiv" ||
    link === "automotive" ||
    link === "automotive " ||
    link === "automotive d" ||
    link === "automotive de" ||
    link === "automotive deg" ||
    link === "automotive degr" ||
    link === "automotive degre" ||
    link === "automotive degrea" ||
    link === "automotive degreas" ||
    link === "automotive degrease" ||
    link === "automotive degreaser" ||
    link === "automotive degreaser " ||
    link === "automotivedegreaser" ||
    link === "de" ||
    link === "deg" ||
    link === "degr" ||
    link === "degre" ||
    link === "degrea" ||
    link === "degreas" ||
    link === "degrease" ||
    link === "degreaser"
  ) {
    reloadNewHTML("" + "/Item_Pages/automotiveDegreaser.html");
  }
  // Beats By Dre
  else if (
    link == "be" ||
    link == "bea" ||
    link == "beat" ||
    link == "beats" ||
    link == "beats " ||
    link == "beats b" ||
    link == "beats by" ||
    link == "beats by " ||
    link == "beats by d" ||
    link == "beats by dr" ||
    link == "beats by dre" ||
    link == "beats by dre " ||
    link == "beatsbydre" ||
    link == "by" ||
    link == "dr" ||
    link == "dre"
  ) {
    reloadNewHTML("" + "/Item_Pages/beatsbydre.html");
  }
  // JBL Partybox
  else if (
    link == "j" ||
    link == "jb" ||
    link == "jbl" ||
    link == "jbl " ||
    link == "jbl p" ||
    link == "jbl pa" ||
    link == "jbl par" ||
    link == "jbl part" ||
    link == "jbl party" ||
    link == "jbl partyb" ||
    link == "jbl partybo" ||
    link == "jbl partybox" ||
    link == "jbl partybox " ||
    link === "jblpartybox" ||
    link == "pa" ||
    link == "par" ||
    link == "part" ||
    link == "party" ||
    link == "bo" ||
    link == "box"
  ) {
    reloadNewHTML("" + "/Item_Pages/jblPartybox.html");
  }
  // Makeup One
  else if (
    link == "ma" ||
    link == "mak" ||
    link == "make" ||
    link == "makeu" ||
    link == "makeup" ||
    link == "makeup "
  ) {
    reloadNewHTML("" + "/Item_Pages/makeup.html");
  }
  // Makeup Two
  // else if (
  //   link == "ma" ||
  //   link == "mak" ||
  //   link == "make" ||
  //   link == "makeu" ||
  //   link == "makeup" ||
  //   link == "makeup "
  // ) {
  //   reloadNewHTML("" + "/Item_Pages/makeup.html");
  // }
  // Mr Potato Head
  else if (
    link == "mr" ||
    link == "mr " ||
    link == "mr p" ||
    link == "mr po" ||
    link == "mr pot" ||
    link == "mr pota" ||
    link == "mr potat" ||
    link == "mr potato" ||
    link == "mr potato " ||
    link == "my potato h" ||
    link == "mr potato he" ||
    link == "mr potato hea" ||
    link == "mr potato head" ||
    link == "mr potato head " ||
    link == "mrpotatohead" ||
    link == "po" ||
    link == "pot" ||
    link == "pota" ||
    link == "potat" ||
    link == "potato" ||
    link == "potato " ||
    link == "he" ||
    link == "hea" ||
    link == "head"
  ) {
    reloadNewHTML("" + "/Item_Pages/mrPotatoHead.html");
  }

  // Olympus Camera
  else if (
    link == "ol" ||
    link == "oly" ||
    link == "olym" ||
    link == "olymp" ||
    link == "olympu" ||
    link == "olympus" ||
    link == "olympus " ||
    link == "olympus c" ||
    link == "olympus ca" ||
    link == "olympus cam" ||
    link == "olympus came" ||
    link == "olympus camer" ||
    link == "olympus camera" ||
    link == "olympus camera " ||
    link === "olympuscamera" ||
    link == "cam" ||
    link == "came" ||
    link == "camer" ||
    link == "camera"
  ) {
    reloadNewHTML("" + "/Item_Pages/olympusCamera.html");
  }

  // Pillow
  else if (
    link == "pi" ||
    link == "pil" ||
    link == "pill" ||
    link == "pillo" ||
    link == "pillow" ||
    link == "pillow "
  ) {
    reloadNewHTML("" + "/Item_Pages/pillow.html");
  }
  // RC Race Car
  else if (
    link == "rc" ||
    link == "rc " ||
    link == "rc r" ||
    link == "rc ra" ||
    link == "rc rac" ||
    link == "rc race" ||
    link == "rc race " ||
    link == "rc race c" ||
    link == "rc race ca" ||
    link == "rc race car" ||
    link == "rc race car " ||
    link === "rcracecar" ||
    link == "rac" ||
    link == "race" ||
    link == "race " ||
    link == "ca" ||
    link == "car"
  ) {
    reloadNewHTML("" + "/Item_Pages/rcRaceCar.html");
  }
  // Simon Rabbit
  else if (
    link == "si" ||
    link == "sim" ||
    link == "simo" ||
    link == "simon" ||
    link == "simon " ||
    link == "simon r" ||
    link == "simon ra" ||
    link == "simon rab" ||
    link == "simon rabb" ||
    link == "simon rabbi" ||
    link == "simon rabbit" ||
    link == "simon rabbit " ||
    link === "simonrabbit" ||
    link == "rab" ||
    link == "rabb" ||
    link == "rabbi" ||
    link == "rabbit"
  ) {
    reloadNewHTML("" + "/Item_Pages/simonRabbit.html");
  } else if (
    link == "tr" ||
    link == "tru" ||
    link == "trut" ||
    link == "truth" ||
    link == "truth " ||
    link == "truth h" ||
    link == "truth ho" ||
    link == "truth hoo" ||
    link == "truth hood" ||
    link == "truth hoodi" ||
    link == "truth hoodie" ||
    link == "truth hoodie " ||
    link === "truthhoodie" ||
    link == "h" ||
    link == "ho" ||
    link == "hoo" ||
    link == "hood" ||
    link == "hoodi" ||
    link == "hoodie"
  ) {
    reloadNewHTML("" + "/Item_Pages/truthHoodie.html");
  }
  // else, open noMatch.html
  else {
    reloadNewHTML("" + "../../noMatch.html");
  }
}

// Function to reload new HTML in the same window
function reloadNewHTML(url) {
  window.location.href = url;
}

// Event listener for keyup event on search bar input
var input = document.getElementById("search-bar");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-submit-container").click();
  }
});

// https://stackoverflow.com/questions/73137619/how-can-i-make-my-image-carousal-loop-in-vanilla-javascript
// Slider
const slidesContainer = document.getElementById("slides-container");
const slidesContainerB = document.getElementById("slides-containerB");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const prevButtonB = document.getElementById("slide-arrow-prevB");
const nextButtonB = document.getElementById("slide-arrow-nextB");

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth + 10;
  slidesContainer.scrollLeft -= slideWidth;
});
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth + 10;
  slidesContainer.scrollLeft += slideWidth;
});

prevButtonB.addEventListener("click", () => {
  const slideWidth = slide.clientWidth + 10;
  slidesContainerB.scrollLeft -= slideWidth;
});
nextButtonB.addEventListener("click", () => {
  const slideWidth = slide.clientWidth + 10;
  slidesContainerB.scrollLeft += slideWidth;
});

// Slider button decoy
function decoyFunctionOne() {
  document.getElementById("slide-arrow-prev").style.zIndex = "1";
  document.getElementById("decoy-one").style.zIndex = "2";
  document.getElementById("slide-arrow-next").style.zIndex = "2";
}

function decoyFunctionTwo() {
  document.getElementById("slide-arrow-next").style.zIndex = "1";
  document.getElementById("decoy-two").style.zIndex = "2";
  document.getElementById("slide-arrow-prev").style.zIndex = "2";
}
function decoyFunctionOne_rowC() {
  document.getElementById("slide-arrow-prevB").style.zIndex = "1";
  document.getElementById("decoy-one_rowC").style.zIndex = "2";
  document.getElementById("slide-arrow-nextB").style.zIndex = "2";
}
function decoyFunctionTwo_rowC() {
  document.getElementById("slide-arrow-nextB").style.zIndex = "1";
  document.getElementById("decoy-two_rowC").style.zIndex = "2";
  document.getElementById("slide-arrow-prevB").style.zIndex = "2";
}

// ===================================
// CAROUSEL SCROLL INDICATORS
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

// Mobile-specific scroll indicator optimization
function optimizeForMobile() {
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

// Initialize scroll indicators for both carousels
document.addEventListener("DOMContentLoaded", function () {
  // Find slider wrappers and their corresponding scroll containers
  const sliderWrappers = document.querySelectorAll(".slider-wrapper");

  sliderWrappers.forEach((wrapper) => {
    const scrollContainer =
      wrapper.querySelector(".slides-container") ||
      wrapper.querySelector("#slides-container") ||
      wrapper.querySelector("#slides-containerB");

    if (scrollContainer) {
      hideScrollIndicatorOnScroll(wrapper, scrollContainer);
    }
  });

  // Also handle manual scroll indicator hiding on touch/mouse interaction
  if (slidesContainer) {
    hideScrollIndicatorOnScroll(
      slidesContainer.closest(".slider-wrapper"),
      slidesContainer
    );
  }
  if (slidesContainerB) {
    hideScrollIndicatorOnScroll(
      slidesContainerB.closest(".slider-wrapper"),
      slidesContainerB
    );
  }

  // Initialize mobile optimizations
  optimizeForMobile();
});

// Nav Scroll - Navigation stays visible on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  // Keep navigation visible at all times
  var navElement = document.getElementById("whole-nav");
  if (navElement) {
    navElement.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

// toggle sign-out notifications
function signOut() {
  var x = document.getElementById("sign-out");
  var y = document.getElementById("sign-in");
  var z = document.getElementById("signed-in-text-notification");
  var w = document.getElementById("signed-out-text-notification");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; // hides sign-out
    z.style.display = "none"; // hides signed-in-text-notification
    y.style.display = "block"; // displays sign-in
    w.style.display = "block"; // displays signed-out-text-notification
  }
}

// toggle sign-in notifications
function signIn() {
  var y = document.getElementById("sign-in");
  var w = document.getElementById("signed-out-text-notification");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none"; // hides sign-in
    w.style.display = "none"; // hides signed-out-text-notification
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
 */

/**
 *
 *When user clicks #sign-out the page refreshes to signIn.html.
 */

// document.getElementById('sign-out').addEventListener('click', () => {
//   window.location.href = 'signIn.html';
// });

// Carousel Reset on Breakpoint Changes
(function () {
  let currentBreakpoint = getCurrentBreakpoint();

  function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width <= 358) return "358px";
    if (width <= 359) return "359px";
    if (width <= 428) return "428px";
    if (width <= 489) return "489px";
    if (width <= 568) return "568px";
    if (width <= 600) return "600px";
    if (width <= 658) return "658px";
    if (width <= 700) return "700px";
    if (width <= 754) return "754px";
    if (width <= 800) return "800px";
    if (width <= 823) return "823px";
    if (width <= 900) return "900px";
    if (width <= 1200) return "1200px";
    return "desktop";
  }

  function resetCarouselsToStart() {
    const carousels = [
      document.getElementById("slides-container"),
      document.getElementById("slides-containerB"),
    ];

    carousels.forEach((carousel) => {
      if (carousel) {
        // Temporarily disable smooth scrolling for instant reset
        const originalBehavior = carousel.style.scrollBehavior;
        carousel.style.scrollBehavior = "auto";
        carousel.scrollLeft = 0;

        // Restore smooth scrolling after a brief delay
        setTimeout(() => {
          carousel.style.scrollBehavior = originalBehavior || "smooth";
        }, 50);
      }
    });
  }

  function handleBreakpointChange() {
    const newBreakpoint = getCurrentBreakpoint();
    if (newBreakpoint !== currentBreakpoint) {
      currentBreakpoint = newBreakpoint;
      // Reset carousels to show first card when breakpoint changes
      resetCarouselsToStart();
    }
  }

  // Listen for window resize events
  window.addEventListener("resize", handleBreakpointChange);

  // Also reset on initial load
  document.addEventListener("DOMContentLoaded", resetCarouselsToStart);
})();

/**
 * HAMBURGER MENU FUNCTIONALITY
 */

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
  const hamburgerContainer = document.querySelector(
    ".hamburger-menu-container"
  );
  const navItems = document.querySelectorAll(
    ".lower-nav-list-one, .lower-nav-list-two, .lower-nav-list-three, .lower-nav-list-four"
  );

  // Function to close hamburger menu
  function closeHamburgerMenu() {
    if (hamburgerContainer) {
      hamburgerContainer.classList.remove("active");
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove("active");
    }
    navItems.forEach((item) => {
      item.classList.remove("mobile-visible");
    });
  }

  // Function to check if menu is open
  function isMenuOpen() {
    return (
      hamburgerContainer && hamburgerContainer.classList.contains("active")
    );
  }

  // Make closeHamburgerMenu function globally accessible for other components
  window.closeHamburgerMenu = closeHamburgerMenu;

  if (hamburgerBtn && hamburgerContainer) {
    hamburgerBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation(); // Prevent event bubbling

      // Toggle the active class on the hamburger container
      hamburgerContainer.classList.toggle("active");

      // Toggle the nav items visibility by adding/removing mobile-visible class
      navItems.forEach((item) => {
        item.classList.toggle("mobile-visible");
      });

      // Toggle hamburger icon animation
      hamburgerBtn.classList.toggle("active");
    });

    // Close menu when clicking anywhere on the page (except the hamburger button itself)
    document.addEventListener("click", function (event) {
      // Check if menu is open and click is not on hamburger button or container
      if (isMenuOpen() && !hamburgerContainer.contains(event.target)) {
        closeHamburgerMenu();
      }
    });

    // Close menu when pressing any key (Escape, Space, Enter, etc.)
    document.addEventListener("keydown", function (event) {
      if (isMenuOpen()) {
        closeHamburgerMenu();
      }
    });

    // Close menu on touch events (for mobile devices)
    document.addEventListener(
      "touchstart",
      function (event) {
        if (isMenuOpen() && !hamburgerContainer.contains(event.target)) {
          closeHamburgerMenu();
        }
      },
      { passive: true }
    );

    // Close menu on scroll
    document.addEventListener(
      "scroll",
      function () {
        if (isMenuOpen()) {
          closeHamburgerMenu();
        }
      },
      { passive: true }
    );

    // Close menu when interacting with specific dropdowns or components that should take priority
    document.addEventListener("click", function (event) {
      if (isMenuOpen()) {
        const target = event.target;
        const isDropdownClick = target.closest(".dropdown");
        const isSearchClick =
          target.closest("#search-bar-container") ||
          target.closest("#search-list");

        // Close hamburger menu when clicking on dropdown or search elements
        if (
          (isDropdownClick || isSearchClick) &&
          !hamburgerContainer.contains(target)
        ) {
          closeHamburgerMenu();
        }
      }
    });

    // Close menu when search dropdown is opened
    document.addEventListener("click", function (event) {
      if (isMenuOpen() && event.target.closest("#search-bar")) {
        closeHamburgerMenu();
      }
    });

    // Reset hamburger menu when screen size changes
    window.addEventListener("resize", function () {
      closeHamburgerMenu();
    });

    // Close menu when clicking on any of the navigation links
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        closeHamburgerMenu();
      });
    });

    // Close hamburger menu when dropdown is hovered (desktop behavior)
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");
    if (dropdown && dropbtn) {
      // Close hamburger menu when hovering over dropdown button (which shows dropdown-content via CSS)
      dropbtn.addEventListener("mouseenter", function () {
        if (isMenuOpen()) {
          closeHamburgerMenu();
        }
      });

      // Also close when hovering over the dropdown container itself
      dropdown.addEventListener("mouseenter", function () {
        if (isMenuOpen()) {
          closeHamburgerMenu();
        }
      });
    }
  }
});

/**
 * MOBILE DROPDOWN FUNCTIONALITY
 */
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdown && dropbtn && dropdownContent) {
    let isDropdownOpen = false;

    // Add mobile functionality for touch devices OR mobile screen sizes
    if (isTouchDevice() || isMobileScreen()) {
      // Add click event to toggle dropdown
      dropbtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close hamburger menu if it's open
        if (window.closeHamburgerMenu) {
          window.closeHamburgerMenu();
        }

        if (isDropdownOpen) {
          dropdownContent.style.display = "none";
          dropdown.classList.remove("mobile-active");
          isDropdownOpen = false;
        } else {
          dropdownContent.style.display = "block";
          dropdown.classList.add("mobile-active");
          isDropdownOpen = true;
        }
      });

      // Add touchstart event for better mobile responsiveness
      dropbtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close hamburger menu if it's open
        if (window.closeHamburgerMenu) {
          window.closeHamburgerMenu();
        }

        if (isDropdownOpen) {
          dropdownContent.style.display = "none";
          dropdown.classList.remove("mobile-active");
          isDropdownOpen = false;
        } else {
          dropdownContent.style.display = "block";
          dropdown.classList.add("mobile-active");
          isDropdownOpen = true;
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", function (e) {
        if (isDropdownOpen && !dropdown.contains(e.target)) {
          dropdownContent.style.display = "none";
          dropdown.classList.remove("mobile-active");
          isDropdownOpen = false;
        }
      });

      // Close dropdown when touching outside
      document.addEventListener("touchstart", function (e) {
        if (isDropdownOpen && !dropdown.contains(e.target)) {
          dropdownContent.style.display = "none";
          dropdown.classList.remove("mobile-active");
          isDropdownOpen = false;
        }
      });

      // Close dropdown when a link is clicked
      const dropdownLinks = dropdownContent.querySelectorAll("a");
      dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.stopPropagation();
          dropdownContent.style.display = "none";
          dropdown.classList.remove("mobile-active");
          isDropdownOpen = false;
        });

        link.addEventListener("touchstart", function (e) {
          e.stopPropagation();
        });
      });

      // Prevent dropdown content from closing when clicking inside it
      dropdownContent.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      dropdownContent.addEventListener("touchstart", function (e) {
        e.stopPropagation();
      });

      // Reset dropdown when screen size changes
      window.addEventListener("resize", function () {
        dropdownContent.style.display = "none";
        dropdown.classList.remove("mobile-active");
        isDropdownOpen = false;
      });
    }
  }
});

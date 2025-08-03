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

// Function to remove leading and trailing spaces from search input
function removeSpaces(str) {
  return str.trim();
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
  // Handle mobile search bar functionality without blocking input focus
  searchBarContainer.addEventListener("click", function (event) {
    // Only apply toggle behavior on mobile devices or when testing mobile on desktop
    if (isTouchDevice() || isMobileScreen()) {
      // If the click is on the search bar input itself, allow default behavior (focus and keyboard)
      if (event.target.id === "search-bar") {
        // Show the search list when input is focused
        positionSearchList();
        searchList.style.display = "block";
        return; // Don't prevent default, allow input focus
      }

      // If the click is on other parts of the search bar container (not the input or submit button)
      if (
        event.target.closest("#search-bar-container") &&
        !event.target.closest("#search-submit-container") &&
        event.target.id !== "search-bar"
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

  // Handle touch events for mobile - similar logic but don't block input touch
  searchBarContainer.addEventListener(
    "touchstart",
    function (event) {
      if (isTouchDevice() || isMobileScreen()) {
        // If the touch is on the search bar input itself, allow default behavior
        if (event.target.id === "search-bar") {
          positionSearchList();
          searchList.style.display = "block";
          return; // Don't prevent default, allow input focus
        }

        // Handle touches on other parts of the container
        if (
          event.target.closest("#search-bar-container") &&
          !event.target.closest("#search-submit-container") &&
          event.target.id !== "search-bar"
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

// Add mobile-specific input handling
if (searchBar) {
  // Handle input focus on mobile devices
  searchBar.addEventListener("focus", function () {
    if (isTouchDevice() || isMobileScreen()) {
      positionSearchList();
      searchList.style.display = "block";
    }
  });

  // Handle input events for real-time search on mobile
  searchBar.addEventListener("input", function () {
    if (isTouchDevice() || isMobileScreen()) {
      search_items(); // Call the search function
      if (searchList.style.display !== "block") {
        positionSearchList();
        searchList.style.display = "block";
      }
    }
  });

  // Enhanced mobile touch handling to ensure keyboard appears
  searchBar.addEventListener(
    "touchstart",
    function (event) {
      if (isTouchDevice() || isMobileScreen()) {
        // Ensure the input can receive focus
        event.stopPropagation();
      }
    },
    { passive: false }
  );

  // Ensure virtual keyboard doesn't hide search results on mobile
  searchBar.addEventListener(
    "touchend",
    function (event) {
      if (isTouchDevice() || isMobileScreen()) {
        // Prevent event from bubbling and focus the input
        event.preventDefault();
        event.stopPropagation();

        // Focus the input to trigger mobile keyboard
        searchBar.focus();

        // Small delay to ensure the virtual keyboard appears
        setTimeout(function () {
          if (searchList.style.display === "block") {
            positionSearchList();
          }
        }, 300);
      }
    },
    { passive: false }
  );

  // Handle viewport changes when virtual keyboard appears/disappears
  window.addEventListener("resize", function () {
    if (
      isTouchDevice() ||
      (isMobileScreen() && searchList.style.display === "block")
    ) {
      setTimeout(function () {
        positionSearchList();
      }, 100);
    }
  });
}

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
  scrollContainer.addEventListener("scroll", throttledHideIndicator, { passive: true });

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
      // Also exclude navigation links from closing the menu - let them navigate first
      const isNavLink = event.target.closest(
        ".lower-nav-list-one, .lower-nav-list-two, .lower-nav-list-three, .lower-nav-list-four"
      );
      if (
        isMenuOpen() &&
        !hamburgerContainer.contains(event.target) &&
        !isNavLink
      ) {
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
        // Also exclude navigation links from closing the menu on touch
        const isNavLink = event.target.closest(
          ".lower-nav-list-one, .lower-nav-list-two, .lower-nav-list-three, .lower-nav-list-four"
        );
        if (
          isMenuOpen() &&
          !hamburgerContainer.contains(event.target) &&
          !isNavLink
        ) {
          closeHamburgerMenu();
        }
      },
      { passive: true }
    );

    // Add specific event handlers for navigation links to ensure they work on mobile
    navItems.forEach(function (navItem) {
      // Handle click events on navigation links
      navItem.addEventListener("click", function (event) {
        // Allow the navigation to proceed and then close the menu
        // We use setTimeout to ensure navigation happens first
        setTimeout(function () {
          closeHamburgerMenu();
        }, 100);
      });

      // Handle touch events for better mobile support
      navItem.addEventListener(
        "touchend",
        function (event) {
          // Prevent the document touchstart handler from interfering
          event.stopPropagation();

          // Allow the navigation to proceed and then close the menu
          setTimeout(function () {
            closeHamburgerMenu();
          }, 100);
        },
        { passive: false }
      );
    });

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

/**
 * ACCOUNT DROPDOWN FUNCTIONALITY
 */
document.addEventListener("DOMContentLoaded", function () {
  const accDropdown = document.querySelector(".acc-dropdown");
  const accDropbtn = document.querySelector(".acc-dropbtn");
  const accCategoryDropdownTitle = document.querySelector(
    ".acc-category-dropdown-title"
  );
  const accDropdownContent = document.querySelector(".acc-dropdown-content");
  const accUpMenuArrow = document.querySelector(".acc-up-menu-arrow-black");

  // Use acc-dropbtn as the trigger element for clicks (to capture clicks on icon and title)
  const triggerElement = accDropbtn;
  const personAccountIcon = document.querySelector(".person-account-icon");

  if (accDropdown && triggerElement && accDropdownContent) {
    let isAccDropdownOpen = false;

    // Function to show dropdown (both mobile and desktop)
    function showAccDropdown() {
      accDropdownContent.style.display = "block";
      accDropdown.classList.add("show-dropdown");
      isAccDropdownOpen = true;
    }

    // Function to hide dropdown (both mobile and desktop)
    function hideAccDropdown() {
      accDropdownContent.style.display = "none";
      accDropdown.classList.remove("show-dropdown");
      isAccDropdownOpen = false;
    }

    // Add mobile functionality for touch devices OR mobile screen sizes
    if (isTouchDevice() || isMobileScreen()) {
      let touchTimeout;
      let hasTouched = false;

      // Function to handle toggle for mobile
      function handleMobileToggle(e) {
        e.preventDefault();
        e.stopPropagation();

        // Close hamburger menu if it's open
        if (window.closeHamburgerMenu) {
          window.closeHamburgerMenu();
        }

        if (isAccDropdownOpen) {
          hideAccDropdown();
        } else {
          showAccDropdown();
        }
      }

      // Simplified event handling for mobile devices
      // Use touchend as the primary trigger for touch devices
      if (isTouchDevice()) {
        // Handle touchstart for immediate visual feedback
        triggerElement.addEventListener("touchstart", function (e) {
          e.stopPropagation();
          hasTouched = true;
          // Don't preventDefault to allow iOS to handle touch properly
        });

        // Handle touchend for actual toggle
        triggerElement.addEventListener("touchend", function (e) {
          if (hasTouched) {
            e.preventDefault();
            e.stopPropagation();
            
            // Clear any existing timeout
            if (touchTimeout) {
              clearTimeout(touchTimeout);
            }
            
            // Use a small delay to prevent conflicts with click events
            touchTimeout = setTimeout(() => {
              // Close hamburger menu if it's open
              if (window.closeHamburgerMenu) {
                window.closeHamburgerMenu();
              }

              if (isAccDropdownOpen) {
                hideAccDropdown();
              } else {
                showAccDropdown();
              }
              hasTouched = false;
            }, 50);
          }
        });

        // Handle person account icon specifically for touch devices
        if (personAccountIcon) {
          personAccountIcon.addEventListener("touchstart", function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            hasTouched = true;
          });

          personAccountIcon.addEventListener("touchend", function (e) {
            if (hasTouched) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              
              // Clear any existing timeout
              if (touchTimeout) {
                clearTimeout(touchTimeout);
              }
              
              touchTimeout = setTimeout(() => {
                // Close hamburger menu if it's open
                if (window.closeHamburgerMenu) {
                  window.closeHamburgerMenu();
                }

                if (isAccDropdownOpen) {
                  hideAccDropdown();
                } else {
                  showAccDropdown();
                }
                hasTouched = false;
              }, 50);
            }
          });

          // Prevent click events on touch devices to avoid double triggering
          personAccountIcon.addEventListener("click", function (e) {
            if (hasTouched) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              return;
            }
            // Allow click for non-touch interactions (e.g., mouse on mobile browser)
            handleMobileToggle(e);
          });
        }

        // Prevent click events on triggerElement for touch devices
        triggerElement.addEventListener("click", function (e) {
          if (hasTouched) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          // Allow click for non-touch interactions
          handleMobileToggle(e);
        });
      } else {
        // For non-touch mobile devices (rare), use click events
        triggerElement.addEventListener("click", handleMobileToggle);
        
        if (personAccountIcon) {
          personAccountIcon.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Close hamburger menu if it's open
            if (window.closeHamburgerMenu) {
              window.closeHamburgerMenu();
            }

            if (isAccDropdownOpen) {
              hideAccDropdown();
            } else {
              showAccDropdown();
            }
          });
        }
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
    } else {
      // Desktop functionality - both hover AND click behavior

      // Click functionality for desktop
      triggerElement.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (isAccDropdownOpen) {
          hideAccDropdown();
        } else {
          showAccDropdown();
        }
      });

      // Hover functionality for desktop
      accDropdown.addEventListener("mouseenter", function () {
        showAccDropdown();
      });

      accDropdown.addEventListener("mouseleave", function () {
        hideAccDropdown();
      });

      // Also handle hover on the dropdown content itself to keep it visible
      accDropdownContent.addEventListener("mouseenter", function () {
        showAccDropdown();
      });

      accDropdownContent.addEventListener("mouseleave", function () {
        hideAccDropdown();
      });

      // Close dropdown when clicking outside (desktop)
      document.addEventListener("click", function (e) {
        if (isAccDropdownOpen && !accDropdown.contains(e.target)) {
          hideAccDropdown();
        }
      });
    }
  }
});

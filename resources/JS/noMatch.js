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

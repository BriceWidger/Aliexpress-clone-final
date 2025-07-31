// One-time script to add updateSearchBars.js to all HTML files
// Run this in your browser console while viewing your project locally

// This script will check each HTML file and add the updateSearchBars.js if it's missing
// You can run this by copying and pasting into your browser's DevTools console

function addUpdateSearchBarsToAllPages() {
    // List of all your HTML files (you may need to update this list)
    const htmlFiles = [
        '/index.html',
        '/noMatch.html',
        '/shoppingCartEmpty.html',
        '/signIn.html',
        '/Checkout_Pages/shoppingCart.html',
        '/Checkout_Pages/checkOut.html',
        '/Checkout_Pages/buyNow_checkOut.html',
        '/Deals_Pages/fiftyOff.html',
        '/Deals_Pages/freeShipping.html',
        '/Deals_Pages/superDeals.html',
        '/Deals_Pages/underTwo.html',
        // Add more files as needed
    ];
    
    // For each file, we would need server-side access to modify them
    // Since this is client-side JavaScript, we can only suggest the approach
    
    console.log('To add updateSearchBars.js to all HTML files, you need to:');
    console.log('1. Add this line after the index.js script tag in each HTML file:');
    console.log('   <script src="/resources/JS/updateSearchBars.js"></script>');
    console.log('');
    console.log('2. Or use a text editor\'s find and replace feature:');
    console.log('   Find: <script src="/resources/JS/index.js"></script>');
    console.log('   Replace with: <script src="/resources/JS/index.js"></script>\\n  <script src="/resources/JS/updateSearchBars.js"></script>');
}

// Alternative: Run this on any page to test the updateSearchBars functionality
function testUpdateSearchBars() {
    const searchInputs = document.querySelectorAll('input[placeholder="Search items.."]');
    
    searchInputs.forEach(input => {
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocapitalize', 'none');
        input.setAttribute('spellcheck', 'false');
        input.setAttribute('inputmode', 'search');
        input.setAttribute('enterkeyhint', 'search');
        input.setAttribute('role', 'searchbox');
        input.setAttribute('aria-label', 'Search items');
    });
    
    console.log(`✅ Updated ${searchInputs.length} search bar(s) on this page with mobile-friendly attributes`);
    return searchInputs.length;
}

// Expose functions globally
window.addUpdateSearchBarsToAllPages = addUpdateSearchBarsToAllPages;
window.testUpdateSearchBars = testUpdateSearchBars;

console.log('📱 Search Bar Update Helper Loaded!');
console.log('Run testUpdateSearchBars() to test on current page');
console.log('Run addUpdateSearchBarsToAllPages() for file modification instructions');

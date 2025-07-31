// JavaScript to automatically update search bars with mobile-friendly attributes
// This script runs on page load and ensures all search inputs have proper mobile compatibility

document.addEventListener('DOMContentLoaded', function() {
    // Find all input elements with the search placeholder
    const searchInputs = document.querySelectorAll('input[placeholder="Search items.."]');
    
    searchInputs.forEach(input => {
        // Add mobile-friendly attributes if they don't already exist
        if (!input.hasAttribute('autocomplete')) {
            input.setAttribute('autocomplete', 'off');
        }
        if (!input.hasAttribute('autocapitalize')) {
            input.setAttribute('autocapitalize', 'none');
        }
        if (!input.hasAttribute('spellcheck')) {
            input.setAttribute('spellcheck', 'false');
        }
        
        // Also add inputmode and enterkeyhint for better mobile experience
        if (!input.hasAttribute('inputmode')) {
            input.setAttribute('inputmode', 'search');
        }
        if (!input.hasAttribute('enterkeyhint')) {
            input.setAttribute('enterkeyhint', 'search');
        }
        if (!input.hasAttribute('role')) {
            input.setAttribute('role', 'searchbox');
        }
        if (!input.hasAttribute('aria-label')) {
            input.setAttribute('aria-label', 'Search items');
        }
    });
    
    if (searchInputs.length > 0) {
        console.log(`Updated ${searchInputs.length} search bar(s) with mobile-friendly attributes`);
    }
});

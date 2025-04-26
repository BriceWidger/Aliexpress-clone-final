// Title: Redirect to PayPal's login page
// Description: This code snippet adds an event listener to a link with the class "confirm-link". When the link is clicked, it shows a confirmation prompt with a message. If the user confirms, it opens the PayPal login page in a new tab.

document.querySelector('.confirm-link').addEventListener('click', function (event) {
    event.preventDefault();

    if (confirm('Redirecting to PayPal\'s login page. No need to enter information or to sign in. FOR DEMO PURPOSES ONLY! \n\nClicking "OK" redirects to PayPal login. Clicking "Cancel" keeps you on current page.')) {
        window.open('https://www.paypal.com/us/signin', '_blank');
    }
});
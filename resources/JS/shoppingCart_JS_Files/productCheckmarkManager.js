/**
 * THIS FILE MANAGES THE FUNCTIONALITIES RELATED TO THE ALL CHECKMARK ICONS
 * 
 */

/** *
Title: Code for Managing Z-Index of Check Mark Icons

Essentially, this script ensures that when any of the product icons have a z-index of -1, the select-all icon also has a z-index of -1.

Additionally, the select-all icon can only have a z-index of 1 if all the product icons have a z-index of 1. 
*/
const selectCheckMark_zdc = document.querySelector('.select-all-check-mark-icon-SC');

const productCheckMarks_zdc = Array.from(
    document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC')
);

const observers_zdc = productCheckMarks_zdc.map(productCheckMark_zdc => {
    const observer_zdc = new MutationObserver(mutationsList => {
        const zIndexes_zdc = productCheckMarks_zdc.map(productCheckMark_zdc => parseInt(productCheckMark_zdc.style.zIndex));
        const anyZIndexIsMinusOne_zdc = zIndexes_zdc.some(zIndex_zdc => zIndex_zdc === -1);
        selectCheckMark_zdc.style.zIndex = anyZIndexIsMinusOne_zdc ? -1 : 'auto';
    });

    observer_zdc.observe(productCheckMark_zdc, { attributes: true });
    return observer_zdc;
});

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/** 
This block of code handles the functionality of the select all check mark icon and the product check mark icons, which is used to clear the cart.

When the select all check mark icon is clicked, it performs the following actions:

1. Hides the select all check mark icon and all product check mark icons by setting their z-index to '-1', indicating that they are no longer selected.

2. Resets the cart number checkout value to '0' and stores its previous value in local storage for later retrieval.

3. Disables the checkout button by changing its style to indicate that it is not clickable.

This action effectively clears the cart and resets it to its initial state. 
*/

const selectAllCheckMarkIconSC = document.querySelector('.select-all-check-mark-icon-SC');
const productCheckMarkIconsSC = document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC');

const cpCheckoutButton = document.querySelector('.cp-checkout-button');

selectAllCheckMarkIconSC.addEventListener('click', () => {
    selectAllCheckMarkIconSC.style.zIndex = '-1';
    productCheckMarkIconsSC.forEach(icon => {
        icon.style.zIndex = '-1';
    });

    cpCheckoutButton.style.color = 'rgb(255, 255, 255)';
    cpCheckoutButton.style.background = 'rgb(255, 181, 187)';
    cpCheckoutButton.style.marginTop = '16px';
    cpCheckoutButton.style.padding = '10px 12px';
    cpCheckoutButton.style.border = '0px solid rgb(0, 0, 0)';
    cpCheckoutButton.style.cursor = 'not-allowed';
    cpCheckoutButton.style.transition = 'all .3s cubic-bezier(.645, .045, .355, 1)';
});

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**  
This block of code handles the functionality of the select all empty circle check mark icon, which is used to restore the original state of the cart.

When the select all empty circle check mark icon is clicked, it performs the following actions:

1. Reverts the select all check mark icon and all product check mark icons to their original visible state by setting their z-index to '1'.

2. Restores the original cart number checkout value from local storage and updates the DOM.

3. Enables the checkout button by changing its style to indicate that it is clickable.
*/

const selectAllEmptyCircleCheckMarkIconSC = document.querySelector('.select-all-empty-circle-check-mark-icon-sc');

selectAllEmptyCircleCheckMarkIconSC.addEventListener('click', function () {
    document.querySelector('.select-all-check-mark-icon-SC').style.zIndex = 1;
    document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC').forEach(function (element) {
        element.style.zIndex = 'auto';
    });

    document.querySelector('.cp-checkout-button').style.display = 'flex';
    document.querySelector('.cp-checkout-button').style.alignItems = 'center';
    document.querySelector('.cp-checkout-button').style.justifyContent = 'center';
    document.querySelector('.cp-checkout-button').style.background = '#fd384f';
    document.querySelector('.cp-checkout-button').style.marginTop = '16px';
    document.querySelector('.cp-checkout-button').style.padding = '10px 12px';
    document.querySelector('.cp-checkout-button').style.height = '44px';
    document.querySelector('.cp-checkout-button').style.width = '332px';
    document.querySelector('.cp-checkout-button').style.borderRadius = '24px';
    document.querySelector('.cp-checkout-button').style.border = '0px solid rgb(0, 0, 0)';
    document.querySelector('.cp-checkout-button').style.cursor = 'pointer';
});

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
Toggles the z-index of the individual product check mark icons based on the select all check mark icon.

When the select all check mark icon is clicked, this function sets the z-index of all the individual product check mark icons to match the z-index of the select all check mark icon.
*/

function toggleProductCheckMarkIconsZIndex() {
    const selectAllCheckMarkIcon = document.querySelector('.select-all-check-mark-icon-SC'); const productCheckMarkIconsArray = document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC');
    const getCheckMarkIconZIndex = (icon) => parseInt(window.getComputedStyle(icon).zIndex) || 1;

    productCheckMarkIconsArray.forEach(icon => icon.style.zIndex = getCheckMarkIconZIndex(selectAllCheckMarkIcon));
}

document.querySelector('.select-all-check-mark-icon-SC').addEventListener('click', toggleProductCheckMarkIconsZIndex);

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function updateCheckoutCountValue() {
    const selectAllCheckMarkIcon = document.querySelector('.select-all-check-mark-icon-SC');
    const productCheckMarkIconsArray = document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC');
    const cartProductDetailsWraps = document.querySelectorAll('.cart-product-details-wrap-one, .cart-product-details-wrap-two, .cart-product-details-wrap-three, .cart-product-details-wrap-four, .cart-product-details-wrap-five, .cart-product-details-wrap-six, .cart-product-details-wrap-seven, .cart-product-details-wrap-eight, .cart-product-details-wrap-nine, .cart-product-details-wrap-ten, .cart-product-details-wrap-eleven');

    const visibleCartProductDetailsWraps = Array.from(cartProductDetailsWraps).filter((wrap) => wrap.offsetParent !== null);

    const getCheckMarkIconZIndex = (icon) => parseInt(window.getComputedStyle(icon).zIndex) || 1;

    let count = 0;
    productCheckMarkIconsArray.forEach((icon, index) => {
        const correspondingWrap = visibleCartProductDetailsWraps[index];
        if (correspondingWrap && (getCheckMarkIconZIndex(icon) === 1 || getCheckMarkIconZIndex(icon) === '' || getCheckMarkIconZIndex(icon) === 'auto')) {
            count++;
        }
    });

    document.querySelector('#cart-number-checkout').textContent = count;
}

setInterval(updateCheckoutCountValue, 0);

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**

Hides or shows the "Delete selected items" text in the cart header based on the z-index of the individual checkmark icons.

If all the individual checkmark icons have a negative z-index (i.e., are behind something), the "Delete selected items" text is hidden. Otherwise, the "Delete selected items" text is shown.

This code continuously checks the z-index of the checkmark icons and updates the visibility of the "Delete selected items" text accordingly. */

function hideSelectAllTextIfAllIndvidualCheckmarksHaveNegativeZIndex() {
    var cartProductDetailsWraps = document.querySelectorAll('.cart-product-details-wrap-one, .cart-product-details-wrap-two, .cart-product-details-wrap-three, .cart-product-details-wrap-four, .cart-product-details-wrap-five, .cart-product-details-wrap-six, .cart-product-details-wrap-seven, .cart-product-details-wrap-eight, .cart-product-details-wrap-nine, .cart-product-details-wrap-ten, .cart-product-details-wrap-eleven');

    var allHaveZIndexMinusOne = true;

    cartProductDetailsWraps.forEach(function (cartProductDetailsWrap) {
        if (cartProductDetailsWrap.offsetParent !== null) {
            var checkMarkIcon = cartProductDetailsWrap.querySelector('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC');
            var zIndex = getComputedStyle(checkMarkIcon).zIndex;
            if (zIndex !== '-1') {
                allHaveZIndexMinusOne = false;
            }
        }
    });

    if (allHaveZIndexMinusOne) {
        document.querySelector('.cart-header-delete-items-text').style.display = 'none';
    } else {
        document.querySelector('.cart-header-delete-items-text').style.display = 'block';
    }
}

setInterval(hideSelectAllTextIfAllIndvidualCheckmarksHaveNegativeZIndex, 0);

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * Toggles the z-index of check mark icons for multiple products based on user clicks.
 * 
 * This script listens for click events on the document and checks if the target element
 * has a specific class. If it does, it updates the z-index of the corresponding check mark icon.
 * 
 * The script is repeated for 11 different products, each with its own set of icons and counters.
 */

const productOneCheckMarkIcon = document.querySelectorAll('.product-one-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countOne = parseFloat(document.querySelector('#productCountOne').textContent);

    if (target.classList.contains('product-one-empty-circle-check-mark-icon-sc')) {
        productOneCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-one-check-mark-icon-SC')) {
        productOneCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productTwoCheckMarkIcon = document.querySelectorAll('.product-two-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countTwo = parseFloat(document.querySelector('#productCountTwo').textContent);

    if (target.classList.contains('product-two-empty-circle-check-mark-icon-sc')) {
        productTwoCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-two-check-mark-icon-SC')) {
        productTwoCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productThreeCheckMarkIcon = document.querySelectorAll('.product-three-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countThree = parseFloat(document.querySelector('#productCountThree').textContent);

    if (target.classList.contains('product-three-empty-circle-check-mark-icon-sc')) {
        productThreeCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-three-check-mark-icon-SC')) {
        productThreeCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productFourCheckMarkIcon = document.querySelectorAll('.product-four-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countFour = parseFloat(document.querySelector('#productCountFour').textContent);

    if (target.classList.contains('product-four-empty-circle-check-mark-icon-sc')) {
        productFourCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-four-check-mark-icon-SC')) {
        productFourCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productFiveCheckMarkIcon = document.querySelectorAll('.product-five-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countFive = parseFloat(document.querySelector('#productCountFive').textContent);

    if (target.classList.contains('product-five-empty-circle-check-mark-icon-sc')) {
        productFiveCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-five-check-mark-icon-SC')) {
        productFiveCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productSixCheckMarkIcon = document.querySelectorAll('.product-six-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countSix = parseFloat(document.querySelector('#productCountSix').textContent);

    if (target.classList.contains('product-six-empty-circle-check-mark-icon-sc')) {
        productSixCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-six-check-mark-icon-SC')) {
        productSixCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productSevenCheckMarkIcon = document.querySelectorAll('.product-seven-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countSeven = parseFloat(document.querySelector('#productCountSeven').textContent);

    if (target.classList.contains('product-seven-empty-circle-check-mark-icon-sc')) {
        productSevenCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-seven-check-mark-icon-SC')) {
        productSevenCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productEightCheckMarkIcon = document.querySelectorAll('.product-eight-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countEight = parseFloat(document.querySelector('#productCountEight').textContent);

    if (target.classList.contains('product-eight-empty-circle-check-mark-icon-sc')) {
        productEightCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-eight-check-mark-icon-SC')) {
        productEightCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productNineCheckMarkIcon = document.querySelectorAll('.product-nine-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countNine = parseFloat(document.querySelector('#productCountNine').textContent);

    if (target.classList.contains('product-nine-empty-circle-check-mark-icon-sc')) {
        productNineCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-nine-check-mark-icon-SC')) {
        productNineCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productTenCheckMarkIcon = document.querySelectorAll('.product-ten-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countTen = parseFloat(document.querySelector('#productCountTen').textContent);

    if (target.classList.contains('product-ten-empty-circle-check-mark-icon-sc')) {
        productTenCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-ten-check-mark-icon-SC')) {
        productTenCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

const productElevenCheckMarkIcon = document.querySelectorAll('.product-eleven-check-mark-icon-SC');

document.addEventListener('click', function (event) {
    const target = event.target;
    const countEleven = parseFloat(document.querySelector('#productCountEleven').textContent);

    if (target.classList.contains('product-eleven-empty-circle-check-mark-icon-sc')) {
        productElevenCheckMarkIcon.forEach(icon => icon.style.zIndex = 'auto');
    } else if (target.classList.contains('product-eleven-check-mark-icon-SC')) {
        productElevenCheckMarkIcon.forEach(icon => icon.style.zIndex = -1);
    }
});

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * Creates disabled elements for a product based on the provided selectors.
 * 
 * @param {string} checkMarkIconSelector - The selector for the check mark icon.
 * @param {string} minusIconSelector - The selector for the minus icon.
 * @param {string} productCountId - The ID of the product count element.
 * @param {string} plusIconSelector - The selector for the plus icon.
 * @param {function} decrementFunction - The function to decrement the product count.
 * @param {function} incrementFunction - The function to increment the product count.
 * @returns {object} An object with the disableElements and enableElements functions.
 */
function createDisabledElements(
    checkMarkIconSelector,
    minusIconSelector,
    productCountId,
    plusIconSelector,
    decrementFunction,
    incrementFunction
) {
    // Query the DOM for the elements
    const checkMarkIcon = document.querySelector(checkMarkIconSelector);
    const minusIcon = document.querySelector(minusIconSelector);
    const productCount = document.getElementById(productCountId);
    const plusIcon = document.querySelector(plusIconSelector);

    /**
     * Disables the elements by setting their disabled property to true,
     * applying styles, and removing event listeners.
     */
    function disableElements() {
        minusIcon.disabled = true;
        productCount.disabled = true;
        plusIcon.disabled = true;

        const styles = 'opacity: 0.5;';
        minusIcon.style.cssText = styles;
        productCount.style.cssText = styles;
        plusIcon.style.cssText = styles;

        minusIcon.style.cursor = 'not-allowed';
        plusIcon.style.cursor = 'not-allowed';

        minusIcon.addEventListener('mouseover', function () {
            minusIcon.style.cursor = 'not-allowed';
            minusIcon.onclick = null;
        });

        plusIcon.addEventListener('mouseover', function () {
            plusIcon.style.cursor = 'not-allowed';
            plusIcon.onclick = null;
        });

        minusIcon.onclick = null;
        plusIcon.onclick = null;

        productCount.style.cursor = 'auto';
    }

    /**
     * Enables the elements by setting their disabled property to false,
     * removing styles, and adding event listeners.
     */
    function enableElements() {
        minusIcon.disabled = false;
        productCount.disabled = false;
        plusIcon.disabled = false;

        minusIcon.style.cssText = '';
        productCount.style.cssText = '';
        plusIcon.style.cssText = '';

        minusIcon.style.cursor = 'pointer';
        plusIcon.style.cursor = 'pointer';

        minusIcon.addEventListener('mouseover', function () {
            minusIcon.style.cursor = 'pointer';
            minusIcon.onclick = decrementFunction;
        });

        plusIcon.addEventListener('mouseover', function () {
            plusIcon.style.cursor = 'pointer';
            plusIcon.onclick = incrementFunction;
        });

        minusIcon.addEventListener('mouseover', function () {
            minusIcon.style.cursor = 'pointer';
        });

        plusIcon.addEventListener('mouseover', function () {
            plusIcon.style.cursor = 'pointer';
        });
    }

    // Create a MutationObserver to observe changes in the check mark icon's style
    const observer = new MutationObserver((mutationsList, observer) => {
        const isDisplayed = window.getComputedStyle(checkMarkIcon).zIndex === '-1';
        if (isDisplayed) {
            disableElements();
        } else {
            enableElements();
        }
    });

    observer.observe(checkMarkIcon, { attributes: true, attributeFilter: ['style'] });

    return {
        disableElements,
        enableElements,
    };
}

// Create disabled elements for each product
const productOne = createDisabledElements(
    '.product-one-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-one',
    'productCountOne',
    '.quantity-plus-icons-radius-co-one',
    decrementProductCountOne,
    incrementProductCountOne
);

const productTwo = createDisabledElements(
    '.product-two-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-two',
    'productCountTwo',
    '.quantity-plus-icons-radius-co-two',
    decrementProductCountTwo,
    incrementProductCountTwo
);

const productThree = createDisabledElements(
    '.product-three-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-three',
    'productCountThree',
    '.quantity-plus-icons-radius-co-three',
    decrementProductCountThree,
    incrementProductCountThree
);

const productFour = createDisabledElements(
    '.product-four-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-four',
    'productCountFour',
    '.quantity-plus-icons-radius-co-four',
    decrementProductCountFour,
    incrementProductCountFour
);

const productFive = createDisabledElements(
    '.product-five-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-five',
    'productCountFive',
    '.quantity-plus-icons-radius-co-five',
    decrementProductCountFive,
    incrementProductCountFive
);

const productSix = createDisabledElements(
    '.product-six-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-six',
    'productCountSix',
    '.quantity-plus-icons-radius-co-six',
    decrementProductCountSix,
    incrementProductCountSix
);

const productSeven = createDisabledElements(
    '.product-seven-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-seven',
    'productCountSeven',
    '.quantity-plus-icons-radius-co-seven',
    decrementProductCountSeven,
    incrementProductCountSeven
);

const productEight = createDisabledElements(
    '.product-eight-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-eight',
    'productCountEight',
    '.quantity-plus-icons-radius-co-eight',
    decrementProductCountEight,
    incrementProductCountEight
);

const productNine = createDisabledElements(
    '.product-nine-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-nine',
    'productCountNine',
    '.quantity-plus-icons-radius-co-nine',
    decrementProductCountNine,
    incrementProductCountNine
);

const productTen = createDisabledElements(
    '.product-ten-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-ten',
    'productCountTen',
    '.quantity-plus-icons-radius-co-ten',
    decrementProductCountTen,
    incrementProductCountTen
);

const productEleven = createDisabledElements(
    '.product-eleven-check-mark-icon-SC',
    '.quantity-minus-icons-radius-co-eleven',
    'productCountEleven',
    '.quantity-plus-icons-radius-co-eleven',
    decrementProductCountEleven,
    incrementProductCountEleven
);

/**
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 
 */

/**
 * Product Price Toggle and Update Script (TOGGLES PRICES FOR INDIVIDUAL CHECKMARKS)
 *
 * This script toggles and updates product prices based on user interactions.
 * It uses local storage to store and retrieve price values.
 *
 * The script consists of two main functions:
 * 1. toggleCheckMarkPrice: Toggles the price of a product to $0.00 when a check mark icon is clicked.
 * 2. addPriceBack: Updates the price of a product to its original value when an empty circle check mark icon is clicked.
 *
 * The script also defines product price values as objects and adds event listeners to corresponding HTML elements.
 */

function toggleCheckMarkPrice(product) {
    const priceTypes = ['reg', 'fiftyOff', 'underTwo', 'superDeals'];
    priceTypes.forEach((type) => {
        const key = `${product}_${type}`;
        if (localStorage.getItem(key)) {
            localStorage.setItem(`${key}_original`, localStorage.getItem(key));
            localStorage.setItem(key, '$0.00');
            document.querySelector(`.${product}_${type}`).textContent = '$0.00';
        }
    });
}

function addPriceBack(product, values) {
    Object.keys(values).forEach((key) => {
        const priceKey = `${product}_${key}`;
        if (localStorage.getItem(`${priceKey}_original`)) {
            localStorage.setItem(priceKey, localStorage.getItem(`${priceKey}_original`));
            document.querySelector(`.${product}_${key}`).textContent = localStorage.getItem(priceKey);
            localStorage.removeItem(`${priceKey}_original`);
        }
    });
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.endsWith('_original')) {
            localStorage.removeItem(key);
        }
    }
}

function restoreOriginalValues_productPrices() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.endsWith('_original')) {
            const originalKey = key.replace('_original', '');
            localStorage.setItem(originalKey, localStorage.getItem(key));
            localStorage.removeItem(key);
        }
    }
}

document.addEventListener('DOMContentLoaded', restoreOriginalValues_productPrices);

const productOneValues = {
    reg: '$23.50',
    fiftyOff: '$11.75',
    underTwo: '$3.68',
    superDeals: '$9.40',
};

const productTwoValues = {
    reg: '$39.97',
    fiftyOff: '$19.99',
    underTwo: '$9.99',
    superDeals: '$14.79',
};

const productThreeValues = {
    reg: '$269.99',
    fiftyOff: '$135.00',
    underTwo: '$5.77',
    superDeals: '$113.40',
};

const productFourValues = {
    reg: '$17.98',
    fiftyOff: '$8.99',
    underTwo: '$5.99',
    superDeals: '$5.39',
};

const productFiveValues = {
    reg: '$23.88',
    fiftyOff: '$11.94',
    underTwo: '$1.97',
    superDeals: '$9.31',
};

const productSixValues = {
    reg: '$149.95',
    fiftyOff: '$74.98',
    underTwo: '$9.95',
    superDeals: '$61.48',
};

const productSevenValues = {
    reg: '$382.93',
    fiftyOff: '$191.47',
    underTwo: '$9.99',
    superDeals: '$179.98',
};

const productEightValues = {
    reg: '$24.99',
    fiftyOff: '$12.50',
    underTwo: '$2.83',
    superDeals: '$8.50',
};

const productNineValues = {
    reg: '$49.95',
    fiftyOff: '$24.98',
    underTwo: '$4.99',
    superDeals: '$17.98',
};

const productTenValues = {
    reg: '$17.09',
    fiftyOff: '$8.55',
    underTwo: '$2.74',
    superDeals: '$7.69',
};

const productElevenValues = {
    reg: '$8.98',
    fiftyOff: '$4.49',
    underTwo: '$1.99',
    superDeals: '$4.40',
};

document.querySelector('.product-one-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceOne'));
document.querySelector('.product-one-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceOne', productOneValues));

document.querySelector('.product-two-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceTwo'));
document.querySelector('.product-two-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceTwo', productTwoValues));

document.querySelector('.product-three-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceThree'));
document.querySelector('.product-three-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceThree', productThreeValues));

document.querySelector('.product-four-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceFour'));
document.querySelector('.product-four-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceFour', productFourValues));

document.querySelector('.product-five-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceFive'));
document.querySelector('.product-five-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceFive', productFiveValues));

document.querySelector('.product-six-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceSix'));
document.querySelector('.product-six-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceSix', productSixValues));

document.querySelector('.product-seven-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceSeven'));
document.querySelector('.product-seven-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceSeven', productSevenValues));

document.querySelector('.product-eight-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceEight'));
document.querySelector('.product-eight-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceEight', productEightValues));

document.querySelector('.product-nine-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceNine'));
document.querySelector('.product-nine-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceNine', productNineValues));

document.querySelector('.product-ten-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceTen'));
document.querySelector('.product-ten-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceTen', productTenValues));

document.querySelector('.product-eleven-check-mark-icon-SC').addEventListener('click', () => toggleCheckMarkPrice('productPriceEleven'));
document.querySelector('.product-eleven-empty-circle-check-mark-icon-sc').addEventListener('click', () => addPriceBack('productPriceEleven', productElevenValues));


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/** * *

Makes it so that if productPrice{number}_original is in local storage and the page is refreshed, then its value will replace any of its respective #cp-prices on the page.

For example, if productPriceOne_original is in local storage and the page is refreshed, then its value in local storage will replace #cp-price-one on the web page.

Without applying this code, what would happen is that if I refreshed the page while the product checkmarks were empty, then the cp-prices would be 0.00 after refresh. This code keeps the cp-prices the same regardless.

*/


function cpPrice_restore_SC() {
    const keys = [
        'productPriceOne_reg',
        'productPriceOne_fiftyOff',
        'productPriceOne_superDeals',
        'productPriceOne_underTwo',
        'productPriceTwo_reg',
        'productPriceTwo_fiftyOff',
        'productPriceTwo_superDeals',
        'productPriceTwo_underTwo',
        'productPriceThree_reg',
        'productPriceThree_fiftyOff',
        'productPriceThree_superDeals',
        'productPriceThree_underTwo',
        'productPriceFour_reg',
        'productPriceFour_fiftyOff',
        'productPriceFour_superDeals',
        'productPriceFour_underTwo',
        'productPriceFive_reg',
        'productPriceFive_fiftyOff',
        'productPriceFive_superDeals',
        'productPriceFive_underTwo',
        'productPriceSix_reg',
        'productPriceSix_fiftyOff',
        'productPriceSix_superDeals',
        'productPriceSix_underTwo',
        'productPriceSeven_reg',
        'productPriceSeven_fiftyOff',
        'productPriceSeven_superDeals',
        'productPriceSeven_underTwo',
        'productPriceEight_reg',
        'productPriceEight_fiftyOff',
        'productPriceEight_superDeals',
        'productPriceEight_underTwo',
        'productPriceNine_reg',
        'productPriceNine_fiftyOff',
        'productPriceNine_superDeals',
        'productPriceNine_underTwo',
        'productPriceTen_reg',
        'productPriceTen_fiftyOff',
        'productPriceTen_superDeals',
        'productPriceTen_underTwo',
        'productPriceEleven_reg',
        'productPriceEleven_fiftyOff',
        'productPriceEleven_superDeals',
        'productPriceEleven_underTwo'
    ];

    keys.forEach(key => {
        if (localStorage.getItem(`${key}_original`) !== null) {
            localStorage.setItem(key, localStorage.getItem(`${key}_original`));
        }
    });
}

window.addEventListener('beforeunload', cpPrice_restore_SC);

/**
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/**
 
When the "Select all items" checkmark is clicked on the shopping cart page, this function sets all product prices in local storage to $0.00, effectively resetting the subtotal to $0.

Conversely, when the "Select all items" empty circle checkmark is clicked, this function restores the original product prices in local storage, updating the subtotal accordingly.

*/

toggleAllPrices_selectAll: function toggleAllPrices_selectAll(toggleToZero) {
    const products = [
        'productPriceOne',
        'productPriceTwo',
        'productPriceThree',
        'productPriceFour',
        'productPriceFive',
        'productPriceSix',
        'productPriceSeven',
        'productPriceEight',
        'productPriceNine',
        'productPriceTen',
        'productPriceEleven'
    ];

    if (toggleToZero) {
        products.forEach(product => {
            const values = {
                reg: localStorage.getItem(`${product}_reg`),
                fiftyOff: localStorage.getItem(`${product}_fiftyOff`),
                underTwo: localStorage.getItem(`${product}_underTwo`),
                superDeals: localStorage.getItem(`${product}_superDeals`)
            };

            Object.keys(values).forEach(key => {
                if (values[key]) {
                    localStorage.setItem(`${product}_${key}_original`, values[key]);
                }
            });
        });

        products.forEach(product => {
            const values = {
                reg: localStorage.getItem(`${product}_reg`),
                fiftyOff: localStorage.getItem(`${product}_fiftyOff`),
                underTwo: localStorage.getItem(`${product}_underTwo`),
                superDeals: localStorage.getItem(`${product}_superDeals`)
            };

            Object.keys(values).forEach(key => {
                if (values[key]) {
                    localStorage.setItem(`${product}_${key}`, '$0.00');
                    const elements = document.querySelectorAll(`.${product}_${key}`);
                    elements.forEach(element => {
                        element.textContent = '$0.00';
                    });
                }
            });
        });

        localStorage.setItem('allPricesToggled', true);
    } else {
        products.forEach(product => {
            const values = {
                reg: localStorage.getItem(`${product}_reg_original`),
                fiftyOff: localStorage.getItem(`${product}_fiftyOff_original`),
                underTwo: localStorage.getItem(`${product}_underTwo_original`),
                superDeals: localStorage.getItem(`${product}_superDeals_original`)
            };

            Object.keys(values).forEach(key => {
                if (values[key]) {
                    localStorage.setItem(`${product}_${key}`, values[key]);
                    const elements = document.querySelectorAll(`.${product}_${key}`);
                    elements.forEach(element => {
                        element.textContent = values[key];
                    });
                }
            });
        });

        localStorage.removeItem('allPricesToggled');
    }
}

document.querySelector('.select-all-check-mark-icon-SC').addEventListener('click', () => {
    toggleAllPrices_selectAll(true);
});

document.querySelector('.select-all-empty-circle-check-mark-icon-sc').addEventListener('click', () => {
    toggleAllPrices_selectAll(false);
});
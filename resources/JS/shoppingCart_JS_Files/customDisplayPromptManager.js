/**
 * THIS FILE HANDLES ALL ASPECTS FOR custom-prompt-co-individualCount PROMPT
 * 
 * 
 */

/**
 * Adds a click event listener to the minus icon element to display a custom prompt when the product count is 0.
 *
 * @param {string} minusIconSelector - The CSS selector for the minus icon element.
 * @param {string} productCountSelector - The CSS selector for the product count element.
 * @param {string} customPromptSelector - The CSS selector for the custom prompt element.
 */

function addClickListener(minusIconSelector, productCountSelector, customPromptSelector) {
    const minusIcon = document.querySelector(minusIconSelector);

    if (minusIcon) {
        minusIcon.addEventListener('click', function () {
            const productCount = document.querySelector(productCountSelector).innerHTML;
            const customPrompt = document.querySelector(customPromptSelector);

            if (productCount === '0') {
                customPrompt.style.display = 'block';
            }
        });
    }
}

addClickListener('.quantity-minus-icons-radius-co-one', '#productCountOne', '#custom-prompt-co-individualCount-one');
addClickListener('.quantity-minus-icons-radius-co-two', '#productCountTwo', '#custom-prompt-co-individualCount-two');
addClickListener('.quantity-minus-icons-radius-co-three', '#productCountThree', '#custom-prompt-co-individualCount-three');
addClickListener('.quantity-minus-icons-radius-co-four', '#productCountFour', '#custom-prompt-co-individualCount-four');
addClickListener('.quantity-minus-icons-radius-co-five', '#productCountFive', '#custom-prompt-co-individualCount-five');
addClickListener('.quantity-minus-icons-radius-co-six', '#productCountSix', '#custom-prompt-co-individualCount-six');
addClickListener('.quantity-minus-icons-radius-co-seven', '#productCountSeven', '#custom-prompt-co-individualCount-seven');
addClickListener('.quantity-minus-icons-radius-co-eight', '#productCountEight', '#custom-prompt-co-individualCount-eight');
addClickListener('.quantity-minus-icons-radius-co-nine', '#productCountNine', '#custom-prompt-co-individualCount-nine');
addClickListener('.quantity-minus-icons-radius-co-ten', '#productCountTen', '#custom-prompt-co-individualCount-ten');
addClickListener('.quantity-minus-icons-radius-co-eleven', '#productCountEleven', '#custom-prompt-co-individualCount-eleven');

/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * This code snippet sets up event listeners for the cancel and close buttons
 * on the page. When either button is clicked, it decrements the product count
 * and updates the multiplied subtotal to maintain the same subtotal value.
 * This ensures that the subtotal remains the same when a custom prompt appears,
 * and the product count is incremented to display 1 after the prompt closes.
 */

//One 
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountOne');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-one').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -23.50;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn1 = document.querySelector('#cancel-btn-prompt-individualCount-one');
    const closeBtn1 = document.querySelector('#close-btn-individualCount-one');

    // Add event listeners to the cancel and close buttons
    cancelBtn1.addEventListener('click', incrementProductCountOne);
    closeBtn1.addEventListener('click', incrementProductCountOne);
});

// Two
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountTwo');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-two').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -39.97;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn2 = document.querySelector('#cancel-btn-prompt-individualCount-two');
    const closeBtn2 = document.querySelector('#close-btn-individualCount-two');

    // Add event listeners to the cancel and close buttons
    cancelBtn2.addEventListener('click', incrementProductCountTwo);
    closeBtn2.addEventListener('click', incrementProductCountTwo);
});

// Three
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountThree');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-three').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -269.99;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn3 = document.querySelector('#cancel-btn-prompt-individualCount-three');
    const closeBtn3 = document.querySelector('#close-btn-individualCount-three');

    // Add event listeners to the cancel and close buttons
    cancelBtn3.addEventListener('click', incrementProductCountThree);
    closeBtn3.addEventListener('click', incrementProductCountThree);
});

// Four
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountFour');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-four').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -17.98;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn4 = document.querySelector('#cancel-btn-prompt-individualCount-four');
    const closeBtn4 = document.querySelector('#close-btn-individualCount-four');

    // Add event listeners to the cancel and close buttons
    cancelBtn4.addEventListener('click', incrementProductCountFour);
    closeBtn4.addEventListener('click', incrementProductCountFour);
});

// Five
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountFive');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-five').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -23.88;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn5 = document.querySelector('#cancel-btn-prompt-individualCount-five');
    const closeBtn5 = document.querySelector('#close-btn-individualCount-five');

    // Add event listeners to the cancel and close buttons
    cancelBtn5.addEventListener('click', incrementProductCountFive);
    closeBtn5.addEventListener('click', incrementProductCountFive);
});

// Six
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountSix');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-six').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -149.95;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn6 = document.querySelector('#cancel-btn-prompt-individualCount-six');
    const closeBtn6 = document.querySelector('#close-btn-individualCount-six');

    // Add event listeners to the cancel and close buttons
    cancelBtn6.addEventListener('click', incrementProductCountSix);
    closeBtn6.addEventListener('click', incrementProductCountSix);
});

// Seven
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountSeven');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-seven').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -382.93;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn7 = document.querySelector('#cancel-btn-prompt-individualCount-seven');
    const closeBtn7 = document.querySelector('#close-btn-individualCount-seven');

    // Add event listeners to the cancel and close buttons
    cancelBtn7.addEventListener('click', incrementProductCountSeven);
    closeBtn7.addEventListener('click', incrementProductCountSeven);
});

// Eight
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountEight');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-eight').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -24.99;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn8 = document.querySelector('#cancel-btn-prompt-individualCount-eight');
    const closeBtn8 = document.querySelector('#close-btn-individualCount-eight');

    // Add event listeners to the cancel and close buttons
    cancelBtn8.addEventListener('click', incrementProductCountEight);
    closeBtn8.addEventListener('click', incrementProductCountEight);
});

// Nine
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountNine');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-nine').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -49.95;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn9 = document.querySelector('#cancel-btn-prompt-individualCount-nine');
    const closeBtn9 = document.querySelector('#close-btn-individualCount-nine');

    // Add event listeners to the cancel and close buttons
    cancelBtn9.addEventListener('click', incrementProductCountNine);
    closeBtn9.addEventListener('click', incrementProductCountNine);
});

// Ten
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountTen');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-ten').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -17.09;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn10 = document.querySelector('#cancel-btn-prompt-individualCount-ten');
    const closeBtn10 = document.querySelector('#close-btn-individualCount-ten');

    // Add event listeners to the cancel and close buttons
    cancelBtn10.addEventListener('click', incrementProductCountTen);
    closeBtn10.addEventListener('click', incrementProductCountTen);
});

// Eleven
document.addEventListener('DOMContentLoaded', function () {
    // Get the product count element
    var productCount = document.querySelector('#productCountEleven');

    // Event listener for the quantity-minus-icons button
    document.querySelector('.quantity-minus-icons-radius-co-eleven').addEventListener('click', function () {
        if (productCount.innerText === '0') {
            var multipliedSubtotal = parseFloat(document.getElementById('multiplied-subtotal').innerText);
            multipliedSubtotal -= -8.98;
            document.getElementById('multiplied-subtotal').innerText = multipliedSubtotal.toFixed(2);
        }
    });

    // Get the cancel and close buttons
    const cancelBtn11 = document.querySelector('#cancel-btn-prompt-individualCount-eleven');
    const closeBtn11 = document.querySelector('#close-btn-individualCount-eleven');

    // Add event listeners to the cancel and close buttons
    cancelBtn11.addEventListener('click', incrementProductCountEleven);
    closeBtn11.addEventListener('click', incrementProductCountEleven);
});

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
 * This script initializes custom prompts with specific IDs and sets up event listeners to close the prompts when corresponding buttons are clicked.  
 * 
 * */

function createCustomPrompt(id, closeBtnId, closeBtnXSymbolId, cancelBtnPromptId) {
    const customPrompt = document.getElementById(id);
    const closeBtn = document.getElementById(closeBtnId);
    const closeBtnXSymbol = document.getElementById(closeBtnXSymbolId);
    const cancelBtnPrompt = document.getElementById(cancelBtnPromptId);

    function hideCustomPrompt() {
        customPrompt.style.display = 'none';
    }

    closeBtn.addEventListener('click', hideCustomPrompt);
    closeBtnXSymbol.addEventListener('click', hideCustomPrompt);
    cancelBtnPrompt.addEventListener('click', hideCustomPrompt);
}

createCustomPrompt('custom-prompt-co-individualCount-one', 'close-btn-individualCount-one', 'close-btn-x-symbol-individualCount-one', 'cancel-btn-prompt-individualCount-one');
createCustomPrompt('custom-prompt-co-individualCount-two', 'close-btn-individualCount-two', 'close-btn-x-symbol-individualCount-two', 'cancel-btn-prompt-individualCount-two');
createCustomPrompt('custom-prompt-co-individualCount-three', 'close-btn-individualCount-three', 'close-btn-x-symbol-individualCount-three', 'cancel-btn-prompt-individualCount-three');
createCustomPrompt('custom-prompt-co-individualCount-four', 'close-btn-individualCount-four', 'close-btn-x-symbol-individualCount-four', 'cancel-btn-prompt-individualCount-four');
createCustomPrompt('custom-prompt-co-individualCount-five', 'close-btn-individualCount-five', 'close-btn-x-symbol-individualCount-five', 'cancel-btn-prompt-individualCount-five');
createCustomPrompt('custom-prompt-co-individualCount-six', 'close-btn-individualCount-six', 'close-btn-x-symbol-individualCount-six', 'cancel-btn-prompt-individualCount-six');
createCustomPrompt('custom-prompt-co-individualCount-seven', 'close-btn-individualCount-seven', 'close-btn-x-symbol-individualCount-seven', 'cancel-btn-prompt-individualCount-seven');
createCustomPrompt('custom-prompt-co-individualCount-eight', 'close-btn-individualCount-eight', 'close-btn-x-symbol-individualCount-eight', 'cancel-btn-prompt-individualCount-eight');
createCustomPrompt('custom-prompt-co-individualCount-nine', 'close-btn-individualCount-nine', 'close-btn-x-symbol-individualCount-nine', 'cancel-btn-prompt-individualCount-nine');
createCustomPrompt('custom-prompt-co-individualCount-ten', 'close-btn-individualCount-ten', 'close-btn-x-symbol-individualCount-ten', 'cancel-btn-prompt-individualCount-ten');
createCustomPrompt('custom-prompt-co-individualCount-eleven', 'close-btn-individualCount-eleven', 'close-btn-x-symbol-individualCount-eleven', 'cancel-btn-prompt-individualCount-eleven');

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
 * This code snippet listens for the DOM content to be loaded and then attaches event listeners to the quantity minus icons and confirm button.
 * It keeps track of whether the quantity minus icon has been clicked and if it has, it performs the following actions:
 * - Removes the cart product details element from the DOM
 * - Removes the count and image data from local storage
 * - Hides the custom prompt element
 * - Removes the count from the cart pillow
 * - Refreshes the page
 */

// Product one
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClicked = false;

    const quantityMinusIcons = document.querySelector('.quantity-minus-icons-radius-co-one');
    const confirmBtn = document.querySelector('#confirm-btn-prompt-individualCount-one');
    const cartProductDetails = document.querySelector('.cart-product-details-wrap-one');
    const customPrompt = document.querySelector('#custom-prompt-co-individualCount-one');

    quantityMinusIcons.addEventListener('click', function () {
        isQuantityMinusClicked = true;
    });

    confirmBtn.addEventListener('click', function () {
        if (isQuantityMinusClicked) {
            cartProductDetails.remove();
            localStorage.removeItem('cartCount_pillow');
            localStorage.removeItem('countOne');
            localStorage.removeItem('imgDataOne');
            localStorage.removeItem('imgDataOne_TEMP');
            localStorage.removeItem('productPriceOne');
            localStorage.removeItem('productTitleOne');
            localStorage.removeItem('productCountOne (prior to refresh)')
            customPrompt.style.display = 'none';
            location.reload();
        }
    });
});

// Product two
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedTwo = false;

    const quantityMinusIconsTwo = document.querySelector('.quantity-minus-icons-radius-co-two');
    const confirmBtnTwo = document.querySelector('#confirm-btn-prompt-individualCount-two');
    const cartProductDetailsTwo = document.querySelector('.cart-product-details-wrap-two');
    const customPromptTwo = document.querySelector('#custom-prompt-co-individualCount-two');

    quantityMinusIconsTwo.addEventListener('click', function () {
        isQuantityMinusClickedTwo = true;
    });

    confirmBtnTwo.addEventListener('click', function () {
        if (isQuantityMinusClickedTwo) {
            cartProductDetailsTwo.remove();
            localStorage.removeItem('cartCount_rccar');
            localStorage.removeItem('countTwo');
            localStorage.removeItem('imgDataTwo');
            localStorage.removeItem('imgDataTwo_TEMP');
            localStorage.removeItem('productPriceTwo');
            localStorage.removeItem('productTitleTwo');
            localStorage.removeItem('productCountTwo (prior to refresh)');
            customPromptTwo.style.display = 'none';
            location.reload();
        }
    });
});

// Product three
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedThree = false;

    const quantityMinusIconsThree = document.querySelector('.quantity-minus-icons-radius-co-three');
    const confirmBtnThree = document.querySelector('#confirm-btn-prompt-individualCount-three');
    const cartProductDetailsThree = document.querySelector('.cart-product-details-wrap-three');
    const customPromptThree = document.querySelector('#custom-prompt-co-individualCount-three');

    quantityMinusIconsThree.addEventListener('click', function () {
        isQuantityMinusClickedThree = true;
    });

    confirmBtnThree.addEventListener('click', function () {
        if (isQuantityMinusClickedThree) {
            cartProductDetailsThree.remove();
            localStorage.removeItem('cartCount_camera');
            localStorage.removeItem('countThree');
            localStorage.removeItem('imgDataThree');
            localStorage.removeItem('imgDataThree_TEMP');
            localStorage.removeItem('productPriceThree');
            localStorage.removeItem('productTitleThree');
            localStorage.removeItem('productCountThree (prior to refresh)');
            customPromptThree.style.display = 'none';
            location.reload();
        }
    });
});

// Product four
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedFour = false;

    const quantityMinusIconsFour = document.querySelector('.quantity-minus-icons-radius-co-four');
    const confirmBtnFour = document.querySelector('#confirm-btn-prompt-individualCount-four');
    const cartProductDetailsFour = document.querySelector('.cart-product-details-wrap-four');
    const customPromptFour = document.querySelector('#custom-prompt-co-individualCount-four');

    quantityMinusIconsFour.addEventListener('click', function () {
        isQuantityMinusClickedFour = true;
    });

    confirmBtnFour.addEventListener('click', function () {
        if (isQuantityMinusClickedFour) {
            cartProductDetailsFour.remove();
            localStorage.removeItem('cartCount_potatohead');
            localStorage.removeItem('countFour');
            localStorage.removeItem('imgDataFour');
            localStorage.removeItem('imgDataFour_TEMP');
            localStorage.removeItem('productPriceFour');
            localStorage.removeItem('productTitleFour');
            localStorage.removeItem('productCountFour (prior to refresh)');
            customPromptFour.style.display = 'none';
            location.reload();
        }
    });
});

// Product five
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedFive = false;

    const quantityMinusIconsFive = document.querySelector('.quantity-minus-icons-radius-co-five');
    const confirmBtnFive = document.querySelector('#confirm-btn-prompt-individualCount-five');
    const cartProductDetailsFive = document.querySelector('.cart-product-details-wrap-five');
    const customPromptFive = document.querySelector('#custom-prompt-co-individualCount-five');

    quantityMinusIconsFive.addEventListener('click', function () {
        isQuantityMinusClickedFive = true;
    });

    confirmBtnFive.addEventListener('click', function () {
        if (isQuantityMinusClickedFive) {
            cartProductDetailsFive.remove();
            localStorage.removeItem('cartCount_makeupone');
            localStorage.removeItem('countFive');
            localStorage.removeItem('imgDataFive');
            localStorage.removeItem('imgDataFive_TEMP');
            localStorage.removeItem('productPriceFive');
            localStorage.removeItem('productTitleFive');
            localStorage.removeItem('productCountFive (prior to refresh)');
            customPromptFive.style.display = 'none';
            location.reload();
        }
    });
});

// Product six
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedSix = false;

    const quantityMinusIconsSix = document.querySelector('.quantity-minus-icons-radius-co-six');
    const confirmBtnSix = document.querySelector('#confirm-btn-prompt-individualCount-six');
    const cartProductDetailsSix = document.querySelector('.cart-product-details-wrap-six');
    const customPromptSix = document.querySelector('#custom-prompt-co-individualCount-six');

    quantityMinusIconsSix.addEventListener('click', function () {
        isQuantityMinusClickedSix = true;
    });

    confirmBtnSix.addEventListener('click', function () {
        if (isQuantityMinusClickedSix) {
            cartProductDetailsSix.remove();
            localStorage.removeItem('cartCount_beatsbydre');
            localStorage.removeItem('countSix');
            localStorage.removeItem('imgDataSix');
            localStorage.removeItem('imgDataSix_TEMP');
            localStorage.removeItem('productPriceSix');
            localStorage.removeItem('productTitleSix');
            localStorage.removeItem('productCountSix (prior to refresh)');
            customPromptSix.style.display = 'none';
            location.reload();
        }
    });
});

// Product seven
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedSeven = false;

    const quantityMinusIconsSeven = document.querySelector('.quantity-minus-icons-radius-co-seven');
    const confirmBtnSeven = document.querySelector('#confirm-btn-prompt-individualCount-seven');
    const cartProductDetailsSeven = document.querySelector('.cart-product-details-wrap-seven');
    const customPromptSeven = document.querySelector('#custom-prompt-co-individualCount-seven');

    quantityMinusIconsSeven.addEventListener('click', function () {
        isQuantityMinusClickedSeven = true;
    });

    confirmBtnSeven.addEventListener('click', function () {
        if (isQuantityMinusClickedSeven) {
            cartProductDetailsSeven.remove();
            localStorage.removeItem('cartCount_jblspeaker');
            localStorage.removeItem('countSeven');
            localStorage.removeItem('imgDataSeven');
            localStorage.removeItem('imgDataSeven_TEMP');
            localStorage.removeItem('productPriceSeven');
            localStorage.removeItem('productTitleSeven');
            localStorage.removeItem('productCountSeven (prior to refresh)');
            customPromptSeven.style.display = 'none';
            location.reload();
        }
    });
});

// Product eight
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedEight = false;

    const quantityMinusIconsEight = document.querySelector('.quantity-minus-icons-radius-co-eight');
    const confirmBtnEight = document.querySelector('#confirm-btn-prompt-individualCount-eight');
    const cartProductDetailsEight = document.querySelector('.cart-product-details-wrap-eight');
    const customPromptEight = document.querySelector('#custom-prompt-co-individualCount-eight');

    quantityMinusIconsEight.addEventListener('click', function () {
        isQuantityMinusClickedEight = true;
    });

    confirmBtnEight.addEventListener('click', function () {
        if (isQuantityMinusClickedEight) {
            cartProductDetailsEight.remove();
            localStorage.removeItem('cartCount_simonrabbit');
            localStorage.removeItem('countEight');
            localStorage.removeItem('imgDataEight');
            localStorage.removeItem('imgDataEight_TEMP');
            localStorage.removeItem('productPriceEight');
            localStorage.removeItem('productTitleEight');
            localStorage.removeItem('productCountEight (prior to refresh)');
            customPromptEight.style.display = 'none';
            location.reload();
        }
    });
});

// Product nine
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedNine = false;

    const quantityMinusIconsNine = document.querySelector('.quantity-minus-icons-radius-co-nine');
    const confirmBtnNine = document.querySelector('#confirm-btn-prompt-individualCount-nine');
    const cartProductDetailsNine = document.querySelector('.cart-product-details-wrap-nine');
    const customPromptNine = document.querySelector('#custom-prompt-co-individualCount-nine');

    quantityMinusIconsNine.addEventListener('click', function () {
        isQuantityMinusClickedNine = true;
    });

    confirmBtnNine.addEventListener('click', function () {
        if (isQuantityMinusClickedNine) {
            cartProductDetailsNine.remove();
            localStorage.removeItem('cartCount_truthhoodie');
            localStorage.removeItem('countNine');
            localStorage.removeItem('imgDataNine');
            localStorage.removeItem('imgDataNine_TEMP');
            localStorage.removeItem('productPriceNine');
            localStorage.removeItem('productTitleNine');
            localStorage.removeItem('productCountNine (prior to refresh)');
            customPromptNine.style.display = 'none';
            location.reload();
        }
    });
});

// Product ten
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedTen = false;

    const quantityMinusIconsTen = document.querySelector('.quantity-minus-icons-radius-co-ten');
    const confirmBtnTen = document.querySelector('#confirm-btn-prompt-individualCount-ten');
    const cartProductDetailsTen = document.querySelector('.cart-product-details-wrap-ten');
    const customPromptTen = document.querySelector('#custom-prompt-co-individualCount-ten');

    quantityMinusIconsTen.addEventListener('click', function () {
        isQuantityMinusClickedTen = true;
    });

    confirmBtnTen.addEventListener('click', function () {
        if (isQuantityMinusClickedTen) {
            cartProductDetailsTen.remove();
            localStorage.removeItem('cartCount_makeuptwo');
            localStorage.removeItem('countTen');
            localStorage.removeItem('imgDataTen');
            localStorage.removeItem('imgDataTen_TEMP');
            localStorage.removeItem('productPriceTen');
            localStorage.removeItem('productTitleTen');
            localStorage.removeItem('productCountTen (prior to refresh)');
            customPromptTen.style.display = 'none';
            location.reload();
        }
    });
});

// Product eleven
document.addEventListener('DOMContentLoaded', function () {
    let isQuantityMinusClickedEleven = false;

    const quantityMinusIconsEleven = document.querySelector('.quantity-minus-icons-radius-co-eleven');
    const confirmBtnEleven = document.querySelector('#confirm-btn-prompt-individualCount-eleven');
    const cartProductDetailsEleven = document.querySelector('.cart-product-details-wrap-eleven');
    const customPromptEleven = document.querySelector('#custom-prompt-co-individualCount-eleven');

    quantityMinusIconsEleven.addEventListener('click', function () {
        isQuantityMinusClickedEleven = true;
    });

    confirmBtnEleven.addEventListener('click', function () {
        if (isQuantityMinusClickedEleven) {
            cartProductDetailsEleven.remove();
            localStorage.removeItem('cartCount_degreaser');
            localStorage.removeItem('countEleven');
            localStorage.removeItem('imgDataEleven');
            localStorage.removeItem('imgDataEleven_TEMP');
            localStorage.removeItem('productPriceEleven');
            localStorage.removeItem('productTitleEleven');
            localStorage.removeItem('productCountEleven (prior to refresh)');
            customPromptEleven.style.display = 'none';
            location.reload();
        }
    });
});



/**
 * 
 * 
 * 
 * 
 * 
 * 
 * This code is responsible for handling the functionalities of a the trash can prompts for #custom-prompt-co-individualCount-trash-one through #custom-prompt-co-individualCount-trash-eleven.
 *
 * When the trash can prompts appear they allow the user to close/exit the prompts. The prompts also allow for individual deletion of targeted products by deleting the targeted products' localStorage keys/values, then refreshing the page.
 * 
 * For whatever reason, the respective product count values in localStorage, as well as their "productCountOne (prior to refresh)" through "productCountEleven (prior to refresh)" keys were not deleting, so I added a functionality to set them to 0 when pressing the remove button in the trash can prompt.
 * 
 */

// Trash can prompt delete one (Pillow)
document.querySelector('.co-trashcan-delete-one').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-one').style.display = 'block';
});

const customPrompt_exitTrashPrmptOne = document.getElementById('custom-prompt-co-individualCount-trash-one');
const cancelBtn_exitTrashPrmptOne = document.getElementById('cancel-btn-prompt-individualCount-trash-one');
const closeBtn_exitTrashPrmptOne = document.getElementById('close-btn-individualCount-trash-one');
const closeXBtn_exitTrashPrmptOne = document.getElementById('close-btn-x-symbol-individualCount-trash-one');
const confirmBtnTrashPrompt_deleteOne = document.getElementById('confirm-btn-prompt-individualCount-trash-one');

function closeCustomPrompt_exitTrashPrmptOne() {
    customPrompt_exitTrashPrmptOne.style.display = 'none';
}

cancelBtn_exitTrashPrmptOne.addEventListener('click', closeCustomPrompt_exitTrashPrmptOne);
closeBtn_exitTrashPrmptOne.addEventListener('click', closeCustomPrompt_exitTrashPrmptOne);
closeXBtn_exitTrashPrmptOne.addEventListener('click', closeCustomPrompt_exitTrashPrmptOne);

confirmBtnTrashPrompt_deleteOne.addEventListener('click', function () {
    localStorage.removeItem('cartCount_pillow');
    localStorage.removeItem('countOne');
    localStorage.removeItem('imgDataOne');
    localStorage.removeItem('imgDataOne_TEMP');
    localStorage.removeItem('productPriceOne');
    localStorage.removeItem('productTitleOne');
    localStorage.removeItem('pillow_subtotal');
    localStorage.removeItem('productPriceOne_reg');
    localStorage.removeItem('productPriceOne_reg_subtotal');
    localStorage.removeItem('productPriceOne_fiftyOff');
    localStorage.removeItem('productPriceOne_fiftyOff_subtotal');
    localStorage.removeItem('productPriceOne_underTwo');
    localStorage.removeItem('productPriceOne_underTwo_subtotal');
    localStorage.removeItem('productPriceOne_superDeals');
    localStorage.removeItem('productPriceOne_superDeals_subtotal');

    customPrompt_exitTrashPrmptOne.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-one').addEventListener('click', function () {
    localStorage.setItem('countOne', 0);
    localStorage.setItem('productCountOne', 0);
});

// Trash can prompt delete two (Car)
document.querySelector('.co-trashcan-delete-two').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-two').style.display = 'block';
});

const customPrompt_exitTrashPrmptTwo = document.getElementById('custom-prompt-co-individualCount-trash-two');
const cancelBtn_exitTrashPrmptTwo = document.getElementById('cancel-btn-prompt-individualCount-trash-two');
const closeBtn_exitTrashPrmptTwo = document.getElementById('close-btn-individualCount-trash-two');
const closeXBtn_exitTrashPrmptTwo = document.getElementById('close-btn-x-symbol-individualCount-trash-two');
const confirmBtnTrashPrompt_deleteTwo = document.getElementById('confirm-btn-prompt-individualCount-trash-two');

function closeCustomPrompt_exitTrashPrmptTwo() {
    customPrompt_exitTrashPrmptTwo.style.display = 'none';
}

cancelBtn_exitTrashPrmptTwo.addEventListener('click', closeCustomPrompt_exitTrashPrmptTwo);
closeBtn_exitTrashPrmptTwo.addEventListener('click', closeCustomPrompt_exitTrashPrmptTwo);
closeXBtn_exitTrashPrmptTwo.addEventListener('click', closeCustomPrompt_exitTrashPrmptTwo);

confirmBtnTrashPrompt_deleteTwo.addEventListener('click', function () {
    localStorage.removeItem('cartCount_rccar');
    localStorage.removeItem('countTwo');
    localStorage.removeItem('imgDataTwo');
    localStorage.removeItem('imgDataTwo_TEMP');
    localStorage.removeItem('productPriceTwo');
    localStorage.removeItem('productTitleTwo');
    localStorage.removeItem('car_subtotal');
    localStorage.removeItem('productPriceTwo_reg');
    localStorage.removeItem('productPriceTwo_reg_subtotal');
    localStorage.removeItem('productPriceTwo_fiftyOff');
    localStorage.removeItem('productPriceTwo_fiftyOff_subtotal');
    localStorage.removeItem('productPriceTwo_underTwo');
    localStorage.removeItem('productPriceTwo_underTwo_subtotal');
    localStorage.removeItem('productPriceTwo_superDeals');
    localStorage.removeItem('productPriceTwo_superDeals_subtotal');
    customPrompt_exitTrashPrmptTwo.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-two').addEventListener('click', function () {
    localStorage.setItem('countTwo', 0);
    localStorage.setItem('productCountTwo', 0);
});

// Trash can prompt delete three (Camera)
document.querySelector('.co-trashcan-delete-three').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-three').style.display = 'block';
});

const customPrompt_exitTrashPrmptThree = document.getElementById('custom-prompt-co-individualCount-trash-three');
const cancelBtn_exitTrashPrmptThree = document.getElementById('cancel-btn-prompt-individualCount-trash-three');
const closeBtn_exitTrashPrmptThree = document.getElementById('close-btn-individualCount-trash-three');
const closeXBtn_exitTrashPrmptThree = document.getElementById('close-btn-x-symbol-individualCount-trash-three');
const confirmBtnTrashPrompt_deleteThree = document.getElementById('confirm-btn-prompt-individualCount-trash-three');

function closeCustomPrompt_exitTrashPrmptThree() {
    customPrompt_exitTrashPrmptThree.style.display = 'none';
}

cancelBtn_exitTrashPrmptThree.addEventListener('click', closeCustomPrompt_exitTrashPrmptThree);
closeBtn_exitTrashPrmptThree.addEventListener('click', closeCustomPrompt_exitTrashPrmptThree);
closeXBtn_exitTrashPrmptThree.addEventListener('click', closeCustomPrompt_exitTrashPrmptThree);

confirmBtnTrashPrompt_deleteThree.addEventListener('click', function () {
    localStorage.removeItem('cartCount_camera');
    localStorage.removeItem('countThree');
    localStorage.removeItem('imgDataThree');
    localStorage.removeItem('imgDataThree_TEMP');
    localStorage.removeItem('productPriceThree');
    localStorage.removeItem('productTitleThree');
    localStorage.removeItem('camera_subtotal');
    localStorage.removeItem('productPriceThree_reg');
    localStorage.removeItem('productPriceThree_reg_subtotal');
    localStorage.removeItem('productPriceThree_fiftyOff');
    localStorage.removeItem('productPriceThree_fiftyOff_subtotal');
    localStorage.removeItem('productPriceThree_underTwo');
    localStorage.removeItem('productPriceThree_underTwo_subtotal');
    localStorage.removeItem('productPriceThree_superDeals');
    localStorage.removeItem('productPriceThree_superDeals_subtotal');
    customPrompt_exitTrashPrmptThree.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-three').addEventListener('click', function () {
    localStorage.setItem('countThree', 0);
    localStorage.setItem('productCountThree', 0);
});

// Trash can prompt delete four (Potato Head)
document.querySelector('.co-trashcan-delete-four').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-four').style.display = 'block';
});

const customPrompt_exitTrashPrmptFour = document.getElementById('custom-prompt-co-individualCount-trash-four');
const cancelBtn_exitTrashPrmptFour = document.getElementById('cancel-btn-prompt-individualCount-trash-four');
const closeBtn_exitTrashPrmptFour = document.getElementById('close-btn-individualCount-trash-four');
const closeXBtn_exitTrashPrmptFour = document.getElementById('close-btn-x-symbol-individualCount-trash-four');
const confirmBtnTrashPrompt_deleteFour = document.getElementById('confirm-btn-prompt-individualCount-trash-four');

function closeCustomPrompt_exitTrashPrmptFour() {
    customPrompt_exitTrashPrmptFour.style.display = 'none';
}

cancelBtn_exitTrashPrmptFour.addEventListener('click', closeCustomPrompt_exitTrashPrmptFour);
closeBtn_exitTrashPrmptFour.addEventListener('click', closeCustomPrompt_exitTrashPrmptFour);
closeXBtn_exitTrashPrmptFour.addEventListener('click', closeCustomPrompt_exitTrashPrmptFour);

confirmBtnTrashPrompt_deleteFour.addEventListener('click', function () {
    localStorage.removeItem('cartCount_potatohead');
    localStorage.removeItem('countFour');
    localStorage.removeItem('imgDataFour');
    localStorage.removeItem('imgDataFour_TEMP');
    localStorage.removeItem('productPriceFour');
    localStorage.removeItem('productTitleFour');
    localStorage.removeItem('potatoHead_subtotal');
    localStorage.removeItem('productPriceFour_reg');
    localStorage.removeItem('productPriceFour_reg_subtotal');
    localStorage.removeItem('productPriceFour_fiftyOff');
    localStorage.removeItem('productPriceFour_fiftyOff_subtotal');
    localStorage.removeItem('productPriceFour_underTwo');
    localStorage.removeItem('productPriceFour_underTwo_subtotal');
    localStorage.removeItem('productPriceFour_superDeals');
    localStorage.removeItem('productPriceFour_superDeals_subtotal');
    customPrompt_exitTrashPrmptFour.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-four').addEventListener('click', function () {
    localStorage.setItem('countFour', 0);
    localStorage.setItem('productCountFour', 0);
});

// Trash can prompt delete five (Makeup One)
document.querySelector('.co-trashcan-delete-five').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-five').style.display = 'block';
});

const customPrompt_exitTrashPrmptFive = document.getElementById('custom-prompt-co-individualCount-trash-five');
const cancelBtn_exitTrashPrmptFive = document.getElementById('cancel-btn-prompt-individualCount-trash-five');
const closeBtn_exitTrashPrmptFive = document.getElementById('close-btn-individualCount-trash-five');
const closeXBtn_exitTrashPrmptFive = document.getElementById('close-btn-x-symbol-individualCount-trash-five');
const confirmBtnTrashPrompt_deleteFive = document.getElementById('confirm-btn-prompt-individualCount-trash-five');

function closeCustomPrompt_exitTrashPrmptFive() {
    customPrompt_exitTrashPrmptFive.style.display = 'none';
}

cancelBtn_exitTrashPrmptFive.addEventListener('click', closeCustomPrompt_exitTrashPrmptFive);
closeBtn_exitTrashPrmptFive.addEventListener('click', closeCustomPrompt_exitTrashPrmptFive);
closeXBtn_exitTrashPrmptFive.addEventListener('click', closeCustomPrompt_exitTrashPrmptFive);

confirmBtnTrashPrompt_deleteFive.addEventListener('click', function () {
    localStorage.removeItem('cartCount_makeupone');
    localStorage.removeItem('countFive');
    localStorage.removeItem('imgDataFive');
    localStorage.removeItem('imgDataFive_TEMP');
    localStorage.removeItem('productPriceFive');
    localStorage.removeItem('productTitleFive');
    localStorage.removeItem('makeupOne_subtotal');
    localStorage.removeItem('productPriceFive_reg');
    localStorage.removeItem('productPriceFive_reg_subtotal');
    localStorage.removeItem('productPriceFive_fiftyOff');
    localStorage.removeItem('productPriceFive_fiftyOff_subtotal');
    localStorage.removeItem('productPriceFive_underTwo');
    localStorage.removeItem('productPriceFive_underTwo_subtotal');
    localStorage.removeItem('productPriceFive_superDeals');
    localStorage.removeItem('productPriceFive_superDeals_subtotal');

    customPrompt_exitTrashPrmptFive.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-five').addEventListener('click', function () {
    localStorage.setItem('countFive', 0);
    localStorage.setItem('productCountFive', 0);
});

// Trash can prompt delete six (Beats by Dre)
document.querySelector('.co-trashcan-delete-six').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-six').style.display = 'block';
});

const customPrompt_exitTrashPrmptSix = document.getElementById('custom-prompt-co-individualCount-trash-six');
const cancelBtn_exitTrashPrmptSix = document.getElementById('cancel-btn-prompt-individualCount-trash-six');
const closeBtn_exitTrashPrmptSix = document.getElementById('close-btn-individualCount-trash-six');
const closeXBtn_exitTrashPrmptSix = document.getElementById('close-btn-x-symbol-individualCount-trash-six');
const confirmBtnTrashPrompt_deleteSix = document.getElementById('confirm-btn-prompt-individualCount-trash-six');

function closeCustomPrompt_exitTrashPrmptSix() {
    customPrompt_exitTrashPrmptSix.style.display = 'none';
}

cancelBtn_exitTrashPrmptSix.addEventListener('click', closeCustomPrompt_exitTrashPrmptSix);
closeBtn_exitTrashPrmptSix.addEventListener('click', closeCustomPrompt_exitTrashPrmptSix);
closeXBtn_exitTrashPrmptSix.addEventListener('click', closeCustomPrompt_exitTrashPrmptSix);

confirmBtnTrashPrompt_deleteSix.addEventListener('click', function () {
    localStorage.removeItem('cartCount_beatsbydre');
    localStorage.removeItem('countSix');
    localStorage.removeItem('imgDataSix');
    localStorage.removeItem('imgDataSix_TEMP');
    localStorage.removeItem('productPriceSix');
    localStorage.removeItem('productTitleSix');
    localStorage.removeItem('beats_subtotal');
    localStorage.removeItem('productPriceSix_reg');
    localStorage.removeItem('productPriceSix_reg_subtotal');
    localStorage.removeItem('productPriceSix_fiftyOff');
    localStorage.removeItem('productPriceSix_fiftyOff_subtotal');
    localStorage.removeItem('productPriceSix_underTwo');
    localStorage.removeItem('productPriceSix_underTwo_subtotal');
    localStorage.removeItem('productPriceSix_superDeals');
    localStorage.removeItem('productPriceSix_superDeals_subtotal');

    customPrompt_exitTrashPrmptSix.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-six').addEventListener('click', function () {
    localStorage.setItem('countSix', 0);
    localStorage.setItem('productCountSix', 0);
});

// Trash can prompt delete seven (JBL)
document.querySelector('.co-trashcan-delete-seven').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-seven').style.display = 'block';
});

const customPrompt_exitTrashPrmptSeven = document.getElementById('custom-prompt-co-individualCount-trash-seven');
const cancelBtn_exitTrashPrmptSeven = document.getElementById('cancel-btn-prompt-individualCount-trash-seven');
const closeBtn_exitTrashPrmptSeven = document.getElementById('close-btn-individualCount-trash-seven');
const closeXBtn_exitTrashPrmptSeven = document.getElementById('close-btn-x-symbol-individualCount-trash-seven');
const confirmBtnTrashPrompt_deleteSeven = document.getElementById('confirm-btn-prompt-individualCount-trash-seven');

function closeCustomPrompt_exitTrashPrmptSeven() {
    customPrompt_exitTrashPrmptSeven.style.display = 'none';
}

cancelBtn_exitTrashPrmptSeven.addEventListener('click', closeCustomPrompt_exitTrashPrmptSeven);
closeBtn_exitTrashPrmptSeven.addEventListener('click', closeCustomPrompt_exitTrashPrmptSeven);
closeXBtn_exitTrashPrmptSeven.addEventListener('click', closeCustomPrompt_exitTrashPrmptSeven);

confirmBtnTrashPrompt_deleteSeven.addEventListener('click', function () {
    localStorage.removeItem('cartCount_jblspeaker');
    localStorage.removeItem('countSeven');
    localStorage.removeItem('imgDataSeven');
    localStorage.removeItem('imgDataSeven_TEMP');
    localStorage.removeItem('productPriceSeven');
    localStorage.removeItem('productTitleSeven');
    localStorage.removeItem('jbl_subtotal');
    localStorage.removeItem('productPriceSeven_reg');
    localStorage.removeItem('productPriceSeven_reg_subtotal');
    localStorage.removeItem('productPriceSeven_fiftyOff');
    localStorage.removeItem('productPriceSeven_fiftyOff_subtotal');
    localStorage.removeItem('productPriceSeven_underTwo');
    localStorage.removeItem('productPriceSeven_underTwo_subtotal');
    localStorage.removeItem('productPriceSeven_superDeals');
    localStorage.removeItem('productPriceSeven_superDeals_subtotal');
    customPrompt_exitTrashPrmptSeven.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-seven').addEventListener('click', function () {
    localStorage.setItem('countSeven', 0);
    localStorage.setItem('productCountSeven', 0);
});

// Trash can prompt delete eight (Simon Rabbit)
document.querySelector('.co-trashcan-delete-eight').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-eight').style.display = 'block';
});

const customPrompt_exitTrashPrmptEight = document.getElementById('custom-prompt-co-individualCount-trash-eight');
const cancelBtn_exitTrashPrmptEight = document.getElementById('cancel-btn-prompt-individualCount-trash-eight');
const closeBtn_exitTrashPrmptEight = document.getElementById('close-btn-individualCount-trash-eight');
const closeXBtn_exitTrashPrmptEight = document.getElementById('close-btn-x-symbol-individualCount-trash-eight');
const confirmBtnTrashPrompt_deleteEight = document.getElementById('confirm-btn-prompt-individualCount-trash-eight');

function closeCustomPrompt_exitTrashPrmptEight() {
    customPrompt_exitTrashPrmptEight.style.display = 'none';
}

cancelBtn_exitTrashPrmptEight.addEventListener('click', closeCustomPrompt_exitTrashPrmptEight);
closeBtn_exitTrashPrmptEight.addEventListener('click', closeCustomPrompt_exitTrashPrmptEight);
closeXBtn_exitTrashPrmptEight.addEventListener('click', closeCustomPrompt_exitTrashPrmptEight);

confirmBtnTrashPrompt_deleteEight.addEventListener('click', function () {
    localStorage.removeItem('cartCount_simonrabbit');
    localStorage.removeItem('countEight');
    localStorage.removeItem('imgDataEight');
    localStorage.removeItem('imgDataEight_TEMP');
    localStorage.removeItem('productPriceEight');
    localStorage.removeItem('productTitleEight');
    localStorage.removeItem('simon_subtotal');
    localStorage.removeItem('productPriceEight_reg');
    localStorage.removeItem('productPriceEight_reg_subtotal');
    localStorage.removeItem('productPriceEight_fiftyOff');
    localStorage.removeItem('productPriceEight_fiftyOff_subtotal');
    localStorage.removeItem('productPriceEight_underTwo');
    localStorage.removeItem('productPriceEight_underTwo_subtotal');
    localStorage.removeItem('productPriceEight_superDeals');
    localStorage.removeItem('productPriceEight_superDeals_subtotal');
    customPrompt_exitTrashPrmptEight.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-eight').addEventListener('click', function () {
    localStorage.setItem('countEight', 0);
    localStorage.setItem('productCountEight', 0);
});

// Trash can prompt delete nine (Truth Hoodie)
document.querySelector('.co-trashcan-delete-nine').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-nine').style.display = 'block';
});

const customPrompt_exitTrashPrmptNine = document.getElementById('custom-prompt-co-individualCount-trash-nine');
const cancelBtn_exitTrashPrmptNine = document.getElementById('cancel-btn-prompt-individualCount-trash-nine');
const closeBtn_exitTrashPrmptNine = document.getElementById('close-btn-individualCount-trash-nine');
const closeXBtn_exitTrashPrmptNine = document.getElementById('close-btn-x-symbol-individualCount-trash-nine');
const confirmBtnTrashPrompt_deleteNine = document.getElementById('confirm-btn-prompt-individualCount-trash-nine');

function closeCustomPrompt_exitTrashPrmptNine() {
    customPrompt_exitTrashPrmptNine.style.display = 'none';
}

cancelBtn_exitTrashPrmptNine.addEventListener('click', closeCustomPrompt_exitTrashPrmptNine);
closeBtn_exitTrashPrmptNine.addEventListener('click', closeCustomPrompt_exitTrashPrmptNine);
closeXBtn_exitTrashPrmptNine.addEventListener('click', closeCustomPrompt_exitTrashPrmptNine);

confirmBtnTrashPrompt_deleteNine.addEventListener('click', function () {
    localStorage.removeItem('cartCount_truthhoodie');
    localStorage.removeItem('countNine');
    localStorage.removeItem('imgDataNine');
    localStorage.removeItem('imgDataNine_TEMP');
    localStorage.removeItem('productPriceNine');
    localStorage.removeItem('productTitleNine');
    localStorage.removeItem('truth_subtotal');
    localStorage.removeItem('productPriceNine_reg');
    localStorage.removeItem('productPriceNine_reg_subtotal');
    localStorage.removeItem('productPriceNine_fiftyOff');
    localStorage.removeItem('productPriceNine_fiftyOff_subtotal');
    localStorage.removeItem('productPriceNine_underTwo');
    localStorage.removeItem('productPriceNine_underTwo_subtotal');
    localStorage.removeItem('productPriceNine_superDeals');
    localStorage.removeItem('productPriceNine_superDeals_subtotal');
    customPrompt_exitTrashPrmptNine.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-nine').addEventListener('click', function () {
    localStorage.setItem('countNine', 0);
    localStorage.setItem('productCountNine', 0);
});

// Trash can prompt delete ten (Makeup Two)
document.querySelector('.co-trashcan-delete-ten').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-ten').style.display = 'block';
});

const customPrompt_exitTrashPrmptTen = document.getElementById('custom-prompt-co-individualCount-trash-ten');
const cancelBtn_exitTrashPrmptTen = document.getElementById('cancel-btn-prompt-individualCount-trash-ten');
const closeBtn_exitTrashPrmptTen = document.getElementById('close-btn-individualCount-trash-ten');
const closeXBtn_exitTrashPrmptTen = document.getElementById('close-btn-x-symbol-individualCount-trash-ten');
const confirmBtnTrashPrompt_deleteTen = document.getElementById('confirm-btn-prompt-individualCount-trash-ten');

function closeCustomPrompt_exitTrashPrmptTen() {
    customPrompt_exitTrashPrmptTen.style.display = 'none';
}

cancelBtn_exitTrashPrmptTen.addEventListener('click', closeCustomPrompt_exitTrashPrmptTen);
closeBtn_exitTrashPrmptTen.addEventListener('click', closeCustomPrompt_exitTrashPrmptTen);
closeXBtn_exitTrashPrmptTen.addEventListener('click', closeCustomPrompt_exitTrashPrmptTen);

confirmBtnTrashPrompt_deleteTen.addEventListener('click', function () {
    localStorage.removeItem('cartCount_makeuptwo');
    localStorage.removeItem('countTen');
    localStorage.removeItem('imgDataTen');
    localStorage.removeItem('imgDataTen_TEMP');
    localStorage.removeItem('productPriceTen');
    localStorage.removeItem('productTitleTen');
    localStorage.removeItem('makeupTwo_subtotal');
    localStorage.removeItem('productPriceTen_reg');
    localStorage.removeItem('productPriceTen_reg_subtotal');
    localStorage.removeItem('productPriceTen_fiftyOff');
    localStorage.removeItem('productPriceTen_fiftyOff_subtotal');
    localStorage.removeItem('productPriceTen_underTwo');
    localStorage.removeItem('productPriceTen_underTwo_subtotal');
    localStorage.removeItem('productPriceTen_superDeals');
    localStorage.removeItem('productPriceTen_superDeals_subtotal');
    customPrompt_exitTrashPrmptTen.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-ten').addEventListener('click', function () {
    localStorage.setItem('countTen', 0);
    localStorage.setItem('productCountTen', 0);
});

// Trash can prompt delete eleven (Automotive Degreaser)
document.querySelector('.co-trashcan-delete-eleven').addEventListener('click', function () {
    document.querySelector('#custom-prompt-co-individualCount-trash-eleven').style.display = 'block';
});

const customPrompt_exitTrashPrmptEleven = document.getElementById('custom-prompt-co-individualCount-trash-eleven');
const cancelBtn_exitTrashPrmptEleven = document.getElementById('cancel-btn-prompt-individualCount-trash-eleven');
const closeBtn_exitTrashPrmptEleven = document.getElementById('close-btn-individualCount-trash-eleven');
const closeXBtn_exitTrashPrmptEleven = document.getElementById('close-btn-x-symbol-individualCount-trash-eleven');
const confirmBtnTrashPrompt_deleteEleven = document.getElementById('confirm-btn-prompt-individualCount-trash-eleven');

function closeCustomPrompt_exitTrashPrmptEleven() {
    customPrompt_exitTrashPrmptEleven.style.display = 'none';
}

cancelBtn_exitTrashPrmptEleven.addEventListener('click', closeCustomPrompt_exitTrashPrmptEleven);
closeBtn_exitTrashPrmptEleven.addEventListener('click', closeCustomPrompt_exitTrashPrmptEleven);
closeXBtn_exitTrashPrmptEleven.addEventListener('click', closeCustomPrompt_exitTrashPrmptEleven);

confirmBtnTrashPrompt_deleteEleven.addEventListener('click', function () {
    localStorage.removeItem('cartCount_degreaser');
    localStorage.removeItem('countEleven');
    localStorage.removeItem('imgDataEleven');
    localStorage.removeItem('imgDataEleven_TEMP');
    localStorage.removeItem('productPriceEleven');
    localStorage.removeItem('productTitleEleven');
    localStorage.removeItem('degreaser_subtotal');
    localStorage.removeItem('productPriceEleven_reg');
    localStorage.removeItem('productPriceEleven_reg_subtotal');
    localStorage.removeItem('productPriceEleven_fiftyOff');
    localStorage.removeItem('productPriceEleven_fiftyOff_subtotal');
    localStorage.removeItem('productPriceEleven_underTwo');
    localStorage.removeItem('productPriceEleven_underTwo_subtotal');
    localStorage.removeItem('productPriceEleven_superDeals');
    localStorage.removeItem('productPriceEleven_superDeals_subtotal');
    customPrompt_exitTrashPrmptEleven.style.display = 'none';
    location.reload();
});

document.querySelector('#confirm-btn-prompt-individualCount-trash-eleven').addEventListener('click', function () {
    localStorage.setItem('countEleven', 0);
    localStorage.setItem('productCountEleven', 0);
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
 * 
This function ensures that when any of the custom prompts on the shopping cart page are displayed, all individual checkmarks receive a z-index of auto.

Before implementing this function, the custom prompts would occur, but the individual checkmarks with a z-index of 1 would not be greyed out along with the rest of the page behind the prompts.
*/

// function setCheckmarksZIndexToAuto() {
//     const prompts = [
//         document.getElementById('custom-prompt-co'),
//         document.getElementById('custom-prompt-co-individualCount-trash-one'),
//         document.getElementById('custom-prompt-co-individualCount-trash-two'),
//         document.getElementById('custom-prompt-co-individualCount-trash-three'),
//         document.getElementById('custom-prompt-co-individualCount-trash-four'),
//         document.getElementById('custom-prompt-co-individualCount-trash-five'),
//         document.getElementById('custom-prompt-co-individualCount-trash-six'),
//         document.getElementById('custom-prompt-co-individualCount-trash-seven'),
//         document.getElementById('custom-prompt-co-individualCount-trash-eight'),
//         document.getElementById('custom-prompt-co-individualCount-trash-nine'),
//         document.getElementById('custom-prompt-co-individualCount-trash-ten'),
//         document.getElementById('custom-prompt-co-individualCount-trash-eleven')
//     ];

//     const checkmarks = document.querySelectorAll('.product-one-check-mark-icon-SC, .product-two-check-mark-icon-SC, .product-three-check-mark-icon-SC, .product-four-check-mark-icon-SC, .product-five-check-mark-icon-SC, .product-six-check-mark-icon-SC, .product-seven-check-mark-icon-SC, .product-eight-check-mark-icon-SC, .product-nine-check-mark-icon-SC, .product-ten-check-mark-icon-SC, .product-eleven-check-mark-icon-SC');

//     prompts.forEach(function (prompt) {
//         const observer = new MutationObserver(function () {
//             if (prompt.style.display !== 'none' && prompt.style.visibility !== 'hidden') {
//                 checkmarks.forEach(function (checkmark) {
//                     checkmark.style.zIndex = '';
//                 });
//             }
//         });

//         observer.observe(prompt, {
//             attributes: true,
//             attributeFilter: ['style']
//         });
//     });
// }

// // Call the function
// setCheckmarksZIndexToAuto();
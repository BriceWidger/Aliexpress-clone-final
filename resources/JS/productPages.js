// Update the setURL function to return the inner function directly
function setURL(newUrl) {
  return function() {
    document.getElementById('main-img').setAttribute('src', newUrl);
    document.getElementById('mag-overlay').style.backgroundImage = "url('" + newUrl + "')";
    document.getElementById('mag-overlay').style.display = "none";
    document.getElementById('mag-overlay-two').style.display = "none";
  };
}

// Beats by Dre
document.getElementById('preview-img-one').addEventListener('mouseover', setURL('/resources/images/beatsbydre.jpg'));
document.getElementById('preview-img-two').addEventListener('mouseover', setURL('/resources/images/beatsbydre-rightside.jpg'));
document.getElementById('preview-img-three').addEventListener('mouseover', setURL('/resources/images/beatsbydre-side.jpg'));
document.getElementById('preview-img-four').addEventListener('mouseover', setURL('/resources/images/beatsbydre-bottom.jpg'));
document.getElementById('preview-img-five').addEventListener('mouseover', setURL('/resources/images/beatsbydre-case.jpg'));

// Automotive Degreaser
document.getElementById('preview-img-one_auto').addEventListener('mouseover', setURL('/resources/images/automotiveDegreaser.jpg'));
document.getElementById('preview-img-two_auto').addEventListener('mouseover', setURL('/resources/images/automotiveDegreaser_back.jpg'));
document.getElementById('preview-img-three_auto').addEventListener('mouseover', setURL('/resources/images/automotiveDegreaser_description.jpg'));
document.getElementById('preview-img-four_auto').addEventListener('mouseover', setURL('/resources/images/automotiveDegreaser_utility.jpg'));
document.getElementById('preview-img-five_auto').addEventListener('mouseover', setURL('/resources/images/automotiveDegreaser_towel.jpg'));

// Make sure to define the zoomIn function
function zoomIn(event) {
  var mainImg = document.getElementById("main-img");
  var containerRect = mainImg.getBoundingClientRect();

  var offsetX = event.clientX - containerRect.left;
  var offsetY = event.clientY - containerRect.top;

  var imageWidth = mainImg.offsetWidth;
  var imageHeight = mainImg.offsetHeight;

  var posX = (offsetX / imageWidth) * 100;
  var posY = (offsetY / imageHeight) * 100;

  var element = document.getElementById("mag-overlay");
  element.style.display = "inline-block";
  element.style.backgroundPosition = posX + "% " + posY + "%";

  var element2 = document.getElementById("mag-overlay-two");
  element2.style.display = "inline-block";
  element2.style.backgroundPosition = posX + "% " + posY + "%";
}

document.getElementById('mag-overlay').addEventListener('mousemove', zoomIn);


// Preview-img hover-border-stay effect
function prevImgDecoyFunctionOne() { // prevImgDecoyFunctionOne
  // hides img-one and displays img-one-after
  document.getElementById("preview-img-one").style.opacity = "0";
  document.getElementById("preview-img-one-after").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-two-after").style.opacity = "0";
  document.getElementById("preview-img-three-after").style.opacity = "0";
  document.getElementById("preview-img-four-after").style.opacity = "0";
  document.getElementById("preview-img-five-after").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-two").style.opacity = "1";
  document.getElementById("preview-img-three").style.opacity = "1";
  document.getElementById("preview-img-four").style.opacity = "1";
  document.getElementById("preview-img-five").style.opacity = "1";
}
function prevImgDecoyFunctionTwo() { // prevImgDecoyFunctionTwo
  // hides img-two and displays img-two-after
  document.getElementById("preview-img-two").style.opacity = "0";
  document.getElementById("preview-img-two-after").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after").style.opacity = "0";
  document.getElementById("preview-img-three-after").style.opacity = "0";
  document.getElementById("preview-img-four-after").style.opacity = "0";
  document.getElementById("preview-img-five-after").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one").style.opacity = "1";
  document.getElementById("preview-img-three").style.opacity = "1";
  document.getElementById("preview-img-four").style.opacity = "1";
  document.getElementById("preview-img-five").style.opacity = "1";
}
function prevImgDecoyFunctionThree() { // prevImgDecoyFunctionThree
  // hides img-three and displays img-three-after
  document.getElementById("preview-img-three").style.opacity = "0";
  document.getElementById("preview-img-three-after").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after").style.opacity = "0";
  document.getElementById("preview-img-two-after").style.opacity = "0";
  document.getElementById("preview-img-four-after").style.opacity = "0";
  document.getElementById("preview-img-five-after").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one").style.opacity = "1";
  document.getElementById("preview-img-two").style.opacity = "1";
  document.getElementById("preview-img-four").style.opacity = "1";
  document.getElementById("preview-img-five").style.opacity = "1";
}
function prevImgDecoyFunctionFour() { // prevImgDecoyFunctionFour
  // hides img-four and displays img-four-after
  document.getElementById("preview-img-four").style.opacity = "0";
  document.getElementById("preview-img-four-after").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after").style.opacity = "0";
  document.getElementById("preview-img-two-after").style.opacity = "0";
  document.getElementById("preview-img-three-after").style.opacity = "0";
  document.getElementById("preview-img-five-after").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one").style.opacity = "1";
  document.getElementById("preview-img-two").style.opacity = "1";
  document.getElementById("preview-img-three").style.opacity = "1";
  document.getElementById("preview-img-five").style.opacity = "1";
}
function prevImgDecoyFunctionFive() { // prevImgDecoyFunctionFive
  // hides img-five and displays img-five-after
  document.getElementById("preview-img-five").style.opacity = "0";
  document.getElementById("preview-img-five-after").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after").style.opacity = "0";
  document.getElementById("preview-img-two-after").style.opacity = "0";
  document.getElementById("preview-img-three-after").style.opacity = "0";
  document.getElementById("preview-img-four-after").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one").style.opacity = "1";
  document.getElementById("preview-img-two").style.opacity = "1";
  document.getElementById("preview-img-three").style.opacity = "1";
  document.getElementById("preview-img-four").style.opacity = "1";
}












function prevImgDecoyFunctionOne_auto() { // prevImgDecoyFunctionOne_auto
  // hides img-one and displays img-one-after
  document.getElementById("preview-img-one_auto").style.opacity = "0";
  document.getElementById("preview-img-one-after_auto").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-two-after_auto").style.opacity = "0";
  document.getElementById("preview-img-three-after_auto").style.opacity = "0";
  document.getElementById("preview-img-four-after_auto").style.opacity = "0";
  document.getElementById("preview-img-five-after_auto").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-two_auto").style.opacity = "1";
  document.getElementById("preview-img-three_auto").style.opacity = "1";
  document.getElementById("preview-img-four_auto").style.opacity = "1";
  document.getElementById("preview-img-five_auto").style.opacity = "1";
}
function prevImgDecoyFunctionTwo_auto() { // prevImgDecoyFunctionTwo_auto
  // hides img-two and displays img-two-after
  document.getElementById("preview-img-two_auto").style.opacity = "0";
  document.getElementById("preview-img-two-after_auto").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_auto").style.opacity = "0";
  document.getElementById("preview-img-three-after_auto").style.opacity = "0";
  document.getElementById("preview-img-four-after_auto").style.opacity = "0";
  document.getElementById("preview-img-five-after_auto").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_auto").style.opacity = "1";
  document.getElementById("preview-img-three_auto").style.opacity = "1";
  document.getElementById("preview-img-four_auto").style.opacity = "1";
  document.getElementById("preview-img-five_auto").style.opacity = "1";
}
function prevImgDecoyFunctionThree_auto() { // prevImgDecoyFunctionThree_auto
  // hides img-three and displays img-three-after
  document.getElementById("preview-img-three_auto").style.opacity = "0";
  document.getElementById("preview-img-three-after_auto").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_auto").style.opacity = "0";
  document.getElementById("preview-img-two-after_auto").style.opacity = "0";
  document.getElementById("preview-img-four-after_auto").style.opacity = "0";
  document.getElementById("preview-img-five-after_auto").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_auto").style.opacity = "1";
  document.getElementById("preview-img-two_auto").style.opacity = "1";
  document.getElementById("preview-img-four_auto").style.opacity = "1";
  document.getElementById("preview-img-five_auto").style.opacity = "1";
}
function prevImgDecoyFunctionFour_auto() { // prevImgDecoyFunctionFour_auto
  // hides img-four and displays img-four-after
  document.getElementById("preview-img-four_auto").style.opacity = "0";
  document.getElementById("preview-img-four-after_auto").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_auto").style.opacity = "0";
  document.getElementById("preview-img-two-after_auto").style.opacity = "0";
  document.getElementById("preview-img-three-after_auto").style.opacity = "0";
  document.getElementById("preview-img-five-after_auto").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_auto").style.opacity = "1";
  document.getElementById("preview-img-two_auto").style.opacity = "1";
  document.getElementById("preview-img-three_auto").style.opacity = "1";
  document.getElementById("preview-img-five_auto").style.opacity = "1";
}
function prevImgDecoyFunctionFive_auto() { // prevImgDecoyFunctionFive_auto
  // hides img-five and displays img-five-after
  document.getElementById("preview-img-five_auto").style.opacity = "0";
  document.getElementById("preview-img-five-after_auto").style.opacity = "1";
  // hides all remaining preview-img-afters
  document.getElementById("preview-img-one-after_auto").style.opacity = "0";
  document.getElementById("preview-img-two-after_auto").style.opacity = "0";
  document.getElementById("preview-img-three-after_auto").style.opacity = "0";
  document.getElementById("preview-img-four-after_auto").style.opacity = "0";
  // displays all remaining preview-imgs
  document.getElementById("preview-img-one_auto").style.opacity = "1";
  document.getElementById("preview-img-two_auto").style.opacity = "1";
  document.getElementById("preview-img-three_auto").style.opacity = "1";
  document.getElementById("preview-img-four_auto").style.opacity = "1";
}











// Magnify glass zoom efect
// function zoomIn(event) {
//   var mainImg = document.getElementById("main-img");
//   var containerRect = mainImg.getBoundingClientRect();

//   var offsetX = event.clientX - containerRect.left;
//   var offsetY = event.clientY - containerRect.top;

//   var imageWidth = mainImg.offsetWidth;
//   var imageHeight = mainImg.offsetHeight;

//   var posX = (offsetX / imageWidth) * 100;
//   var posY = (offsetY / imageHeight) * 100;

//   var element = document.getElementById("mag-overlay");
//   element.style.display = "inline-block";
//   element.style.backgroundPosition = posX + "% " + posY + "%";

//   var element2 = document.getElementById("mag-overlay-two");
//   element2.style.display = "inline-block";
//   element2.style.backgroundPosition = posX + "% " + posY + "%";
// }

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
 */

// Nav Scroll (product-page)
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("whole-nav-product-page").style.top = "0";
  } else {
    document.getElementById("whole-nav-product-page").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

// Action-box-top shows/hides on scroll
actionBoxID = document.getElementById("action-box-top-id");
var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 100) { // scroll down trigger (show)
    actionBoxID.className = "action-box-top action-box-top-show"
  } else if (y <= 500) { //scroll up trigger (hide)
    actionBoxID.className = "action-box-top action-box-top-hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

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

/*
    This code adds a scroll event listener to the window. 

    It dynamically adjusts the top position and padding of the '.action-box-container' element based on the scroll position. 

    When the scroll position is greater than 0, it sets the top position to '62.60px' and padding to '14px 0 31px 24px'. 
    
    Otherwise, it sets the top position to '0px' and padding to '0px 0 31px 24px'.
*/
window.addEventListener('scroll', function () {
  var actionBox = document.querySelector('.action-box-container');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    actionBox.style.top = '132.60px';
    actionBox.style.padding = '14px 0 31px 24px';
  } else {
    actionBox.style.top = '0px';
    actionBox.style.padding = '8px 0 31px 24px';
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
 * 
 */


/**
 * This script manages the styling and functionality of the quantity minus icons.
 * When the respective productCount value is 1, the minus icons have a cursor of 'not-allowed' and an opacity of 0.5.
 * When the value is anything other than 1, the styles are removed.
 * It also enables incrementing/decrementing the productCount value by clicking the minus or plus icons.
 */

document.addEventListener('DOMContentLoaded', function () {
  const minusIcon_pp = document.querySelector('.quantity-minus-icons-radius-co-six');
  const plusIcon_pp = document.querySelector('.quantity-plus-icons-radius-co-six');
  const productCount_pp = document.getElementById('productCountSix');
  let count = 1;

  function toggleDisabled(disabled) {
    minusIcon_pp.classList.toggle('disabled', disabled);
    minusIcon_pp.style.cursor = disabled ? 'not-allowed' : 'pointer';
  }

  function updateStyles() {
    if (productCount_pp.innerText === '1') {
      minusIcon_pp.style.cursor = 'not-allowed';
      minusIcon_pp.style.opacity = '0.5';
    } else {
      minusIcon_pp.style.cursor = 'pointer';
      minusIcon_pp.style.opacity = '1';
    }
  }

  function decrement() {
    if (count > 1) {
      count--;
      productCount_pp.innerText = count;
      toggleDisabled(count === 1);
      updateStyles();
    } else {
      // Add this block to prevent decrementing below 1
      count = 1;
      productCount_pp.innerText = count;
      toggleDisabled(true);
      updateStyles();
    }
  }

  function increment() {
    count++;
    productCount_pp.innerText = count;
    toggleDisabled(count === 1);
    updateStyles();
  }

  minusIcon_pp.style.cursor = productCount_pp.innerText === '1' ? 'not-allowed' : 'pointer';
  minusIcon_pp.style.opacity = productCount_pp.innerText === '1' ? '0.5' : '1';

  minusIcon_pp.addEventListener('click', decrement);
  plusIcon_pp.addEventListener('click', increment);

  updateStyles();
});



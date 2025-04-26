/**
Converts src image from ID "localStorageImg" to base64 string, then saves image in localStorage to display for ID "cart-product-img-one", "cart-product-img-two", etc. on checkout page.

The imgDataOne is for the regular shoppingCart page, while imgDataOne_TEMP is for the buyNow_checkOut page.
*/

window.onload = function () {
  loadImages();
}

function loadImages() {
  var imgDataOne = localStorage.getItem('imgDataOne');
  var imgDataOneTemp = localStorage.getItem('imgDataOne_TEMP');
  var imgDataTwo = localStorage.getItem('imgDataTwo');
  var imgDataTwoTemp = localStorage.getItem('imgDataTwo_TEMP');
  var imgDataThree = localStorage.getItem('imgDataThree');
  var imgDataThreeTemp = localStorage.getItem('imgDataThree_TEMP');
  var imgDataFour = localStorage.getItem('imgDataFour');
  var imgDataFourTemp = localStorage.getItem('imgDataFour_TEMP');
  var imgDataFive = localStorage.getItem('imgDataFive');
  var imgDataFiveTemp = localStorage.getItem('imgDataFive_TEMP');
  var imgDataSix = localStorage.getItem('imgDataSix');
  var imgDataSixTemp = localStorage.getItem('imgDataSix_TEMP');
  var imgDataSeven = localStorage.getItem('imgDataSeven');
  var imgDataSevenTemp = localStorage.getItem('imgDataSeven_TEMP');
  var imgDataEight = localStorage.getItem('imgDataEight');
  var imgDataEightTemp = localStorage.getItem('imgDataEight_TEMP');
  var imgDataNine = localStorage.getItem('imgDataNine');
  var imgDataNineTemp = localStorage.getItem('imgDataNine_TEMP');
  var imgDataTen = localStorage.getItem('imgDataTen');
  var imgDataTenTemp = localStorage.getItem('imgDataTen_TEMP');
  var imgDataEleven = localStorage.getItem('imgDataEleven');
  var imgDataElevenTemp = localStorage.getItem('imgDataEleven_TEMP');
  var imgDataRCCar = localStorage.getItem('imgDataRCCar');

  document.getElementById('cart-product-img-one').src = imgDataOne || imgDataOneTemp;
  document.getElementById('cart-product-img-two').src = imgDataTwo || imgDataTwoTemp;
  document.getElementById('cart-product-img-three').src = imgDataThree || imgDataThreeTemp;
  document.getElementById('cart-product-img-four').src = imgDataFour || imgDataFourTemp;
  document.getElementById('cart-product-img-five').src = imgDataFive || imgDataFiveTemp;
  document.getElementById('cart-product-img-six').src = imgDataSix || imgDataSixTemp;
  document.getElementById('cart-product-img-seven').src = imgDataSeven || imgDataSevenTemp;
  document.getElementById('cart-product-img-eight').src = imgDataEight || imgDataEightTemp;
  document.getElementById('cart-product-img-nine').src = imgDataNine || imgDataNineTemp;
  document.getElementById('cart-product-img-ten').src = imgDataTen || imgDataTenTemp;
  document.getElementById('cart-product-img-eleven').src = imgDataEleven || imgDataElevenTemp;
  document.getElementById('cart-product-img-rccar').src = imgDataRCCar || 'default-image.jpg';
}


// RANGE PRICE BAR ONE
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");


 var resLeft = document.getElementById("resLeft");
var resRight = document.getElementById("resRight");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";

  resLeft.innerHTML = inputLeft.value + " m<sup>2</sup>";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";

  resRight.innerHTML = inputRight.value + " m<sup>2</sup>";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);





// RANGE PRICE BAR TWO
var inputLeftTwo = document.getElementById("input-leftTwo");
var inputRighTwo = document.getElementById("input-rightTwo");

var thumbLeftTwo = document.querySelector(".slider.Two > .thumb.left.Two");
var thumbRightTwo = document.querySelector(".slider.Two > .thumb.right.Two");
var rangeTwo = document.querySelector(".slider.Two > .range.Two");


 var resLeftTwo = document.getElementById("resLeftTwo");
var resRightTwo = document.getElementById("resRightTwo");

function setLeftValueTwo() {
  var _this = inputLeftTwo,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRighTwo.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeftTwo.style.left = percent + "%";
  rangeTwo.style.left = percent + "%";

  resLeftTwo.innerHTML = inputLeftTwo.value + " $";
}
setLeftValueTwo();

function setRightValueTwo() {
  var _this = inputRighTwo,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeftTwo.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRightTwo.style.right = (100 - percent) + "%";
  rangeTwo.style.right = (100 - percent) + "%";

  resRightTwo.innerHTML = inputRighTwo.value + " $";
}
setRightValueTwo();

inputLeftTwo.addEventListener("input", setLeftValueTwo);
inputRighTwo.addEventListener("input", setRightValueTwo);



  

// RANGE PRICE BAR THREE
var inputLeftThree = document.getElementById("input-leftThree");
var inputRighThree = document.getElementById("input-rightThree");

var thumbLeftThree = document.querySelector(".slider.Three > .thumb.left.Three");
var thumbRightThree = document.querySelector(".slider.Three > .thumb.right.Three");
var rangeThree = document.querySelector(".slider.Three > .range.Three");


 var resLeftThree = document.getElementById("resLeftThree");
var resRightThree = document.getElementById("resRightThree");

function setLeftValueThree() {
  var _this = inputLeftThree,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRighThree.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeftThree.style.left = percent + "%";
  rangeThree.style.left = percent + "%";

  resLeftThree.innerHTML = inputLeftThree.value + " m<sup>2</sup>";
}
setLeftValueThree();

function setRightValueThree() {
  var _this = inputRighThree,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeftThree.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRightThree.style.right = (100 - percent) + "%";
  rangeThree.style.right = (100 - percent) + "%";

  resRightThree.innerHTML = inputRighThree.value + " m<sup>2</sup>";
}
setRightValueThree();

inputLeftThree.addEventListener("input", setLeftValueThree);
inputRighThree.addEventListener("input", setRightValueThree);




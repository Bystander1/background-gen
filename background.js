var _ = require('lodash');
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// addEventListener("load", (e) => {
// 	color1.value = body.style.background;
// 	color2.value = body.style.background;
// });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


// Write code so that the colour inputs match the background generated on the first page load.

const body1 = document.querySelector('body'); //select body element
const getStyle = window.getComputedStyle(body1); //get body style
var rex = getStyle.background; //get all of the body background css

var regExp = /linear-gradient\(to right, rgb\(.+/; //not sure how but it shorten the background style
var matches = regExp.exec(rex); //assign shorten value to matches


var regExp2 = /rgb\(............/; //only grab the first color in the color gradient

// var regExp2 = /rgb.+/;
var mat2 = regExp2.exec(matches); //assigned that value to mat 2

color1.value = mat2; //currently the button is green #00ff00
//after assignment, the button became black when it should be yellow



// color1.value = 'linear-gradient('
// 	+ 'to right' + ', ' + ___ + ', ' + colorTwo + ')';

// color1.value = body.style("background".)


// Display the initial CSS linear gradient property on page load.

// BONUS: Add a random button which generates two random numbers for the colour inputs.

// You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!
'use strict';
// GENERAL ELEMENTS
const form = document.querySelector('.js_form');
const resetBtn = document.querySelector('.js_resetBtn');
// SQUARE ELEMENTS
const inputSquare = document.querySelector('.js_inputSquare');
const squarePerimeterBtn = document.querySelector('.js_squarePermiterBtn');
const squarePerimeterResult = document.querySelector(
  '.js_squarePerimeterResult'
);
const squareAreaBtn = document.querySelector('.js_squareAreaBtn');
const squareAreaResult = document.querySelector('.js_squareAreaResult');
//TRIANGLE ELEMENTS
// *** perimeter***
const inputSideOneTriangle = document.querySelector('.js_inputSideOneTriangle');
const inputSideTwoTriangle = document.querySelector('.js_inputSideTwoTriangle');
const inputBaseTriangle = document.querySelector('.js_inputBaseTriangle');
const trianglePerimeterBtn = document.querySelector('.js_trianglePerimiterBtn');
const trianglePerimeterResult = document.querySelector(
  '.js_trianglePerimeterResult'
);
//***area */
const inputHeight = document.querySelector('.js_inputHeightArea');
const inputBaseArea = document.querySelector('.js_inputBaseArea');
const triangleAreaBtn = document.querySelector('.js_triangleAreaBtn');

const triangleAreaResult = document.querySelector('.js_triangleAreaResult');
//CIRCLE ELEMENTS
const inputRadiusCircle = document.querySelector('.js_inputRadiusCircle');
const circlePerimeterBtn = document.querySelector('.js_circlePerimeterBtn');
const circlePerimeterResult = document.querySelector(
  '.js_circlePerimeterResult'
);
const circleAreaBtn = document.querySelector('.js_circleAreaBtn');
const circleAreaResult = document.querySelector('.js_circleAreaResult');

function handleSubmit(event) {
  event.preventDefault();
}

form.addEventListener('click', handleSubmit);

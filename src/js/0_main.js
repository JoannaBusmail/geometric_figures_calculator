'use strict';
// GENERAL ELEMENTS
const form = document.querySelector('.js_form');

// RESET ELEMENTS
//***SQUARE
const resetBtnSq = document.querySelector('.js_resetBtnSq');
const resetInputSq = document.querySelector('.js_resetInputSq');
const resetPerResultSq = document.querySelector('.js_resetPerResultSq');
const resetAreaResultSq = document.querySelector('.js_resetAreaResultSq');
//***TRIANGLE
const resetInputOne = document.querySelector('.js_resetInputOne');
const resetInputTwo = document.querySelector('.js_resetInputTwo');
const resetInputThree = document.querySelector('.js_resetInputThree');
const resetPerimeterTri = document.querySelector('.js_resetPerimeterTri');
const resetInputH = document.querySelector('.js_resetInputH');
const resetInputB = document.querySelector('.js_resetInputB');
const resetResultArea = document.querySelector('.js_resetResultArea');
const resetBtnTri = document.querySelector('.js_resetBtnTri');
//**circle */
const resetInputCircle = document.querySelector('.js_resetInputCircle');
const resetPerimeterResultCirc = document.querySelector(
  '.js_resetPerimeterResultCirc'
);
const resetAreaCirc = document.querySelector('.js_resetAreaCirc');
const resetBtnCirc = document.querySelector('.js_resetBtnCirc');

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
const inputCircle = document.querySelector('.js_inputRadiusCircle');
const circleDiameterBtn = document.querySelector('.js_circlePerimeterBtn');
const circlePerimeterResult = document.querySelector(
  '.js_circlePerimeterResult'
);
const circleAreaBtn = document.querySelector('.js_circleAreaBtn');
const circleAreaResult = document.querySelector('.js_circleAreaResult');

function handleSubmit(event) {
  event.preventDefault();
}

form.addEventListener('click', handleSubmit);

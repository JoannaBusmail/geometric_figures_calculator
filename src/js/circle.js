'use strict';

// FUNCTION OPERATORS
function circleDiameter() {
  const radius = parseInt(inputRadiusCircle.value);
  const circleDResult = radius * 2;
  console.log(circleDResult);
  return circleDResult;
}

function circleArea() {
  const radius = parseInt(inputRadiusCircle.value);
  const circleAreaResult = Math.PI * (radius * 2);
  console.log(circleAreaResult);
  return circleAreaResult;
}

// RENDER FUNCTIONS
function printCircleDiameter(circleD) {
  circlePerimeterResult.innterHTML = `<p>El diametro del círculo es ${circleD}</p>`;
}

function printCircleArea(areaD) {
  circleAreaResult.innterHTML = `<p>El área del círculo es ${areaD}</p>`;
}
// HANDLE FUNCTIONS
function handlePerimeterCircleBtn(event) {
  event.preventDefault();
  const diaRsult = circleDiameter();
  printCircleDiameter(diaRsult);
}

function handleAreaCircleBtn(event) {
  event.preventDefault();
  const areaRes = circleArea();
  printCircleArea(areaRes);
}
//LISTENERS
circlePerimeterBtn.addEventListener('click', handlePerimeterCircleBtn);

circleAreaBtn.addEventListener('click', handleAreaCircleBtn);

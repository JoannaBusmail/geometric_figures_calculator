'use strict';

// FUNCTION OPERATORS
function circleDiameter() {
  const radiusCircle = inputCircle.value;
  const circleDResult = radiusCircle * 2;
  console.log(circleDResult);
  return circleDResult;
}

function circleArea() {
  const radiusCircle = inputCircle.value;
  const circleAreaResult = Math.PI * (radiusCircle * 2);
  console.log(circleAreaResult);
  return circleAreaResult;
}

// RENDER FUNCTIONS
function printCircleDiameter(circleD) {
  circlePerimeterResult.innerHTML = `<p> El diametro del círculo es ${circleD}</p>`;
}

function printCircleArea(areaD) {
  circleAreaResult.innerHTML = `<p> El área del círculo es ${areaD}</p>`;
}
// HANDLE FUNCTIONS
function handleDiameterCircleBtn(event) {
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
circleDiameterBtn.addEventListener('click', handleDiameterCircleBtn);

circleAreaBtn.addEventListener('click', handleAreaCircleBtn);

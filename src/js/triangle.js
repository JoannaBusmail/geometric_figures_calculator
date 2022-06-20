'use strict';
//FUNCTION OPERATOR

function trianglePerimeter() {
  const inputSideOne = parseInt(inputSideOneTriangle.value);
  const inputSideTwo = parseInt(inputSideTwoTriangle.value);
  const inputBase = parseInt(inputBaseTriangle.value);
  const triPerimeter = inputSideOne + inputSideTwo + inputBase;
  console.log(triPerimeter);
  return triPerimeter;
}

function triangleArea() {
  const inputHeightT = parseInt(inputHeight.value);
  const inputBaseAreaT = parseInt(inputBaseArea.value);
  const triArea = (inputHeightT * inputBaseAreaT) / 2;
  return triArea;
}
// RENDER FUNCTION

function printTrianglePerimeter(triP) {
  trianglePerimeterResult.innerHTML = `<p> El perimetro del triangulo es ${triP}</p>`;
}

function printTriangleArea(triA) {
  triangleAreaResult.innerHTML = `<p> El área del triangulo es ${triA}</p>`;
}

// HANDLE FUNCTION
function handleTrianglePerimeterBtn(event) {
  event.preventDefault();
  const resultTP = trianglePerimeter();
  printTrianglePerimeter(resultTP);
}

function handleTriangleAreaBtn(event) {
  event.preventDefault();
  const resultTA = triangleArea();
  printTriangleArea(resultTA);
}

//LISTENER
trianglePerimeterBtn.addEventListener('click', handleTrianglePerimeterBtn);
triangleAreaBtn.addEventListener('click', handleTriangleAreaBtn);

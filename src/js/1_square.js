'use strict';

//OPERATOR FUNCTIONS
function sqPerimeter() {
  const inputSq = inputSquare.value;
  const resultsqP = inputSq * 4;
  return resultsqP;
}

function sqArea() {
  const inputSq = inputSquare.value;
  const resultsqA = inputSq * inputSq;
  return resultsqA;
}

// RENDER FUNCTIONS
function paintSquarePerimeter(sqP) {
  squarePerimeterResult.innerHTML = `<p> El perimetro del cuadrado es ${sqP} </p>`;
}
function paintSquareArea(sqA) {
  squareAreaResult.innerHTML = `<p> El área del cuadrado es ${sqA}</p>`;
}

//HANDLE FUNCTIONS
function handleSquarePerimeterBtn(event) {
  event.preventDefault();
  const resultSqP = sqPerimeter();
  paintSquarePerimeter(resultSqP);
}

function handleSquareAreaBtn(event) {
  event.preventDefault();
  const resultsqA = sqArea();
  paintSquareArea(resultsqA);
}
//LISTENERS
squarePerimeterBtn.addEventListener('click', handleSquarePerimeterBtn);
squareAreaBtn.addEventListener('click', handleSquareAreaBtn);

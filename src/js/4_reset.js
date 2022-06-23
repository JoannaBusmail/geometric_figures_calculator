'use strict';

//function
function resetSq() {
  resetInputSq.value = '';
  resetPerResultSq.classList.add('hidden');
  resetAreaResultSq.classList.add('hidden');
}

function resetTri() {
  resetInputOne.value = '';
  resetInputTwo.value = '';
  resetInputThree.value = '';
  resetInputH.value = '';
  resetInputB.value = '';
  resetPerimeterTri.classList.add('hidden');
  resetResultArea.classList.add('hidden');
}

function resetCirc() {
  resetInputCircle.value = '';
  resetPerimeterResultCirc.classList.add('hidden');
  resetAreaCirc.classList.add('hidden');
}

//HandleFunction
function handleResetBtnSq(event) {
  event.preventDefault();
  resetSq();
}

function handleResetBtnTri(event) {
  event.preventDefault();
  resetTri();
}

function handleResetBtnCirc(event) {
  event.preventDefault();
  resetCirc();
}
// listener
resetBtnSq.addEventListener('click', handleResetBtnSq);
resetBtnTri.addEventListener('click', handleResetBtnTri);
resetBtnCirc.addEventListener('click', handleResetBtnCirc);

const defaultResult = 0;
let currentResult = defaultResult;

// template literal
// let calculationDescription = `${defaultResult} + 10 * 3 / 2 - 1`; //alt+96 = `

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

const display = document.querySelector('.display');

let firstValue = '';
let secondValue = '';
let operator = '';

let isCalculated = false;

function updateDisplay(text) {
    display.innerHTML = text;
}

function appendNumber(number) {
    if (isCalculated) {
        firstValue = '';
        operator = '';
        secondValue = '';
        isCalculated = false;
    }

    if (number == '.') {
        if (!operator && firstValue.includes('.')) {
            return;
        }

        if (operator && secondValue.includes('.')) {
            return;
        }
    }

    if (!operator) {
        firstValue += number;
        updateDisplay(firstValue);
    }
    else {
        secondValue += number;
        updateDisplay(`${firstValue} ${operator} ${secondValue}`);
    }
}

function chooseOperator(op){
    if (!firstValue) {
        return;
    }

    if (isCalculated) {
        isCalculated = false;
    }

    if (firstValue && operator && secondValue) {
        calculate();
    }

    operator = op;
    updateDisplay(`${firstValue} ${operator}`);
}

function calculate() {
  if (!firstValue || !operator || !secondValue) return;

  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);
  let result = 0;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === 'x') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      updateDisplay('Error');
      firstValue = '';
      operator = '';
      secondValue = '';
      isCalculated = true;
      return;
    }
    result = num1 / num2;
  } else if (operator === '%') {
    result = num1 % num2;
  }

  result = Math.round(result * 1000000) / 1000000;

  updateDisplay(result);

  firstValue = result.toString();
  operator = '';
  secondValue = '';
  isCalculated = true;
}


function calculateSquareRoot() {
  if (!firstValue || operator) return;

  const num = parseFloat(firstValue);
  if (num < 0) {
    updateDisplay('Error');
    firstValue = '';
    isCalculated = true;
    return;
  }

  let result = Math.sqrt(num);
  result = Math.round(result * 1000000) / 1000000;

  updateDisplay(result);
  firstValue = result.toString();
  isCalculated = true;
}


function deleteLast() {
  if (isCalculated) return;

  if (secondValue) {
    secondValue = secondValue.slice(0, -1);
    updateDisplay(`${firstValue} ${operator} ${secondValue}`.trim());
  } else if (operator) {
    operator = '';
    updateDisplay(firstValue);
  } else if (firstValue) {
    firstValue = firstValue.slice(0, -1);
    updateDisplay(firstValue || '0');
  }
}

function clearAll() {
  firstValue = '';
  operator = '';
  secondValue = '';
  isCalculated = false;
  updateDisplay('0');
}


document.querySelector('.zero').addEventListener('click', () => appendNumber('0'));
document.querySelector('.one').addEventListener('click', () => appendNumber('1'));
document.querySelector('.two').addEventListener('click', () => appendNumber('2'));
document.querySelector('.three').addEventListener('click', () => appendNumber('3'));
document.querySelector('.four').addEventListener('click', () => appendNumber('4'));
document.querySelector('.five').addEventListener('click', () => appendNumber('5'));
document.querySelector('.six').addEventListener('click', () => appendNumber('6'));
document.querySelector('.seven').addEventListener('click', () => appendNumber('7'));
document.querySelector('.eight').addEventListener('click', () => appendNumber('8'));
document.querySelector('.nine').addEventListener('click', () => appendNumber('9'));
document.querySelector('.point').addEventListener('click', () => appendNumber('.'));

document.querySelector('.add').addEventListener('click', () => chooseOperator('+'));
document.querySelector('.sub').addEventListener('click', () => chooseOperator('-'));
document.querySelector('.multiply').addEventListener('click', () => chooseOperator('x'));
document.querySelector('.divide').addEventListener('click', () => chooseOperator('/'));
document.querySelector('.mod').addEventListener('click', () => chooseOperator('%'));
document.querySelector('.sqrt').addEventListener('click', calculateSquareRoot);

document.querySelector('.equal').addEventListener('click', calculate);
document.querySelector('.delete').addEventListener('click', deleteLast);
document.querySelector('.clear').addEventListener('click', clearAll);

clearAll();
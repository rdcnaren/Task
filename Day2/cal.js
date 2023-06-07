let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const isNumber = /[0-9]/.test(key);

  if (isNumber) {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendOperator(key);
  } else if (key === 'Enter') {
    calculator();
  } else if (key === 'Escape') {
    clearResult();
  }
});
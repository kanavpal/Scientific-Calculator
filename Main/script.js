const display = document.getElementById('display');

// Append value to the display
function append(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    // Evaluate the input and handle math functions
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid Input');
  }
}

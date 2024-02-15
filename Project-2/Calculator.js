function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.substring(
    0,
    displayValue.length - 1
  );
}

function calculate() {
  var displayValue = document.getElementById("display").value;
  var result = eval(displayValue); // Using eval for simplicity, not recommended for production use.
  document.getElementById("display").value = result;
}

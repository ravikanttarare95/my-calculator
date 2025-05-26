const display = document.getElementById("display");
function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {}

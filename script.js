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

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

let themeIcon = document.getElementById("theme-icon");
function toggleThemeMode() {
  if (themeIcon.src.includes("light-mode.png")) {
    document.body.classList.add("dark-mode");
    themeIcon.src = "./images/night-mode.png";
    localStorage.setItem("themeMode", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.src = "./images/light-mode.png";
    localStorage.setItem("themeMode", "light");
  }
}

window.onload = function () {
  const themeMode = localStorage.getItem("themeMode");
  if (themeMode === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "./images/night-mode.png";
  } else {
    document.body.classList.add("light-mode");
    themeIcon.src = "./images/light-mode.png";
  }
};

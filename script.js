const display = document.getElementById("display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn") &&
    !e.target.classList.contains("btn-equal") &&
    e.target.innerText !== "AC" &&
    e.target.innerText !== "DEL"
  ) {
    display.value += e.target.innerText;
  }
});

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/"); // Very Important Concept
  try {
    const result = eval(expression);
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
  }
};

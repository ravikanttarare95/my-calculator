const display = document.getElementById("display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return; // very important prevent unexpected behaviour when we click outside of the button

  let inputValue = e.target.innerText;

  switch (inputValue) {
    case "AC":
      clearDisplay();
      break;
    case "DEL":
      deleteLastCharacter();
      break;
    case "=":
      calculateResult();
      break;
    default: {
      const lastChar = display.value.slice(-1);
      const operators = ["%", "÷", "-", "+", "×", "."];
      if (operators.includes(inputValue) && operators.includes(lastChar)) {
        return;
      }
      display.value += inputValue;
    }
  }
});

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const expression = display.value
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/%/g, "/100*"); // Very Important Concept
  try {
    const result = math.evaluate(expression);
    display.value =
      typeof result === "number" && !Number.isInteger(result)
        ? result.toFixed(6).replace(/\.?0+$/, "")
        : result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
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
    document.body.classList.remove("dark-mode");
    themeIcon.src = "./images/light-mode.png";
  }
};

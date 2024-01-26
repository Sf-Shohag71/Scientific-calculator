const display = document.getElementById("cal-display");
const buttons = document.getElementsByClassName("btn");

let currentValue = "";

evaluateResult = () => {
  // console.log("current value: ", currentValue);
  const convertedValue = currentValue
    .replace("×", "*")
    .replace("÷", "/")
    .replace("%", "*0.01")
    .replace("sin", "Math.sin")
    .replace("cos", "Math.cos")
    .replace("𝝅", "Math.PI")
    .replace("ln", "Math.log")
    .replace("log", "Math.log10")
    .replace("e", "Math.E")
    .replace("tan", "Math.tan")
    .replace("√", "Math.sqrt");
  // console.log("converted value", convertedValue);
  const result = eval(convertedValue);
  currentValue = result.toString();
  // console.log(currentValue);
  display.value = currentValue;
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", () => {
    const value = button.innerText;

    try {
      if (value === "AC") {
        currentValue = "";
        display.value = currentValue;
      } else if (value === "=") {
        evaluateResult();
      } else {
        currentValue += value;
        display.value = currentValue;
      }
    } catch (error) {
      alert("ERROR!, Please type valid input.");
      currentValue = "ERROR";
      display.value = currentValue;
    }
  });
}

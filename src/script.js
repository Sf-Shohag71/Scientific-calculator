const display = document.getElementById("cal-display");
const buttons = document.getElementsByClassName("btn");

let currentValue = "";

evaluateResult = () => {
    // console.log("current value: ", currentValue);
  const convertedValue = currentValue
    .replace("×", "*")
    .replace("÷", "/")
    .replace("%", "*0.01");
    // console.log("converted value", convertedValue);
  const result = eval(convertedValue);
  currentValue = result.toString();
  console.log(currentValue);
  display.value = currentValue;
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", () => {
    const value = button.innerText;
    if (value === "AC") {
      currentValue = "";
      display.value = currentValue;
    } else if (value === "=") {
      evaluateResult();
    } else {
      currentValue += value;
      display.value = currentValue;
    }
  });
}

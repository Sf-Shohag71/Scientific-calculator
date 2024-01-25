const display = document.getElementById("cal-display");
const buttons = document.getElementsByClassName("btn");

let currentValue = "";

evaluateResult = () => {
  const result = eval(currentValue);
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

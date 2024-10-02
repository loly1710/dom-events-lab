/*-------------------------------- Constants --------------------------------*/
const display = document.getElementById("display");
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // Future logic to capture the button's value would go here...
    if (event.target.innerText === "C") {
      clear();
    } else if (event.target.innerText === "=") {
      calculate();
    } else {
      toDisplay(event.target.innerText);
    }
  });
});

/*calculator.addEventListener("click", (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains("number")) {
    // Do something with a number
    
  }

  // Example
  if (event.target.innerText === "C") {
    // Do something with this operator
  }
});*/
/*-------------------------------- Functions --------------------------------*/
function toDisplay(input) {
  display.value += input;
}

function clear() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

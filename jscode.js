let plus = document.querySelector(".plus");
let mult = document.querySelector(".multiplication");
let div = document.querySelector(".division");
let percent = document.querySelector(".percent");
let dot = document.querySelector(".dot");
let minus = document.querySelector(".minus");

let equal = document.querySelector(".equal");
let del = document.querySelector(".DEL");
let ac = document.querySelector(".AC");

let open_bracket = document.querySelector(".open-square-brackets");
let closed_bracket = document.querySelector(".closed-square-brackets");
let power = document.querySelector(".power");
let root = document.querySelector(".root");

let input = document.querySelector("input");
let grid_element = document.querySelectorAll(".input");
let input_string;

input.value = "";
input_string = "";

grid_element.forEach((element) => {
  if (element === power) {
    element.addEventListener("click", function () {
      input.value += element.textContent.slice(1);
      input_string += "**2";
    });
    return;
  } else if (element == root) {
    element.addEventListener("click", function () {
      input.value += element.textContent.slice(1);
      input_string += "**(1/2)";
    });
  } else {
    element.addEventListener("click", function () {
      switch (element) {
        case plus:
          input_string += "+";
          break;
        case mult:
          input_string += "*";
          break;
        case div:
          input_string += "/";
          break;
        case percent:
          input_string += "%";
          break;
        case dot:
          input_string += ".";
          break;
        case minus:
          input_string += "-";
          break;
        case open_bracket:
          input_string += "(";
          break;
        case closed_bracket:
          input_string += ")";
          break;
        default:
          input_string += element.textContent;
      }
      input.value += element.textContent;
    });
  }
});

ac.addEventListener("click", () => {
  input.value = "";
  input_string = "";
});

del.addEventListener("click", () => {
  input.value = input.value.slice(0, input.value.length - 1);
  input_string -= input_string;
});

equal.addEventListener("click", function () {
  input.value = eval(input_string);
  input_string = `${input.value}`;
});

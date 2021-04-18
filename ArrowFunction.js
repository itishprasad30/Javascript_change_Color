/** 
function sum(a, b) {
  return a + b;
}
// arrow function
let sum2 = (a, b) => a + b;

console.log(sum(2, 1));
console.log(sum2(42, 12));

function isPositive(number) {
  return number >= 0;
}
let isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}
let randomNumber2 = () => console.log(Math.random() * 1000000);

randomNumber2();

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => console.log("click"));
**/

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow :>>>>" + this.name);
    }, 1000);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function:>>>> " + this.name);
    }, 10000);
  }
}

let person = new Person(" Itish prasad sahoo");

person.printNameArrow();
person.printNameFunction();

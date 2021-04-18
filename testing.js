// var fruit = "apple";

// function callingfruit() {
//   var fruit = "orange";
//   console.log(fruit);
// }

// console.log(fruit);
// callingfruit();

// var x = 56;
// console.log(x);

// x = 78;
// console.log(x);

// function haa() {
//   x = 33;
//   console.log(x);
// }

// haa();
// console.log(x);
// let y = 71;
// console.log(y);

// function saa() {
//   let y = 11;
//   console.log(y);
// }
// saa();

// console.log(y);

// var i = 10;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// var i = 10;

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// let i = 10;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// Function

// function greet() {
//   console.log("Hello there :)");
// }

// greet();

// function add(a, b) {
//   return a + b;
// }

// let x = add(5, 9);
// console.log(x);
// let z = 111;
// function hell() {
//   z = 12;
// }
// console.log(z);
// hell();

// console.log(z);

// let my = document.querySelector("h1");

// my.textContent = "Hell0 Pintu :) :)";

// let axz = function greet() {
//   console.log(":)");
// };

// greet();

// Recurrsive function

// function countDown(number) {
//   // print the value

//   console.log(number);

//   // decresed by 1
//   newNumber = number - 1;

//   // base case
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(5);


// Function prototype
// constuctor
/*
function Person() {
  this.name = 'pintu',                //  function constuctor  object
    this.age = 20
}

let person1 = new Person();      // created object from constructor
console.log(Person);  // [Function: Person]
console.log(person1);  //Person { name: 'pintu', age: 20 }

console.log(Person.prototype);   // since it have no prototype value so Person{} empty

// adding perpoty to the constuctor function
Person.prototype.gender = 'male';

//  prototype value of a person
console.log(Person.prototype);

console.log(person1.gender);


console.log(person1);

*/



//  Titile ::::: changing the ProtoType

/*
function Person() {
  name: 'pintu sahoo'

}

// adding property
Person.prototype.age = 20

// creating object
let person1 = new Person();

console.log(person1.age);//20

// changing the property value

Person.prototype = { age: 40 }

let person2 = new Person();

console.log(person2.age);// 40

console.log(person1.age); // 20


*/


function Person() {
  this.name = 'John'
}

// adding property 
Person.prototype = { name: 'Peter' }
Person.prototype.age = 23

let person1 = new Person();

console.log(person1.name); // John
console.log(person1.age); // 23


// let student = {

//   // data property
//   firstName: 'Monica',

//   //accessor property(getter)
//   get getName() {
//     return this.firstName;
//   }

// };

// // accessing data property
// console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// //trying to access as a method
// // console.log(student.getName()); // error



let student = {
  firstName: 'Monica',

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

console.log("items ----->>>>>", items);

const filterdItems = items.filter((item) => {
  return item;
});

console.log(filterdItems);

const filterdItemsTwo = items.filter((item) => {
  return item.price <= 100;
});

console.log(filterdItemsTwo);
// Map Method in array
const mapItemsMethod = items.map((item) => {
  return item.price;
});

console.log("map methods = > ", mapItemsMethod);
// To find the something in the array
const foundItems = items.find((e) => {
  return e.price === 1000;
});
console.log(foundItems);

// for Each
items.forEach((item) => {
  console.log(item.price);
});

// SOme and every its return true or false
const Inexpensive = items.some((item) => {
  return item.price <= 5;
});

console.log(Inexpensive);
// every items in the array must be smaller than the 1000
const expensive = items.every((item) => {
  return item.price <= 1000;
});

console.log(expensive);

// reduce methods
const Total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(Total);

// includes examples retuns true or false
const example = [1, 2, 3, 4, 5, 6, 7];
const includeOne = example.includes(11);
console.log(includeOne);

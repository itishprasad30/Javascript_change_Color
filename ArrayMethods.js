const companies = [
  { name: "Company One", catagory: "Finace", start: 1981, end: 2003 },
  { name: "Company Two", catagory: "Software", start: 1997, end: 2007 },
  { name: "Company Three", catagory: "Finace", start: 1990, end: 2010 },
  { name: "Company Four", catagory: "Stock price", start: 1999, end: 2014 },
  { name: "Company Five", catagory: "Food serving", start: 1996, end: 2009 },
  { name: "Company Six", catagory: "Software", start: 2000, end: 2012 },
];
console.log(companies);
// console.table(companies);

// For loop methods
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// ForEach methods
// companies.forEach(function (comp) {
//   console.log(comp);
// });

const ages = [33, 144, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// filter methods()

// let newage = [];
// for (i = 0; i < age.length; i++) {
//   //   console.log(age[i]);
//   if (age[i] > 26) {
//     newage.push(age[i]);
//   }
// }
// console.log(newage);

// const newAge = ages.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });

// const newAge = ages.filter((age) => age >= 30);
// console.log(newAge);

// const retailCatagory = companies.filter(function (company) {
//   if (company.catagory === "Software") {
//     return true;
//   }
// });
// const retailCatagory = companies.filter((cata) => cata.catagory === "Finace");
// console.log(retailCatagory);

// // ninty company 1990-2000
// const nintyCompany = companies.filter(
//   (company) => company.start >= 1990 && company.start < 2000
// );
// console.log(nintyCompany);

// // gets the company that lasted for 15 years
// const lastedTenyears = companies.filter(
//   (company) => company.end - company.start >= 15
// );

// console.log(lastedTenyears);

// MAP methods for array it creates a new array

// const test = companies.map(function (name) {
//   return `${name.name} [${name.start} - ${name.end}]`;
// });

// const test = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(test);

// const sqrtAges = ages.map((age) => Math.sqrt(age));
// console.log(sqrtAges);
// const twotimes = ages.map((age) => age * 2);
// console.log(twotimes);

// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(ageMap);

// // SORT method

// const sortedyear = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedyear);

// // sort ages
// const sortedages = ages.sort((a, b) => a - b);
// console.log(sortedages);

// reduce method Basically it sum the total

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const total2 = ages.reduce(function (total, age) {
//   return total + age;
// }, );
// console.log(total2);
// // alternative method

// const total = ages.reduce((a, b) => a + b, 0);
// console.log(total);

// const Test = [12, 225, 124, 211, 248];

// const total = Test.reduce((a, b) => a + b, 0);
// console.log(total);

// Combined methods
// console.log(ages);
const dem = [1, 2, 3, 4, 5, 6];
const combi = dem
  .map((de) => de * 2)
  .filter((de) => de >= 5)
  .sort((a, b) => b - a)
  .reduce((a, b) => a + b, 0);

console.log(combi);

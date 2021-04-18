let getMyGrade = function (currentMarks, totalMarks) {
  let myPercent = (currentMarks / totalMarks) * 100;
  let MyGrade = "";

  if (myPercent >= 90) {
    MyGrade = "A";
  } else if (myPercent >= 80) {
    MyGrade = "B";
  } else if (myPercent >= 70) {
    MyGrade = "C";
  } else if (myPercent >= 60) {
    MyGrade = "D";
  } else if (myPercent >= 50) {
    MyGrade = "E";
  } else if (myPercent >= 40) {
    MyGrade = "f";
  } else {
    console.log("you are fail");
  }
  return `yours grade is ${MyGrade} and percent is ${myPercent}`;
};
let yourResult = getMyGrade(441, 600);
console.log(yourResult);

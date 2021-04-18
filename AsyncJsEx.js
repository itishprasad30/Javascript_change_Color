// // Sync Code

// function helloWorld() {
//   console.log("We are inside the function");
// }
// console.log("start");

// helloWorld();
// console.log("end");

// {OUT PUT}
// start
// We are inside the function
// end

// Async code
// console.log("start");
// setTimeout(() => {
//   console.log("this will lastly print");
// }, 2000);
// console.log("end");

// {Output}
// start
// end
// this will lastly print

console.log("start");

function loginUser(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ userEmail: email, password: pass });
    }, 2000);
  });
}

function videoDisplay(email) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log(`video rendering ${email}`);
      res(["video1", "video2"]);
    }, 3000);
  });
}
// const user = loginUser("ititsh@gmail.com", 123, (user) => {
//   console.log(user);
//   videoDisplay(user.userEmail, (videos) => {
//     console.log(videos);
//   });
// });

// loginUser("hello@gmail", "pintu")
//   .then((user) => videoDisplay(user.userEmail))
//   .then((video) => console.log(video));

async function displayUser() {
  const logged = await loginUser("pintu sahoo", 145);
  console.log(logged);
  const video = await videoDisplay(logged.userEmail);
  console.log(video);
}
displayUser();
console.log("finished");

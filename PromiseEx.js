console.log("start");
const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting data from youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("stuff from fb");
    resolve({ user: "name" });
  }, 6000);
});

Promise.all([yt, fb]).then((result) => console.log(result));

console.log("end");

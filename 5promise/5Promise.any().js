const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

Promise.any([p1, p2, p3])
  .then(result => console.log("First success:", result))
  .catch(err => console.error(err));

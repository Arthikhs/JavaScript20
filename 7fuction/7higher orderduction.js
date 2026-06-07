/* take another fuction is arrgements or call backfuction */
 function greet(name) {
  return `hello,${name}`;
 }

 function processUserInput(callback) {
  let name = "Arthik";
  return callback(name);
 }
  console.log(processUserInput(greet));
// fuction returning another fuction
function multiplierx(x) {
  return function (y) {
    return x*y
  }
}
let double =multiplierx(2)
console.log(double(5));




let numbers = [1, 2, 3, 4];

let squares = numbers.map(n => n * n);   // [1, 4, 9, 16]
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]
let sum = numbers.reduce((a, b) => a + b, 0); // 10

setTimeout(() => console.log("Runs after 2s"), 2000);

setInterval(() => console.log("Repeats every 3s"), 3000);

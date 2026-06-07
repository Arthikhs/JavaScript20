//– Function Parameters

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10




//array destructing
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4]


//Object Destructuring
const obj = {a: 1, b: 2, c: 3};
const {a, ...restObj} = obj;
console.log(a);       // 1
console.log(restObj); // {b:2, c:3}

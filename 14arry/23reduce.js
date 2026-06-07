//reduce()
let numbers = [1, 22, 55263, 224, 205];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum)


const number = [5, 8, 2, 10, 3];

const max = number.reduce((acc, curr) => acc < curr ? acc : curr);

console.log(max); // 10

//: Flatten an Array
  const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]

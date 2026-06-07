let arr1 = [1, 2];
let arr2 = [3, 4];

let result = [...arr1, ...arr2];
console.log(result); // [1, 2, 3, 4]



const arr10 = [1, 2, 3];
const arr20 = [4, 5, 6];

const combined = [...arr10, ...arr20];
console.log(combined);


const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const merged = {...obj1, ...obj2};
console.log(merged); 

function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6



const arr = [..."arthik"]
console.log(arr);


/*
The spread operator ... 
breaks the string into individual characters.
*/
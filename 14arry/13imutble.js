/*
1️⃣ concat() – Combines arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

let newArr = arr1.concat(arr2);

console.log(newArr); // [1, 2, 3, 4]
console.log(arr1);   // [1, 2] → original array unchanged

2️⃣ slice() – Returns a portion of array
let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(1, 4); // from index 1 up to but not including 4

console.log(newArr); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50] → original array unchanged

3️⃣ map() – Returns a new array after transformation
let arr = [1, 2, 3];

let newArr = arr.map(x => x * 2);

console.log(newArr); // [2, 4, 6]
console.log(arr);    // [1, 2, 3] → original array unchanged

4️⃣ filter() – Returns a new array with elements that pass a test
let arr = [5, 10, 15, 20];

let newArr = arr.filter(x => x > 10);

console.log(newArr); // [15, 20]
console.log(arr);    // [5, 10, 15, 20] → original array unchanged

5️⃣ reduce() – Returns a single value
let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
console.log(arr); // [1, 2, 3, 4] → original array unchanged

6️⃣ flat() – Flattens nested arrays
let arr = [1, [2, 3], [4, [5, 6]]];

let newArr = arr.flat(); // flattens 1 level

console.log(newArr); // [1, 2, 3, 4, [5, 6]]
console.log(arr);    // [1, [2, 3], [4, [5, 6]]] → original array unchanged

7️⃣ flatMap() – Maps and flattens
let arr = [1, 2, 3];

let newArr = arr.flatMap(x => [x, x * 2]);

console.log(newArr); // [1, 2, 2, 4, 3, 6]
console.log(arr);    // [1, 2, 3] → original array unchanged
*/
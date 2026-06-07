//Using includes()
let arr = [10, 20, 30];

console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false
 //. Using indexOf()
let arr1 = ["apple", "banana", "mango"];

console.log(arr1.indexOf("banana")); // 1
console.log(arr1.indexOf("grapes")); // -1




//Using some()
let numbers1 = [5, 10, 15, 20];
console.log(numbers.some(num => num === 10)); // true
console.log(numbers.some(num => num === 50)); // false

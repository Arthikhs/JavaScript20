let numbers = [10, 20, 30, 40];    // array of numbers
let fruits = ["apple", "banana", "mango"];  // array of strings
let mixed = [1, "hello", true, {name: "Arthik"}, [5, 6, 7]]; // mixed types
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"
console.log(fruits.length); // 3 (number of elements)
//Ways to Create an Array in JavaScript

//using back tickets 
let array= [ 1,25,86,63,]
console.log(array);
 console.log(array.length);
  // using new arrays
let str = new Array(12,8,6,8,62,87,4)
console.log(str);
  //using array.of
 let a = Array.of(9)
 console.log(a);
 
 // array.fromm

 let f = " arthika"
 let array1 = Array.from(f)
 console.log(array1);




 //Accessing Elements in an Array
 
let fruit = ["apple", "banana", "mango"];

console.log(fruit[0]);
console.log(fruit[1]); 
console.log(fruit[2]);
 fruit[2]=" abhi"
console.log(fruit);

//Nested (2D) Array
let matrix = [
  [1,52,63],
  [52,5,6]
  [5,8,9]];

  console.log(matrix[0][2]);
  matrix[0][2] = 52
  

//Length vs Last Index in Arrays
let colors = ["red", "green", "blue", "yellow"];

console.log(colors.length);     // 4 (number of items)
console.log(colors[colors.length - 1]); // "yellow" (last element)


//How Changing length Affects an Array
let nums = [10, 20, 30, 40, 50];

nums.length = 3;   
nums.length = 6;   
console.log(nums);
nums.length = 0;   
console.log(nums);



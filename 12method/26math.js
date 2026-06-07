/*
1. What Math is

Math is a built-in JavaScript object that provides properties and methods for mathematical operations.

You don’t create a Math object; you just call its methods like Math.max() or Math.sqrt().

2. Common Math Methods
Method	Purpose	Example
Math.max(a, b, …)	Returns the largest number from arguments	Math.max(10, 20, 5) → 20
Math.min(a, b, …)	Returns the smallest number from arguments	Math.min(10, 20, 5) → 5
Math.round(x)	Rounds to nearest integer	Math.round(4.6) → 5
Math.floor(x)	Rounds down to nearest integer	Math.floor(4.6) → 4
Math.ceil(x)	Rounds up to nearest integer	Math.ceil(4.2) → 5
Math.abs(x)	Returns the absolute value	Math.abs(-5) → 5
Math.sqrt(x)	Returns square root	Math.sqrt(16) → 4
Math.pow(x, y)	Returns x to the power of y	Math.pow(2, 3) → 8
Math.random()	Returns a random number between 0 and 1	Math.random() → 0.237…
3. Why use Math.max() or Math.min()

Quickly find the largest or smallest numbers in a set of values or an array (with spread ...).

Saves time — no need to write loops manually.

Works with numbers only, so it’s fast and precise.

Example:

let arr = [5, 10, 2, 8];
let largest = Math.max(...arr);
let smallest = Math.min(...arr);

console.log(largest);  // 10
console.log(smallest); // 2*/



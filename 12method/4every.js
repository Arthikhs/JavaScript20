const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
const allEve = numbers.every(num => num % 3 === 0);
console.log(allEve);


/*Correct Ways to Compare Arrays*/
let z = [10, 20, 30];
let b = [10, 20, 30];

let isEqual = z.length === b.length && z.every((val, i) => val === b[i]);
console.log(isEqual); // ✅ true

const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 8 is even)

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

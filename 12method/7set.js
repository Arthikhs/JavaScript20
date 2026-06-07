let arr = [1, 2, 2, 3, 4, 4, 5];
let result = [...new Set(arr)]
console.log(result);
// Creating a Set to store unique numbers
const uniqueNumbers = new Set();

uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(5); // Ignore duplicate values

console.log(uniqueNumbers);
// Output: {5, 10}

// Check size
console.log(uniqueNumbers.size);
// Output: 2

// Check element existence
console.log(uniqueNumbers.has(10));
// Output: true

// Delete element
uniqueNumbers.delete(10);
console.log(uniqueNumbers.size);
// Output: 1

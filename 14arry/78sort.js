let number = [12,8,3,13,5,2,]
number.sort()
console.log(number);
let numbers = [10, 5, 40, 2];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 5, 10, 40]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [40, 10, 5, 2]



let students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 }
];

// Sort by age ascending
students.sort((a, b) => a.age - b.age);
console.log(students);
// [
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 23 },
//   { name: "Alice", age: 25 }
// ]




let arr = [17, 5, 23, 1, 9, 34];

let largest = Math.max(...arr);
let smallest = Math.min(...arr);

console.log("Largest:", largest);   // Output: 34
console.log("Smallest:", smallest); // Output: 1


/*
1. Using sort()
let arr = [17, 5, 23, 1, 9, 34];

// Sort ascending
arr.sort((a, b) => a - b);

let smallest = arr[0];
let largest = arr[arr.length - 1];

console.log("Smallest:", smallest); // 1
console.log("Largest:", largest);   // 34*/
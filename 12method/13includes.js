//Using includes()
let arr = [10, 20, 30];

console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false


let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

console.log(days.includes("Sunday"));   // true
console.log(days.includes("Monday"));   // false
console.log(days.includes("Friday", -3)); // true
console.log(days.includes("Friday", 4)); // false

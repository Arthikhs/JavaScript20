let arr = [5, 12, 8, 130, 44];

let result = arr.findIndex(x => x > 10);

console.log(result);


let arr1 = [5, 12, 8, 130, 44];

let result1 = arr1.findIndex(x => x > 1000);

console.log(result1);

let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

let index1 = days.findIndex((day) => day == "monday");
let index2 = days.findIndex((day) => day == "Sunday");

console.log(index1,index2);

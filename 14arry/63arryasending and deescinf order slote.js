let arr = [20,85,6,9,8,6,89]
let assending = arr.slice().sort((a, b) => a - b);
console.log("ascending",assending)
let arr1= [20,85,6,9,8,6,89]
let descending = arr1.slice().sort((a, b) => b - a);
console.log("Descending:", descending);
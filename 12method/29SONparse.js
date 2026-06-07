let jsonStr = '{"name":"Arthik","age":22}';
let obj = JSON.parse(jsonStr);

console.log(obj.name); // Arthik
console.log(obj.age);  // 22


let jsonStrs = "[1, 2, 3, 4]";
let arr = JSON.parse(jsonStrs);

console.log(arr[2]); // 3

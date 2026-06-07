let arr = [1, 2, 2, 3, 4, 4, 5];
let result = [...new Set(arr)]
console.log(result);



let unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);
let unique1 = arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
console.log(unique1);

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let common = arr1.filter(item => arr2.includes(item));

console.log(common); // Output: [3, 4]



let set2 = new Set(arr2);
let common1 = arr1.filter(item => set2.has(item));

console.log(common1);
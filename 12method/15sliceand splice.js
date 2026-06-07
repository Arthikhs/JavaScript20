//slice()
let arr1 =[20,30,60,40]
console.log(arr1.slice(1,2));

//varray.slice(startIndex, endIndex)  

//splice
let arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

// Insert elements at index 1
arr.splice(1, 0, 99, 100);
console.log(arr); // [1, 99, 100, 4, 5]

// Replace 1 element at index 2 with 200
arr.splice(2, 1, 200);
console.log(arr); // [1, 99, 200, 4, 5] 
     



// length property
const arr2 = [0, 20, 85, 62];
arr2.length = arr2.length - 3;
console.log(arr2); // 




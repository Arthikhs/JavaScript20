let arr = new Array(100)
console.log(arr.length);


let arr1 = new Array(100).fill(0)
console.log(arr1.length);

let arr2 = [...Array(100).keys()] 
console.log(arr2.length);


let arr3 = Array.from({length:100},(_,i)=>i)
console.log(arr3.length);




let a = [undefined, undefined, undefined];
console.log(a.length); 
console.log(0 in a);   
let b = [,,,];
console.log(b.length); 
console.log(0 in b);   // hole

let arr = [[1,2,3],[2,3,5]]
console.log(arr.length)
/*arr = [,,,]

Even though it looks empty, there are 3 empty slots.

So arr.length === 3.

arr2 = [1,2,3,4]

Clearly has 4 elements.

So arr2.length === 4.

arr3 = [[1,2,3],[4,5,6]]

Outer array has 2 elements (each one is another array).

So arr3.length === 2.

Inside:

arr3[0].length === 3

arr3[1].length === 3*/
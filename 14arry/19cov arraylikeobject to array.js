var arrayLike = {0:'a',1:'b',2:'c',3:'d',length:4}
var array1 = Array.from(arrayLike)
console.log(array1);

var array2 = [...Object.values(arrayLike)];
console.log(array2); 


var array3 =  Array.prototype.slice.call(arrayLike);
console.log(array3);
  
let arr = ["a,","b"]
arr = [...arr]
console.log(arr);

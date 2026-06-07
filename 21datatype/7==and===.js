/*console.log([0]==[2]);
//console.log([]===[]);
const a = [];
const b = a;*/

console.log(5 == "5");   // true  (string "5" converted to number 5)
console.log(0 == false); // true  (false converted to 0)
console.log(null == undefined); // true
console.log(0 == true); 

console.log([] == false); 

console.log([] == true); 
console.log([] ==[]); 
console.log([] == []); 
console.log(typeof[]=="object");
console.log(NaN==NaN);
console.log(NaN===NaN);


const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false


let s1 = Symbol("b");
let s2 = Symbol("b");
console.log(s1 === s2); // false




let z = [10,20,30]
let b = [10,20,30]
let r=b;
console.log(z==b);//flase
console.log(r==b);// true
console.log(r==z);//false
  


console.log(NaN==NaN);//flase
console.log(NaN===NaN);//flase
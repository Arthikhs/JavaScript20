// varible declaration

//'use strict'
 let x= 10;
console.log(x);

y = 20;
console.log(y);

// value of this in fuctions

//"use strict";
function show() {
  console.log(this);
}
show(); //undefined

//  dupliate 
function sum(a, a) { 
  return a + a; }

console.log(sum(2, 3)); // 6
 

//Assigning to Read-only Property
const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
obj.x = 20; // ⚠️ silently ignored
console.log(obj.x); // 10
// Deleting Variables or Functions
/*
"use strict";
let a = 10;
delete a; */

//Using Reserved Keywords
/*
let eval = 5; // 
console.log(eval); // 5

*/

//Creating Global Variables Accidentally
/*
function test() {
  y = 50; // ✅ creates global variable
}
test();
console.log(y); // 50
*/

/*"use strict";
eval("var x = 10;");
console.log(typeof x); // undefined
*/
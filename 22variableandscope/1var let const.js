/*A variable is like a container or storage box 
that holds some value (data) in your program.*/
//scope:
var a = 10;
{
  var a = 100;

}
console.log(a);


let b = 20;
{
  let b = 500
}
console.log(b);  

const c = 20;
{
  const c = 30;

}
 console.log(c);
 

 
if (true){
  var a1 = 20;
  let b1 = 203;
  const c1 = 23;
  console.log(a1);
  
  console.log(b1);
  console.log(c1);

}
console.log(a1);

//re declaration
var x = 1;
var x = 2;
console.log(x);

let y = 2;
//let y = 5;
console.log(y);
const z = 6;
//const z = 6;
console.log(z);


//reassigement
var fuck =2;
fuck=3;
console.log(fuck);
let fuck1 =2;
fuck1=3;
console.log(fuck1);
//const fuck =2;
//fuck=3;
//console.log(fuck);





/*
//hoisting

console.log(a);
//console.log(b);
//console.log(c);

var a = 10;
let b = 20;
const c = 30;



//Global Object Binding
var a = 10;
//console.log(window.a); // 10 (in browser)


//Initialization
var a;
console.log(a); // undefined ✅
a = 10;
console.log(a); // 10
/*
let b;
console.log(b); // undefined ✅
b = 20;
console.log(b); // 20
*/

/*
const c;   // ❌ SyntaxError: Missing initializer
const d = 30; // ✅ Works
console.log(d); // 30
*/

/*var a;
console.log(a);

let a;
console.log(a);
  
const b;
console.log(b);*/
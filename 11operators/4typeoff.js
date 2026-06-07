console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a historical quirk!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){});// "function"
console.log(typeof typeof 100); 
console.log(typeof typeof NaN); 

console.log([] + []);
console.log([] + {});
console.log({} + []);


// primative datatypes
//string
let name = "arthik"
console.log(typeof name);
// boolean
console.log( typeof true);
//number 
console.log(typeof 123);
// bigint
console.log( typeof 12233225225222325533656522552325532n);
//symbols
let sym = Symbol("id");
console.log(typeof sym);
//null

let y = null;
console.log(typeof null);
 // undefind
 let x;let a;           // no value assigned
console.log(a);  // undefined

let b = null;    
console.log(b);  // null

console.log(x); 
console.log(null == undefined);  // true  (because both are treated as empty)
console.log(null === undefined); // false (strict check, types are different)
//🔹 Example: null → Number
console.log(Number(null));   // 0
console.log(null + 5);       // 5   (because null becomes 0)
// exple : undefind to nuumberconsole.log(Number(undefined)); // NaN
console.log(undefined + 5);     // NaN
console.log(Number(undefined)); // NaN
console.log(undefined + 5);     // NaN


//with an example how null and undefined
//  behave when converted to JSON in JavaScript.
let obj = {
  a: null,        // explicitly empty
  b: undefined,   // missing value
  c: "hello"
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);
  //  object
  let person = {
  name: "Arthik",
  age: 21,
  isStudent: true
};
console.log(typeof person);
 

// array
let numbers = [10, 20, 30, 40];
console.log(typeof numbers

);


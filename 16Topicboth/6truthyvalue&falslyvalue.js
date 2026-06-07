  console.log(Boolean("")); // false
console.log(Boolean("0"));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true
console.log(Boolean({}));   // true


if ("hello") console.log("true");  // → "true"
if ([]) console.log("true");       // → "true"
if ({}) console.log("true");       // → "true"



if ("") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// Output: Falsy

console.log(!true);  // false
console.log(!0);     // true  (0 → falsy → flip → true)
console.log(!!"");   // false
console.log(!!"hi"); // true
console.log(!!0);    // false
console.log(!!123);  // true

console.log(!!"hello");   // true  (non-empty string is truthy)
console.log(!!"");        // false (empty string is falsy)
console.log(!!42);        // true  (non-zero number is truthy)
console.log(!!0);         // false (zero is falsy)
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true  (objects are always truthy)
console.log(!![]);        // true  (arrays are always truthy)


let username = "Arthik";
console.log(!!username);  // true (username exists)

username = "";
console.log(!!username);  // false (username empty)

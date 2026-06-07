//&&

console.log(true&&"hello");
console.log(false&& "arthik");
console.log(7&&0);
console.log(2&&1);
console.log(0 && "World"); 


//or
console.log(true || "Hello");  // true (stops at first truthy)
console.log("Hi" || "World");  // "Hi"
console.log(0 || "Fallback");  // "Fallback"

let input = "";
let defaultValue = "Guest";
console.log(input || defaultValue); // "Guest"



//??

console.log(null ?? "Default");
console.log(undefined ?? "Fallback"); 
console.log(0 ?? 100);
console.log("" ?? "Text")
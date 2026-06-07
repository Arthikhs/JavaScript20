/*Regular expressions are used for pattern matching 
(like finding, validating, or replacing text).*/
let regex = /\d+/;
console.log(regex.test("hello123"));
console.log(regex.test("heloooo"));

/* given email vaild or not let checking*/
let emailregex = /^[\w.-]+@[\w./]+\.\w+$/
console.log(emailregex.test("test@example.com")); // true
console.log(emailregex.test("hello@com")); 


let arthik = "arthik is good boy"
let result = arthik.replace(/\s+/g,"-")
console.log(result);

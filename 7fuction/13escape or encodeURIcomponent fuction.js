const str ="hello arthik!";
const escap = escape(str) 
console.log(escap);
// Encode
const encoded = encodeURIComponent("Hello World!");
console.log(encoded); // "Hello%20World%21"

// Decode
const decoded = decodeURIComponent(encoded);
console.log(decoded); // "Hello World!"

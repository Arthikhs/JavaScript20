/* each later first later in string will capital */

let str = "arthik is my name";

// Split the string into words, capitalize first letter of each, then join back
let result = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" \n");

console.log(result); // Output: "Arthik Is My Name"
 /*
 task  name my is arthik*/
/*
let str = "arthik is my name";

// Split the string into words
let words = str.split(" ");

// Rearrange the words in the desired order
let rearranged = [words[3], words[2], words[1], words[0]];

// Capitalize the first letter of each word
let result = rearranged
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" /n");

console.log(result); // Output: "Name My Is Arthik"
*/
const arr = ["arthik","abhi"]
const first = arr[0];
const second = arr [1];
const missingchars = [...second].filter(char => first.includes(char));
console.log(missingchars.length===0);
 /* Using for loop
 const arr = ["arthik", "arghu"];
const first = arr[0];
const second = arr[1];

let allPresent = true;
for (let char of second) {
  if (!first.includes(char)) {
    allPresent = false;
    break;
  }
}

console.log(allPresent); // false
*/


/*sing Set (Unique characters, faster for large strings)
const arr = ["arthik", "arghu"];
const firstSet = new Set(arr[0]);
const secondSet = new Set(arr[1]);

const allPresent = [...secondSet].every(char => firstSet.has(char));
console.log(allPresent); // false
*/

/* case insensitive version 
const arr = ["ArthiK", "ArGhU"];
const first = arr[0].toLowerCase();
const second = arr[1].toLowerCase();

const allPresent = [...second].every(char => first.includes(char));
console.log(allPresent); // false
*/
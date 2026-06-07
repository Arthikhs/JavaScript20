const arr = [100,"a","arthik",20,]
const number = [];
const str = [];
const ch = [];

for (let item of arr) {
  if (typeof item === "number") {
    // 👉 Condition 1: If element is a number
    number.push(item);
  } else if (typeof item === "string" && item.length === 1) {
    // 👉 Condition 2: If element is a string of length 1 → treat as a character
    ch.push(item);
  } else if (typeof item === "string" && item.length > 1) {
    // 👉 Condition 3: If element is a string of length > 1 → treat as a string
    str.push(item);
  }
}

console.log("Numbers:", number);
console.log("Strings:", str);
console.log("Characters:", ch);

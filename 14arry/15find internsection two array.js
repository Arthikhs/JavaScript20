let a = [10, 20, 30, 40];
let b = [30, 40, 50, 60];
let intersection = a.filter(value => b.includes(value));
console.log(intersection); // [30, 40]
 /*
 let setB = new Set(b);
let intersection = a.filter(value => setB.has(value));
console.log(intersection); // [30, 40]
*/

let intersection1 = Array.from(new Set(a.filter(x => b.includes(x))));
console.log(intersection1); // [30, 40]

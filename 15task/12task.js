let x = 10;

if (function solve() {}) {
    x = x - typeof solve;
}

console.log(x);


let x1 = 10;

if (function solvee() {}) {
    x1 = x1 + typeof solvee;
}

console.log(x1);


let z = [10,20,30]
let b = [10,20,30]
let r=b;
console.log(z==b);
console.log(r==b);
console.log(r==z);



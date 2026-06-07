/*exmple  of nan*/  
  
const value1 = "hello";
const value2 = "hello123";
console.log(Number(value1));
console.log(Number(value2));
console.log("abc" * 5);
console.log("55" * 5);


console.log(typeof NaN);
console.log(NaN==NaN);
console.log(NaN===NaN);

console.log(NaN+5)
console.log(NaN*2);

console.log(Number.isNaN(NaN))
console.log(isNaN(NaN)); 
console.log(isNaN("abc"))
console.log(Number.isNaN("abc"))
console.log(isNaN(null));
console.log(isNaN("Hello"));  // true   (can't convert "Hello" to a number)
console.log(isNaN("123"));    // false  ("123" can be converted to 123)
console.log(isNaN(123));      // false  (already a number)
console.log(isNaN(NaN));      // true   (NaN is not a number)


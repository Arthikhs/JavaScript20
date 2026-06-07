//*!!
let abc = 2;
let a= !--abc;
let b= !--abc;
console.log(a,b);
//&&
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}
// ||
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's weekend!");
} else {
  console.log("It's a weekday");
}
// combining && and||
let age1 = 20;
let student1 = true;

if ((age1 >= 18 && age1 <= 25) || student1) {
  console.log("Eligible for discount");
}
console.log(5 && 10);         // 10  (both truthy → returns last)
console.log(0 && "Hello");    // 0   (first falsy)
console.log("Hi" && "World"); // "World" (both truthy)
console.log(null && "Test");  // null (first falsy)
console.log("JS" && 0 && "Hi"); // 0 (first falsy)
console.log(5 || 10);         // 5   (first truthy)
console.log(0 || "Hello");    // "Hello" (0 is falsy → returns next)
console.log(null || undefined || "Hi"); // "Hi" (first truthy)
console.log("" || 0 || false);          // false (all falsy → last)

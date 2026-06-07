(function() {
  let name = "Arthik";
  console.log("Hello " + name);
})(); // Output: Hello Arthik

// 'name' is NOT accessible outside
console.log(typeof name); // undefined


(() => {
  let age = 25;
  console.log("Age is " + age);
})(); // Output: Age is 25


// with paremter
(function(x, y) {
  console.log(x + y);
})(5, 10); // Output: 15

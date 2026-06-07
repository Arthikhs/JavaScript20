const greet = function() {
  console.log("Hello!");
};

greet();

//pass function as argument (callback)
function sayHello() {
  console.log("Hello!");
}

function run(fn) {
  fn(); // call the function passed in
}

run(sayHello); // Hello!


function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


const operations = [
  (a, b) => a + b,
  (a, b) => a * b
];

console.log(operations[0](2, 3)); // 5
console.log(operations[1](2, 3)); // 6

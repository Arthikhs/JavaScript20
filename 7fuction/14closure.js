function outer() {
  let count = 0;  // variable in outer scope

  function inner() {
    count++; 
    console.log(count);
  }

  return inner;  // returning the inner function
}

const counter = outer();  // outer() executes, returns inner()
counter(); // 1
counter(); // 2
counter(); // 3



for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}



for (var i = 1; i <= 3; i++) {
  (function (num) {
    setTimeout(() => {
      console.log(num);
    }, 1000);
  })(i); // pass i into IIFE
}


for (var i = 1; i <= 3; i++) {
  setTimeout((num) => {
    console.log(num);
  }, 1000, i);
}

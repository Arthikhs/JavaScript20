function greet(name) {
  console.log("Hello " + name);
}

// Call greet after 2 seconds
 let timeout = setInterval(greet, 2000, "Arthik");
clearInterval(timeout)
console.log("time out");

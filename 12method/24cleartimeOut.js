function greet(name) {
  console.log("Hello " + name);
}

// Call greet after 2 seconds
 let timeout = setTimeout(greet, 2000, "Arthik");
clearTimeout(timeout)
console.log("time out");

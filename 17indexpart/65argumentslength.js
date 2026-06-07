function demo(a, b=5, c) {
  console.log("function.length:", demo.length);
  console.log("arguments.length:", arguments.length);
}

demo(10);      
// function.length: 1  (b has default, so only a counted)
// arguments.length: 1 (only one argument passed)

demo(10, 20, 30,40)
// function.length: 1
// arguments.length: 3
  console.log([]==[])
  
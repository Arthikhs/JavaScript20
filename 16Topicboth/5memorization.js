function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.toString();
    if (cache[key]) {
      console.log(`Using cached result for ${key}`);
      return cache[key];
    }
    console.log(`Computing result for ${key}`);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Create memoized recursive Fibonacci
const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(6)); // Output: 8


/*function fib(n) {
  if (n <=1) 
    return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); */




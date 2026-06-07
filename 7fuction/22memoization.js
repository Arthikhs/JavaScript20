
function add(a) {
  return a + 20;
} 
console.log(add(20));
console.log(add(40));
console.log(add(60));
console.log(add(80));




function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40)); // ⚠️ Very slow!


function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(40)); 

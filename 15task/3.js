console.log([1,2].map(num=>{
  if (num>1) return;
  return num*2
}));
/*Step 1: map() basics

map() goes through each element of the array [1, 2].

For each element (num), it runs the callback function you wrote.

It collects the return values into a new array.

Step 2: First element → num = 1
if (1 > 0) return;


1 > 0 → ✅ true.

So it hits return; → which means it returns undefined (because return without a value = undefined).

So for the first element, result = undefined.

Step 3: Second element → num = 2
if (2 > 0) return;


2 > 0 → ✅ true again.

It also hits return; → returns undefined.

So for the second element, result = undefined.

Step 4: Final result

Both elements returned undefined.

So map() builds:

[undefined, undefined]

Output:
console.log([undefined, undefined])*/
function abc() {
  return;
}
console.log(abc());

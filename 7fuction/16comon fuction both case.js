console.log(subs(10,2));
console.log(subs(10)(2));
/* wrtit fuction both case having same fuction */

function subs(a, b) {
  if (!b) {
    return function(c) {
      return a - c;
    };
  }
  return a - b;
}

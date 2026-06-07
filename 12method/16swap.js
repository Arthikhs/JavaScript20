let n1 = 20;
let n2 = 30;
// using array destructuring methode
[n1,n2]=[n2,n1];
console.log(n1)
console.log(n2);
;
  


// usig addtion and substraction in js

n1 = n1 + n2; // n1 = 30
n2 = n1 - n2; // n2 = 10
n1 = n1 - n2; // n1 = 20

console.log(n1, n2); // 20 10
   

//Multiplication & Division


n1 = n1 * n2; // 200
n2 = n1 / n2; // 10
n1 = n1 / n2; // 20

console.log(n1, n2); // 20 10


// Using Bitwise XOR (Advanced Trick)


n1 = n1 ^ n2; // XOR
n2 = n1 ^ n2;
n1 = n1 ^ n2;

console.log(n1, n2); // 20 10
 

//two variables using a third variablen or Using a Temporary Variable
let temp = n1;  // store n1 in temp
n1 = n2;        // assign n2 to n1
n2 = temp;      // assign temp (original n1) to n2

console.log(n1, n2); // 20 10



let a = 10,b = 20;
a = a+b-(b=a)
console.log(a,b);

a ^= b ^= a ^= b;
console.log(a, b);
// factorial using recursion

function factorial(n) {
  if(n===0|| n==1) return 1;
  return n*factorial(n-1);
  
}
console.log(factorial(5));
 

//Fibonacci Using Recursion
function fibonacci(n) {
  if (n<=1) return n
   return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));


// coutdown using recursion
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive call
}

countdown(5);
   
/*
Write a function to reverse a 
string without
 using any built-in reverse function.
*/


function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"

/*
int arr[] = {10, 20, 30, 40};
cout << *(arr + 2);
*/

let arr = [1, 2, 3];

// Change an element
arr[0] = 10;   // arr is now [10, 2, 3]

// Add an element
arr.push(4);   // arr is now [10, 2, 3, 4]

// Remove an element
arr.pop();     // arr is now [10, 2, 3]

console.log(arr);


/*
1️⃣ Mutable Methods (change the original array)
Method	Description	Example
push()	Adds element(s) to the end	arr.push(4)
pop()	Removes element from the end	arr.pop()
shift()	Removes element from the start	arr.shift()
unshift()	Adds element(s) to the start	arr.unshift(0)
splice()	Adds/removes elements at any position	arr.splice(1, 2, 10)
sort()	Sorts elements in-place	arr.sort()
reverse()	Reverses the array in-place	arr.reverse()
fill()	Fills array with a value in-place	arr.fill(0)
copyWithin()	Copies part of the array within itself	arr.copyWithin(0, 2)
*/
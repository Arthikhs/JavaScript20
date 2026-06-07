let object1 = {
  name:"arthik"
}
let object2 =object1;
object2.name = "abhi";
console.log(object1.name);
console.log(object2.name);

/*
spread oprators
let arr1 = [1,2,3,4]
let arr2 = [...arr1]
arr2.push(6)
console.log(arr1);
console.log(arr2);
*/
/* silce 
let arr1 = [10, 20, 30];
let arr2 = arr1.slice();

arr2.pop();

console.log(arr1); // [10, 20, 30]
console.log(arr2); // [10, 20]
*/


/*
using arrya .from
let arr1 = [10, 20, 30];
let arr2 = arr1.slice();

arr2.pop();

console.log(arr1); // [10, 20, 30]
console.log(arr2); // [10, 20]
*/
/*
using map
let arr1 = [1, 2, 3];
let arr2 = arr1.map(item => item);

arr2.push(4);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

*/

/*
object

spread operstors 
let obj1 = { name: "Arthik", age: 21 };
let obj2 = { ...obj1 };

obj2.age = 25;

console.log(obj1); // { name: "Arthik", age: 21 }
console.log(obj2); // { name: "Arthik", age: 25 }
*/


/*
object.assign
let obj1 = { a: 1, b: 2 };
let obj2 = Object.assign({}, obj1);

obj2.a = 100;

console.log(obj1); // { a: 1, b: 2 }
console.log(obj2); // { a: 100, b: 2 }
*/


/* deep copy methode
Using JSON.parse(JSON.stringify())

let user = { name: "Arthik", address: { city: "Badami" } };
let deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Hubli";

console.log(user.address.city); // "Badami" (unchanged ✅)
*/

/*Using structuredClone

let user = { name: "Arthik", address: { city: "Badami" } };
let deepCopy = structuredClone(user);

deepCopy.address.city = "Hubli";

console.log(user.address.city); // "Badami" ✅
*/
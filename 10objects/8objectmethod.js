let user = { name:"arthik",age:"22"};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// objext.assgin
let  obj1 = {a:2,b:3}
let  obj2 = {c:2,b:3}
let marged = Object.assign({},obj1,obj2)
console.log(marged);
  
/// object feeze
let user1 = { name:"arthik",age:"22"};
Object.freeze(user1)
user1.name = "abhi"
user1.age = "20"
console.log(user1);
 // object seal()
 let user2 = { name:"arthik",age:"22"};
 Object.seal(user2)
 user2.name = "abhi"
 console.log(user2);
   // Object.preventExtensions

 let user3 = { name:"arthik",age:"22"};
 Object.preventExtensions
 user3.name = "abhi"
 delete user3.age 
 console.log(user3);


 let user6= { id: 1, name: "Arthik" };

console.log(Object.hasOwn(user6, "name")); // true ✅
console.log(Object.hasOwn(user6, "age"));  // false ❌

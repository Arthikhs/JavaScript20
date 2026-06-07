var person = {
  name : "arthik",
  class:25
};
// usin in operators
console.log('name' in person);
console.log('nam' in person);

const persn = { name: "Arjun" };

console.log("toString" in persn); // true
console.log(persn.hasOwnProperty("toString")); // false
console.log(persn.hasOwnProperty("name"));     // true
 console.log(person.name !==undefined);
 
  console.log(person.nam !==undefined);
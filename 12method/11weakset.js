// Create WeakSet
const weakSet = new WeakSet();

const obj1 = { name1: "Arthik" };
const obj2 = { name2: "Rahul" };

// Add objects
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Delete one object
weakSet.delete(obj2);
console.log(weakSet.has(obj2)); // false

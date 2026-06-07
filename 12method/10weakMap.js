const weakMap = new WeakMap();
const obj = { name: "Arthik" };

weakMap.set(obj, "some value");  // Add key-value
console.log(weakMap.get(obj));   // "some value"
console.log(weakMap.has(obj));   // true

weakMap.delete(obj);            // Remove key-value
console.log(weakMap.get(obj))
console.log(weakMap.has(obj));   // false

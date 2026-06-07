const arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof String); // false

class Person {
    constructor(name) {
        this.name = name;
    }
}

const arthik = new Person("Arthik");

console.log(arthik instanceof Person); // true
console.log(arthik instanceof Object); // true


console.log(null instanceof Object); 
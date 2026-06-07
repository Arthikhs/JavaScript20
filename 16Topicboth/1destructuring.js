/* array destructuring*/
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


/* object destructuring*/
const person = {
  name: "Arthik",
  age: 22,
  city: "Bangalore"
};

const { name, age, city } = person;

console.log(name); // Arthik
console.log(age);  // 22
console.log(city); // Bangalore


/*Nested Destructuring
const user = {
  id: 1,
  profile: {
    name: "Arthik",
    skills: ["JS", "React"]
  }
};

const {
  profile: { name, skills }
} = user;

console.log(name);   // Arthik
console.log(skills); // ["JS", "React"]
*/



  /*Destructuring in Functions*/
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Arthik", age: 22 });

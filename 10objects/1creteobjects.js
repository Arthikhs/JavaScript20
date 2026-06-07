let person = {
  nmae: "arthik",
  class:250

}
console.log(person)


var perso = new Object()
perso.name = "arthik gowda"
console.log(perso)

var person1 = {
    name: "",
    age: 0,
    role: ""
};

var men = Object.create(person1);
men.name = "Happy";
men.age = 38;
men.role = "Trainer";
console.log(men);

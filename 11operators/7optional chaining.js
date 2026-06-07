const user ={
  proflie:{
    name:"arthik"
  }
};
console.log(user.proflie.name);
console.log(user.address?.city);
// Accessing array elements

const users = [{ name: "Arthik" }];

console.log(users[0]?.name);   // "Arthik"
console.log(users[1]?.name);   // undefined (safe)
  // calling fuctions safety
  const obj = {
  greet: () => "Hello!"
};

console.log(obj.greet?.());   // "Hello!"
console.log(obj.sayHi?.());   // undefined (no error)

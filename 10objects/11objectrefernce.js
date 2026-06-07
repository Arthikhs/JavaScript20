let a = 10;
let b = a; // copy value
b = 20;
console.log(a); // 10 (unchanged)


let obj1 = { name: "Alice" };
let obj2 = obj1; // copy reference
obj2.name = "Bob";
console.log(obj1.name); // "Bob"

//Objects passed to functions are passed by reference:
function update(obj) {
    obj.name = "Charlie";
}
let user = { name: "Alice" };
update(user);
console.log(user.name); // "Charlie"

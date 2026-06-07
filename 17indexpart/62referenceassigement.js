const a = {
  age:20
}
b=a
b.age = 100;
console.log(a.age)


let x = 20;
let y = 30;
y= x;
console.log(x)

const a1= {
  age:20
}
b1 = {...a1}
b1.age= 100;
console.log(a1.age)
console.log(b1.age)


const c= { age: 20 };
 b = Object.assign({}, c)

b.age = 100;
console.log(c.age)

console.log(b.age)

const z = {
  age:20
}
g = structuredClone(z)
g.age = 100;
console.log(z.age)

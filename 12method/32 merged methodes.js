const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };

const merged = Object.fromEntries([
  ...Object.entries(obj1),
  ...Object.entries(obj2)
]);

console.log(merged);

const obj10 = { a: 1, b: 2 };
const obj20 = { c: 3, d: 4 };

const mergedd = Object.assign({}, obj10, obj20);
console.log(mergedd);


const obj11 = { a: 1, b: 2 };
const obj21 = { b: 99, c: 3 };

const mergedf = { ...obj11, ...obj21 };
console.log(mergedf);





const obj14 = { a: 1, b: { x: 10, y: 20 } };
const obj24 = { b: { z: 30 }, c: 3 };

const merge = {
  ...obj14,
  ...obj24,
  b: { ...obj14.b, ...obj24.b }
};

console.log(merge);
// 👉 { a: 1, b: { x: 10, y: 20, z: 30 }, c: 3 }

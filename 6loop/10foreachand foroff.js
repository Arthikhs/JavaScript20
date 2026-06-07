let map = new Map([["a", 1], ["b", 2]]);

// for...of
for (let [k, v] of map) {
  console.log("for...of:", k, v);
}
// a 1, b 2

// forEach
map.forEach((v, k) => console.log("forEach:", k, v));
// a 1, b 2

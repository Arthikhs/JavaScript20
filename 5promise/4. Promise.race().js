const p1 = new Promise(res => setTimeout(() => res("P1 done"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 done"), 1000));

Promise.race([p1, p2])
  .then(result => console.log("Race result:", result));

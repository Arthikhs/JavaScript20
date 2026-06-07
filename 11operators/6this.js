
function show() {
  console.log(this);
}
show(); // undefined
/*const obj = {
  name: "Arthik",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();*/ // undefined



const obj = {
  name: "Arthik",
  greet: function() {
    console.log("Hello " + this.name);
  }
};
obj.greet(); // Hello Arthik

function showThis() {
  console.log(this);
}
showThis(); // window object (in browser)


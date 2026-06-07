function calculate(a,b ,operation) {
  return operation(a,b)
}
function add(x,y) {
  return x+y;
}
function multiply(x,y) {
  return x+y;
}
console.log(calculate(5,3,add));
console.log(calculate(5,3,multiply));



function  greeting(messages) {
return function (name) {
  return messages+","+name
}
}

const sayhello = greeting("hello")
console.log(sayhello("arthik"));

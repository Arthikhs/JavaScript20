const regex = /hello/;
console.log(regex.exec("hello world")); 
// ["hello", index: 0, input: "hello world", groups: undefined]

console.log(regex.exec("Hi there")); 
// null

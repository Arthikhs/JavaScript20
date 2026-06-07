let b; console.log(b);
let c= null;
console.log(c);
console.log(null == undefined);
console.log(null === undefined);

// conversion of number in null and undefind
console.log(null + 4);
console.log(undefined +5);


// JSION
let object ={
  a:undefined,
  b: null,
  c:"hello"
}
let js = JSON.stringify(object)
console.log(js);

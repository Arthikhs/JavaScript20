// without curring
function add(a,b,c) {
  return a+b-c
  
}

console.log(add(50,20,30));
 


// with curring 
function adds(a) {
  return function (b) {
    return function (c) {
    return function (d) {
     return a+b+c+d
    }
    }
  }
  
} console.log(adds(40)(20)(50)(30));

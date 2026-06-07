// assigened to a variable;
const add = function (a,b) {
  return a + b ;

}
console.log(add(2,3));
 //UESD as a callbak
 setTimeout(function () {
  console.log("this runs after 2 second");
  
 },2000) 

 // withARRY MElet
let  nums = [1, 2, 3];
let squre = nums.map(function (n) {
  return n * n;
})
console.log(squre);

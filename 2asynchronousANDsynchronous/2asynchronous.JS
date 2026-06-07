
//setTimeout
console.log("Start");
setTimeout(()=> console.log("async"),1000)
console.log("end");

//setInterval
let count = 1;
const intervalId = setInterval(()=>{
  console.log("cout:",count);
  count++;


if (count>6){
  clearInterval(intervalId)
  console.log("intravl steop");
  
}
},100)
console.log("timer started");

//fetch
console.log("start fetching");
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response=>response.json())
.then(data=> console.log("fetched data:",data)
)
console.log("end fetching");
 // promise
 let orederPizz = new Promise((resolve, reject) => {
  let pizzAcliable = true;
 if (pizzAcliable) {
  resolve("pizz delivered")
 }
 else{
  reject("pizz is not avaliablee")
 }
 })
 orederPizz
  .then((message) => console.log("Success:", message))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Order process completed ✅"));



  



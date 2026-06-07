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



  

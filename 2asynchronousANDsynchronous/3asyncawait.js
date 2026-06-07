function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pizzaAvailable = true; // try false to see rejection
      if (pizzaAvailable) {
        resolve("Pizza delivered 🍕");
      } else {
        reject("Pizza not available ❌");
      }
    }, 2000);
  });
}
//Async function using await
async function processOrder() {
  try {
    console.log("Ordering pizza...");
    const message = await orderPizza(); // wait until promise resolves
    console.log("Success:", message);
    console.log("Eating pizza 🍴");
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Order process completed ✅");
  }
}


    
 
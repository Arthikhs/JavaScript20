console.log("start");
// settimeout
setTimeout(()=>{
  console.log('settimeout callback');
  
},0)
Promise.resolve().then(()=>{
  console.log('promidse callback');
  
},0)
console.log("end");


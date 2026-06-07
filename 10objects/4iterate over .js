const person = {
  name : "arthik",
  age : 26 

};
for(let key in person ){
  console.log(key +" :"+ person[key]);
  
} 
Object.keys(person).forEach((key) =>{
  console.log(key +" :"+ person[key]);
  
});
Object.values(person).forEach((value) =>{
  console.log(value);
  
});

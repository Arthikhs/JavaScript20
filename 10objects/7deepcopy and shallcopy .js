const person ={
  name: 'arthik',
  agg: 20,
  address:{
    city : 'shivamogga',
    state:'karanata'
  } 
}
 const shallcopy = Object.assign({},person)
 shallcopy.address.city = 'hasan'
 console.log(person.address.city);
 console.log(shallcopy.address.city);
 

const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = 'Hassan';
console.log(person.address.city);
console.log(deepCopy.address.city);
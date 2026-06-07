const originalObjects = 
{
  name : 'HAPPPY',
  age:25, 
  city:'adhi'
};
const cloneObjectSpread = {...originalObjects}
console.log(cloneObjectSpread);

//2
console.log(originalObjects);
//3
const clonedObjectAssign = Object.assign({},originalObjects)
console.log(clonedObjectAssign);

let Objec = JSON.parse(JSON.stringify(originalObjects))
console.log(Objec);



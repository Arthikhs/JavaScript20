// for in methode & for each methode
// works on arrays
let arr= ["x","y","z"]
for(let i in arr){
  console.log(i,arr[i]);
  
}

arr.forEach((arr,i)=>{
  console.log(i,arr);
  
})
// works on objects
let obj= {name:"x",class:"y",age:"1"}
for(let j in obj){
  console.log(j,obj[j]);
}
Object.entries(obj).forEach(([j,obj])=>{
  console.log(j,obj);
})

// MAP OR SET
let map = new Map([["a", 1], ["b", 2]]);
let set = new Set([10, 20, 30]);

//  for...in on map/set → nothing happens

//  forEach on map
map.forEach((val, key) => console.log(key, val));
// a 1, b 2

//  forEach on set
set.forEach(val => console.log(val));
// 10, 20, 30
//Works on Maps/Sets




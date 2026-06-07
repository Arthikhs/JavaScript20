//different ways to empty an array

let arr = [1,5,6,9]
arr.length = 0;
console.log(arr)
arr =[]
console.log(arr)
arr.splice(0,arr.length)
console.log(arr)

while (arr.lenth> 0) {
  arr.pop()
}
console.log(arr)
while (arr.lenth> 0) {
  arr.shift()
}
console.log(arr)
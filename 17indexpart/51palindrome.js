let str = "121"
function isPalindre(s) {
  return s === s.split("").reverse().join("")
}
console.log(isPalindre(str))


let str1 = "ara";
function isPalindrameTwoPoints(str2){
  let i = 0
  let j =str2.length  - 1;
  while (i<j) {
    if(str2[i]!==str2[j])
      return false;
    i++;
    j--;

  }
  return true
} 
console.log(isPalindrameTwoPoints(str1));

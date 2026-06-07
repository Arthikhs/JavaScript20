/*You want to detect how many times the letter "A" is present (case-insensitive).*/
let str = "my name is arthik";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'a') {
    count++;
  }
}

console.log("Number of 'A' in string:", count);


let count1 = str.toLowerCase().split('a').length - 1;
console.log(count1);



let matches = str.match(/a/gi);  // g = global, i = ignore case
let count2 = matches ? matches.length : 0;
console.log(count2);



let matches2 = str.match(/aR/gi);  // g = global, i = ignore case
let count3 = matches2 ? matches2.length : 0;
console.log(count3);

let count4 = (str.match(/ar/gi) || []).length;
console.log(count4);


let count5 = str.toLowerCase().split("ar").length - 1;
console.log(count5);


let replaced = str.toLowerCase().replace(/aRT/g, "");
let count6 = (str.length - replaced.length) / 2; // 2 letters in "ar"
console.log(count6);

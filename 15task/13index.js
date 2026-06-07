// TASK:1
let st = "my name is arthik"
console.log(st.split(" ").join("\n"));
  
//task:2
let str = "this is arthik gowda";
let words = str.split(" ");
words.forEach(word => console.log(word));


//TASK:3
let tr = "this is arthik gowda";

let word = tr.split(" ");   // split into words

words.forEach(word => {
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  console.log(capitalized);
});

/*
let str = "this is arthik gowda";

let words = str.split(" ");

words.forEach(word => {
  if (word.length === 1) {
    // single-letter word
    console.log(word.toUpperCase());
  } else {
    let modified =
      word.charAt(0).toLowerCase() +                // first letter small
      word.slice(1, -1).toLowerCase() +             // middle letters small
      word.charAt(word.length - 1).toUpperCase();   // last letter capital
    console.log(modified);
  }
});
*/  
console.log(typeof NaN);
console.log(NaN==NaN);
console.log(NaN===NaN);

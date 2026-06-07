//substr(start, length)
let str = "JavaScript";
console.log(str.substr(4, 6)); 

//substr(start, length)
 console.log(str.substring(0, 4)); 


 //replace(searchValue, newValue)
 let str1 = " i love JavaScript";
 console.log(str1.replace("JavaScript","abhi"));
 let str4 = "Hello hello HeLLo";
let newStr = str4.replace(/hello/gi, "Hi");
console.log(newStr);  // Hi Hi Hi
 
 //search(value)
 console.log(str.search("JavaScript"));


 //toLocaleLowerCase()
 console.log(str.toLocaleLowerCase()); 

 //toLocaleUpperCase()
  console.log(str.toLocaleUpperCase()); 


//indexOf(value)
let str5 = "abhi"
console.log(str5.indexOf("World")); 
 console.log(str5.indexOf("a")); 

  //includes(value)
  console.log(str.includes("World")); 


  //slice(start, end)
  console.log(str.slice(4, 10)); 


  //concat(value)
let str10 = "Hello";
let str20 = "World";
console.log(str10.concat(" ", str20)); 

//lastIndexOf(value)
console.log(str.lastIndexOf("J")); 


//charCodeAt(index)
let st= "A";
console.log(st.charCodeAt(0));
// Output: 65


// tostring
let num = 123;
console.log(num.toString()); 
// Output: "123"


// chartAt()
let str9 = "abhi is neha "
console.log(str9.charAt(5));

// trim
let a = "  i love neha  "  ;
console.log(a.trim());
//let result = string.replace(/\s+/g, "");
// a = a.split("").jion("")

// split
let str7 ="abhi"
console.log(str7.split());


//match
let str6 = "JavaScript is fun";
console.log(str6.match(/Java/)); 
// Output: ["Java"]


//valueof
let str25 = "Hello Neha";
console.log(str25.valueOf()); // "Hello Neha"

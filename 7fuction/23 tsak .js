function greet(params) {
  // Split the string into words
  const words = params.split(" ");

  // Find the smallest word by length
  let smallest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > smallest.length) {
      smallest = words[i];
    }
  }

  return smallest;
}

console.log(greet("I am Arthik"));
  

/*> largest world*/
/* < smallest world*/
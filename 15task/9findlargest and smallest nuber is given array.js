function secondLargest(arr) {
  const unique = [...new Set(arr)]; // Remove duplicates
  unique.sort((a, b) => a- b);     // Sort in descending order
  return unique[1];                 // Second largest element
}

// Example:
const numbers = [12, 45, 1, -1, 45, 54, 23];
console.log(secondLargest(numbers)); // Output: 45

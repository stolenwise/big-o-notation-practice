// ## **Step Two: Calculating Time Complexity**

// Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!


function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}


// Time Complexity: O(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
  ​
//   Time Complexity: O(n)


  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i); 
    }
  }
//   ​
//   Time Complexity: O(1)

  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  ​
//   Time Complexity: O(n)
function recursiveSearch(arr, target) {
  // type your code here

  if(arr.length < 1){
    return false
  }
  
  if(arr[0] === target){
    return true
  }

  return recursiveSearch(arr.slice(1), target)
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([8, 27, 103], 103));

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([12, 86, 413], 2));

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
  // until the target is found or array is empty
  // check if the first element of the array is equal to the target
  // if so, return true
  // if not, slice the first element off of the array
  // call the recursive function with the sliced array

// And a written explanation of your solution
  // we first check the two base cases:
    // if the length of the array is less than 1 (since we're using a slicing approach)
    // or if the target is equal to the value of the first element in the array
  // if neither of those are true, we run the function again
  // this time, with a sliced version of the array which removes the first element

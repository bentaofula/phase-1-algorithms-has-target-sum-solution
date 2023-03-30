function hasTargetSum(array, target) {
  // Write your algorithm here
   // iterate over the array of nuubers
  for( let i=0;i <array.length;i++){
    // starting from i as our 1st number,identify a number that adds to our target
    let number = target-array[i];
    // iterate over the the remaining numbers
    for (let j=i+1;j< array.length;j++) {
      // check in te remaining numbers if they add up to our target
      // if it does not the return false
      if (array[j]){
        return true;
      }
    }
  }
  return false;

  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

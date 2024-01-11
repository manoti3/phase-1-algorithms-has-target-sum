function hasTargetSum(array, target) {
  // Write your algorithm here
}
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
function hasTargetSum(arr, target) {
  const numbersSeen = {}; // Create an object to store numbers seen so far

  for (let num of arr) {
    const difference = target - num; // Calculate the difference between target and the current number

    if (numbersSeen[difference]) {
      return true; // Found a pair that adds up to the target
    }

    numbersSeen[num] = true; // Store the current number in the object
  }

  return false; // No pair found
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
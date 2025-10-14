// Section 5: Problem Solving Patterns

// Video 29: Frequency Counter Pattern
// Write a fn called same, which accepts 2 arrays. The fn should return true if every value in the array has it's corresponding value 
// squared in the second array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) --> true
// same([1, 2, 3], [4, 9]) --> false - because 1's corresponding value doesn't exist in second array.
// same([1, 2, 1], [4, 4, 1]) --> false - because even though 1 and 2 both have their corresponding values in arr2 sq but not same frequency

const same = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
      let iSquared = Math.pow(arr1[i], 2);
      console.log('i Squared: ', iSquared);
      
      for(var j = 0; j < arr2.length; j++) {
        if (iSquared === arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);

          console.log('Found Match with: ', arr1[i], arr2[j]);
        };
      };
    };

    console.log(arr1, arr2);

    if (arr2.length || arr1.length) {
      return false;
    }
    else return true;

}

console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [4, 9]));
// console.log(same([1, 2, 3], [4, 4, 1]));
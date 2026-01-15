// JS Algorithms and Data Structures Masterclass: Section 6: 100% Optional Challenges.

// Coding Exercise #3:

// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

// Solution: My Solution
// Parse each number into an object key and  || create a sorted array of single numbers by dividing the number up into an array and sorting the array
// If parsed into an object compare the value for each key. return true if both keys and values are matching exactly
// If put into an array and sorted then just merge the array into 1 number again and check to see if it's the same number. Because it has to be exactly the same numbers if sorted from largest to smalles or smallest to largest.

const sameFrequency = (num1, num2) => {
  
  // Create the empty parsed Obj to compare with later
  const parsedNum1 = {};
  const parsedNum2 = {};

  // Convert numbers into string to loop over
  const numArray1 = [...num1.toString()];
  const numArray2 = [...num2.toString()];

   // Return false if numbers aren't the same length
  if (numArray1.length !== numArray2.length) return false;

  // Either sort the arrays of the numbers or parse them into a parsedObj and combare the objects with each other.
  for (let i = 0; i < numArray1.length; i++) {
    if (!parsedNum1[numArray1[i]]) {
      parsedNum1[numArray1[i]] = 1;
    }
    else {
      parsedNum1[numArray1[i]]++;
    }

    if (!parsedNum2[numArray2[i]]) {
      parsedNum2[numArray2[i]] = 1;
    }
    else {
      parsedNum2[numArray2[i]]++;
    }
  };

  // Compare both the objects to see if all they keys have the same value.
  // Get the keys for one of the objects
  const keys1 = Object.keys(parsedNum1);

  // then compare the keys in that object with the other object and see if they exist in the other object and the values equal to each other as well
  return keys1.every(key => parsedNum1[key] === parsedNum2[key]);
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
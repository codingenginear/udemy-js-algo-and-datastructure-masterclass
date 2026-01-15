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
  // Return false if numbers aren't the same length
  if (num1.length !== num2.length) return false;

  // create the empty parsed Obj to compare with later
  const parsedNum1 = {};
  const parsedNum2 = {};

  // Convert numbers into string to loop over
  const str1 = [...num1.toString()].map(Number);
  const str2 = [...num2.toString()].map(Number);

  console.log(str1, str2);


  


}

sameFrequency(182, 281);
// JS Algorithms and Data Structures Masterclass: Section 6: 100% Optional Challenges.

// ---------------------------------------------------------------------------------------------------------

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
    };

    if (!parsedNum2[numArray2[i]]) {
      parsedNum2[numArray2[i]] = 1;
    }
    else {
      parsedNum2[numArray2[i]]++;
    };
  };

  // Compare both the objects to see if all they keys have the same value.
  // Get the keys for one of the objects
  const keys1 = Object.keys(parsedNum1);

  // then compare the keys in that object with the other object and see if they exist in the other object and the values equal to each other as well
  return keys1.every(key => parsedNum1[key] === parsedNum2[key]);
};

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #4:

// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true 
//     areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// Solution: My Solutions

// The problem says that the arguments passed in can be variable. So either use a rest operators "..." or use the arguments variable available within a non arrow fn. For today we will use the ... operator

const areThereDuplicates = (...args) => {
  // Frequency Counter Pattern Solution O(n) time and space

  // const parsedObj = {};

  // for (let i = 0; i < args.length; i++) {
  //   if (!parsedObj[args[i]]) {
  //     parsedObj[args[i]] = 1;
  //   }
  //   else {
  //     parsedObj[args[i]]++
  //   };
  // };

  // const keys = Object.keys(parsedObj);

  // for (let key of keys) {
  //   if (parsedObj[key] > 1) {
  //     return true;
  //   };
  // };

  // return false;

  // Multiple Pointers Solution O(nlogn) time O(1) space complexity

  if (typeof args[0] === 'string') {
    args.sort();
  }
  else {
    args.sort((a, b) => a - b);
  }

  console.log(args);
  let start = 0;
  let next = 1;

  for (let i = 0; i < args.length - 1; i ++) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

// console.log(areThereDuplicates(1, 2, 4, 5, 5, 3)); // true
// console.log(areThereDuplicates(1, 3, 2, 4, 5)); // false
// console.log(areThereDuplicates('a', 'd', 'c', 'c', 'b')); // true

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #5:
// Frequency Counter - constructNote

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

//     constructNote('aa', 'abc') // false
//     constructNote('abc', 'dcba') // true
//     constructNote('aabbcc', 'bcabcaddff') // true

// Solution: My Solutions

function constructNote(message, letters) {
  const parsedMessage = {};
  const parsedLetters = {};

  // No message return true
  if (!message) return true;
  if (!letters) return false;

  // Loop to parse letters
  for (let i = 0; i < letters.length; i++) {
    if (!parsedLetters[letters[i]]) {
      parsedLetters[letters[i]] = 1;
    }
    else {
      parsedLetters[letters[i]]++;
    };
  };
  // Loop to parse message
  for (let i = 0; i < message.length; i++) {
    if (!parsedMessage[message[i]]) {
      parsedMessage[message[i]] = 1;
    }
    else {
      parsedMessage[message[i]]++;
    };
  };

  // get letter keys - because we are checking to see if the letters are contained within the message so we need to loop through all it's keys
  let letterKeys = Object.keys(parsedLetters);
  console.log('Letters: ', parsedLetters, 'Message: ', parsedMessage, 'Letter Keys: ', letterKeys);

  // Check to see if any of the letters do not exist in the message. If they don't return false. However if they all exist then return true.
  for (let key of letterKeys) {
    if (parsedLetters[key] < parsedMessage[key]) { 
      return false;
    }
    else {
      return true
    };
  };
};


// Bonus Solution O(n+m) Time Complexity and O(n) Space Complexity
 function constructNote(message, letters){
  var lettersObj = {};

  for (let s of letters) {
    if(s in lettersObj) lettersObj[s]++;
    else lettersObj[s] = 1;
  }

  for (let s of message) {
    if(!lettersObj[s]) return false;
      lettersObj[s]--;
  }

  return true;
};

// console.log(constructNote('aa', 'abc')) // false
// console.log(constructNote('abc', 'dcba')) // true
// console.log(constructNote('aabbcc', 'bcabcaddff')) // true
// console.log(constructNote('aabbcc', 'bcabccaddff')) // true
// console.log(constructNote('aabbcc', '')) // true
// console.log(constructNote('', 'aaa')) // false

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #6: Frequency Counter - findAllDuplicates

// Frequency Counter - findAllDuplicates

// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

//     findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
//     findAllDuplicates([4, 3, 2, 1, 0]) // []
//     findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

// Time Complexity - O(n)

// Solution: My Solution

// First: Loop through the array and create a frequency counter object (parse the array)
// Second: Push/Add the items of the array which has a frequency of 2 (in the parsedObj) (into a new array
// Third: Return the new array with only duplicates inside of it

const findAllDuplicates = (array) => {
  const parsedObj = {};
  const duplicateArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (parsedObj[array[i]]) {
      parsedObj[array[i]]++;
    }
    else {
      parsedObj[array[i]] = 1;
    };
  }
  console.log(parsedObj);

  for (let key in parsedObj) {
    if (parsedObj[key] === 2) {
      duplicateArray.push(Number(key));
    }
  };

  return duplicateArray;
};

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #7: Multiple Pointers - averagePair

// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6], 4.1) // false
//     averagePair([],4) // false

// Solution: My Solution

const averagePair = (array, avg) => {
  let firstAddend = 0;
  let secondAddend = 1; 

  if (array.length === 0) return false;

  while (firstAddend < array.length) {
    console.log('First Addend and array[firstAddend]: ', firstAddend, array[firstAddend], 'Second Addend Index and array[secondAddend]: ', secondAddend, array[secondAddend]);
    if (sumAvg(array[firstAddend], array[secondAddend]) !== avg && secondAddend < array.length) {
      secondAddend++;
    }
    else if (sumAvg(array[firstAddend], array[secondAddend]) !== avg && secondAddend === array.length) {
      firstAddend++;
      secondAddend = firstAddend + 1;
    }
    else if (sumAvg(array[firstAddend], array[secondAddend]) === avg) {
      return true;
    };
  };

  return false;
};

const sumAvg = (numOne, numTwo) => {
  let avg = (numOne + numTwo) / 2;

  return avg;
};

// Solution: Student Solution in lecture comments

// function averagePair(arr, num){
//     const computeAvg = (a,b) => (arr[a] + arr[b]) / 2;
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         let avg = computeAvg(i,j);
//         if (avg === num) return true;
//         (avg > num) && j--;
//         (avg < num) && i++;
//     }
//     return false;
// }

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #8: Multiple Pointers - isSubsequence

// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// My Solution: 

const isSubsequence = (subString, string ) => {
  let j = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[j]) {
      j++;
    }
  }

  if (subString.length === j) {
    return true;
  }

  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #9: Frequency Counter / Multiple Pointer - findPair

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

//     findPair([6,1,4,10,2,4], 2) // true
//     findPair([8,6,2,4,1,0,2,5,13],1) // true
//     findPair([4,-2,3,10],-6) // true
//     findPair([6,1,4,10,2,4], 22) // false
//     findPair([], 0) // false
//     findPair([5,5], 0) // true
//     findPair([-4,4], -8) // true
//     findPair([-4,4], 8) // true
//     findPair([1,3,4,6],-2) // true
//     findPair([0,1,3,4,6],-2) // true
//     findPair([1,2,3], 0) // false

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

// My Solution: 
// Pseudocode: 
// Because we have 2 of the values. First: the value that will be subtracted from. Second: The value that the difference of the two values would equal aka the target value. 
// This means once we loop through the array, for each value in the array there can only be one answer. 
// Therefore we can loop through the array and for each value we will check if the second value that would equal the target value exists in the array or not. If not return false if yes return true. 
// E.g. if they give us an array ([1, 2, 3, 4], 1) when we loop through the array we check to see if (1, 2, 3, or 4) - 1 (the target value) is available in the array. in this case yes 4 - 1 = 3 || 3 - 1 = 2 || 2 - 1 = 1. Which are all in the array.

// Frequency Counter Solution
const findPair = (array, target) => {
  const parsedObj = {};

  for (let i = 0; i < array.length; i++) {
    if (parsedObj[array[i]]) {
      parsedObj[array[i]]++;
    }
    else {
      parsedObj[array[i]] = 1;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (parsedObj[array[i]] === 2 && target === 0) { 
      return true;
    }
    if (parsedObj[array[i] - target] && target !== 0) {
      return true;
    }
  };

  return false;
};

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13],1)); // true
// console.log(findPair([4, -2, 3, 10],-6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
// console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6],-2)); // true
// console.log(findPair([0, 1, 3, 4, 6],-2)); // true
// console.log(findPair([1, 2, 3], 0)); // false
// console.log(findPair([1, 2, 3, 3], 0)); // true

// ---------------------------------------------------------------------------------------------------------

// Coding Exercise #10: Sliding Window - maxSubarraySum
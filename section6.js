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


// Section 5: Problem Solving Patterns

// Video 29: Frequency Counter Pattern (naive solution - O(n^2) Solution)
// Write a fn called same, which accepts 2 arrays. The fn should return true if every value in the array has it's corresponding value 
// squared in the second array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) --> true
// same([1, 2, 3], [4, 9]) --> false - because 1's corresponding value doesn't exist in second array.
// same([1, 2, 1], [4, 4, 1]) --> false - because even though 1 and 2 both have their corresponding values in arr2 sq but not same frequency

// const same = (arr1, arr2) => {
//     for (var i = 0; i < arr1.length; i++) {
//       let iSquared = Math.pow(arr1[i], 2);
//       console.log('i Squared: ', iSquared);

//       for (var j = 0; j < arr2.length; j++) {
//         if (iSquared === arr2[j]) {
//           console.log('Found Match with: ', arr1[i], arr2[j]);
//           arr1.splice(i, 1);
//           arr2.splice(j, 1);
//           i--;
//         };
//       };
//     };

//     console.log(arr1, arr2);

//     if (arr2.length || arr1.length) {
//       return false;
//     }
//     else return true;

// };

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([4, 2, 3, 1], [4, 1, 9, 16]));
// console.log(same([1, 2, 3], [4, 9]));
// console.log(same([1, 2, 3], [4, 4, 1]));


// Video 29: Frequency Counter Pattern (Advanced Solution - O(n) Solution)

// const same2 = (arr1, arr2) => {
//   const obj1 = parse(arr1);
//   const obj2 = parse(arr2);

//   console.log('OBJECT 1: ', obj1);
//   console.log('OBJECT 2: ', obj2);

//   if (arr1.length !== arr2.length) {
//     return false;
//   };

//   for (const key in obj1) {
//     if (obj1[key] !== obj2[Math.pow(key, 2)]) {
//       return false;
//       console.log('')
//     }
//   };

//   return true;
// };

// const parse = (arr) => {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] ++;
//     }
//     else {
//       obj[arr[i]] = 1;
//     };
//   };

//   return obj;
// };

// console.log(same2([1, 2, 3], [4, 1, 9]));
// console.log(same2([1, 2, 2, 3], [4, 1, 4, 9]));
// console.log(same2([1, 2, 2, 3], [4, 1, 9, 9]));


//-----------------------------------------------------


// Video 30: Frequency Counter: Anagram Challenge

// Given 2 strings, write a fn to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman". 


// const isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const parsedStr1 = parseStr(str1); 
//   const parsedStr2 = parseStr(str2);

//   for (let key in parsedStr1) {
//     if (parsedStr1[key] !== parsedStr2[key]) return false;
//   };

//   return true;
// };

// const parseStr = (str) => {
//   let obj = {};
  
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     }
//     else {
//       obj[str[i]] = 1;
//     };
//   };
//   console.log(obj);
  
//   return obj;
// };


// console.log(isAnagram('', ''));
// console.log(isAnagram('atta', 'taat'));
// console.log(isAnagram('Hello World', 'Hello World'));
// console.log(isAnagram('iceman', 'cinema'));
// console.log(isAnagram('texttimetwist', 'timetwisttext'));



//-----------------------------------------------------


// Video 33: Multiple Pointers Pattern: Count Unique Values Challenge

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// This is my solution using the frequency counter solution. However the course expects me to solve this using the multiple pointers pattern so the next attempt will be done using that pattern.

// const countUniqueValues = (sortedArr) => {
//   if (sortedArr.length === 0) return 0;

//   const parsedObj = {};

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (!parsedObj[sortedArr[i]]) {
//       parsedObj[sortedArr[i]] = 1;
//     }
//     else {
//       parsedObj[sortedArr[i]] ++;
//     }
//   }
//   console.log(parsedObj);

//   return Object.keys(parsedObj).length;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));


// Video #32: Multiple Pointers
// e.g. Write a fn called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to 0 or undefined if a pair does not exist.

const sumZero = (arr) => {
  let leftNum = 0;
  let rightNum = arr.length - 1;

  while (leftNum < rightNum) {
    
    if (arr[leftNum] + arr[rightNum] === 0) {
      return [arr[leftNum], arr[rightNum]];
    }
    
    if (arr[leftNum] + arr[rightNum] > 0) {
      rightNum --;
    } 
    
    if (arr[leftNum] + arr[rightNum] < 0) {
      leftNum ++;
    };


  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]))   // [-3, 3]
console.log(sumZero([-2, 0, 1, 3]))    // undefined
console.log(sumZero([1, 2, 3]))    // undefined
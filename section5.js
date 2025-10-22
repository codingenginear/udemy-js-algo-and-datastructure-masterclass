// Section 5: Problem Solving Patterns

// Video 29: Frequency Counter Pattern (naive solution - O(n^2) Solution)
// Write a fn called same, which accepts 2 arrays. The fn should return true if every value in the array has it's corresponding value 
// squared in the second array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) --> true
// same([1, 2, 3], [4, 9]) --> false - because 1's corresponding value doesn't exist in second array.
// same([1, 2, 1], [4, 4, 1]) --> false - because even though 1 and 2 both have their corresponding values in arr2 sq but not same frequency

const same = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
      let iSquared = Math.pow(arr1[i], 2);
      console.log('i Squared: ', iSquared);

      for (var j = 0; j < arr2.length; j++) {
        if (iSquared === arr2[j]) {
          console.log('Found Match with: ', arr1[i], arr2[j]);
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          i--;
        };
      };
    };

    console.log(arr1, arr2);

    if (arr2.length || arr1.length) {
      return false;
    }
    else return true;

}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([4, 2, 3, 1], [4, 1, 9, 16]));
// console.log(same([1, 2, 3], [4, 9]));
// console.log(same([1, 2, 3], [4, 4, 1]));


// Video 29: Frequency Counter Pattern (Advanced Solution - O(n) Solution)

const same2 = (arr1, arr2) => {
  const obj1 = parse(arr1);
  const obj2 = parse(arr2);

  console.log('OBJECT 1: ', obj1);
  console.log('OBJECT 2: ', obj2);

  if (arr1.length !== arr2.length) {
    return false;
  };

  for (const key in obj1) {
    if (obj1[key] !== obj2[Math.pow(key, 2)]) {
      return false;
      console.log('')
    }
  };

  return true;
};

const parse = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] ++;
    }
    else {
      obj[arr[i]] = 1;
    };
  };

  return obj;
};

console.log(same2([1, 2, 3], [4, 1, 9]));
// console.log(same2([1, 2, 2, 3], [4, 1, 4, 9]));
console.log(same2([1, 2, 2, 3], [4, 1, 9, 9]));


//-----------------------------------------------------


// Video 30: Frequency Counter: Anagram Challenge

// Given 2 strings, write a fn to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman". 


const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const parsedStr1 = parseStr(str1); 
  const parsedStr2 = parseStr(str2);

  for (let key in parsedStr1) {
    if (parsedStr1[key] !== parsedStr2[key]) return false
  };

  return true;
};

const parseStr = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[i]++;
    }
    else {
      obj[str[i]] += 1;
    };
  };
};
// Section 4 - Problem Solving Approach

// Exercise
// Write a fn which takes in a string and returns the count of each character in the string.

// e.g charCount('abaaa') // {a: 4, b: 1}

function charCount(string) {
  let charObj = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;
    if (charObj[string[i]]) {
      charObj[string[i]] ++;
    }
    else {
      charObj[string[i]] = 1;
    };
  };
  return charObj;
};

console.log(charCount('Hello World'));
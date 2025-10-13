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

// Some more edge cases to worry about

// e.g. 'Hello World 123123' // Should we ignore the lower and upper case or should we add lower case and uppercase seperately
// e.g. 'Hello World 23423' // Should we ignore spacing and numbers etc.
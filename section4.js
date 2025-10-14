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

console.log('Character Count 1: ', charCount('Hello World'));

// Some more edge cases to worry about

// e.g. 'Hello World 123123' // Should we ignore the lower and upper case or should we add lower case and uppercase seperately
// e.g. 'Hello World 23423' // Should we ignore spacing and numbers etc.


// Refactoring options for this solution

// First refactor handles and checks if the input is correct - it ignores all commas etc. and only allows alpha numeric characters like numbers and letters - no symbols

function charCount2(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char] ++;
      }
      else {
        result[char] = 1;
      };
    };
  };
  return result;
};

console.log('Character Count 2: ', charCount2('Hello World 2342!@#!'));


// Second refactor makes the function look a lot better aesthetically and also creates shorter logic for the if statement;

function charCount3(str) {
  var result = [];
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    };
  };
  return result;
};

console.log('Character Count 3: ', charCount3('Hello World!!!'));


// Third refactor takes into account the performance - it looks at whether the regex used in the check for valid char's is a good way or not 
// - we can get a char code which gives us a number for any character 
// and that could help us to create a range and check for valid characters within a given range in order to process it or not.

function charCount4(str) {
  var result = [];
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  };
  return result;
};

function isAlphaNumeric(char) {
  var code = char.charCode(0);
  if 
    (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      return false;
    };
    
  return true;
};

console.log('Character Count 4: ', charCount4('Hello World!!!'));
'use strict';

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

function isValidWord(str) {
  const strArr = str.split('');
  for (let index = 0; index < strArr.length; index += 1) {
    if (!isLetter(strArr[index])) {
      return false;
    }
  }
  return true;
}



console.log(isValidWord('hello'));
console.log(isValidWord('Hello')); 
console.log(isValidWord('Test@')); 
console.log(isValidWord('someName1')); 
console.log(isValidWord('It is me')); 
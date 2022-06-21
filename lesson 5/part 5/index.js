// const min = function min (first, second) { 
// if (first < second) {
//   return first;
// } else {
//   return second;
// }
// }

const min = (first, second) => {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};

console.log (min(100, 40));
console.log (min(30,50));

console.log (min(-10,0));

const multiply = (num) => num * 10;
console.log(multiply(40)); 
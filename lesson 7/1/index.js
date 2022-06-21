function sum(from, to) {
  let total = 0;
  for (let index = from; index <= to; index++) {
    total += index;
  }
  return total;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let sum1 = sum(firstFrom, firstTo);
  let sum2 = sum(secondFrom, secondTo);
  if (sum1 > sum2) {
    return true;
  } else {
    return false;
  }
}

compareSums(5, 10, 5, 10);
compareSums(6, 11, 7, 112);
compareSums(8, 19, 22, 65);
compareSums(70, 13, 15, 24);
compareSums(88, 89, 99, 56);

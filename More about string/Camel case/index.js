function camelCase(str) {
  const arr = str.split(' ');
  let res = '';
  for (let index = 0; index < arr.length; index += 1) {
    let el = arr[index];
    if (index === 0) {
      res += el;
    } else {
      res += el[0].toUpperCase() + el.slice(1);
    }
  }
  return res;
}

camelCase('some function name');
camelCase('get message');
camelCase('render tasks list');

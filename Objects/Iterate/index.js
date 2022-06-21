function getKeys(obj) {
  const keys = Object.keys(obj);
  console.log(keys);
  for (const keys in obj) {
    console.log('KEY is ${key}');
    console.log('VALUE is ${obj[key]');
    return keys;
  }
}

function getValues(obj) {
  const values = Object.values(obj);
  console.log(values);
  return values;
}

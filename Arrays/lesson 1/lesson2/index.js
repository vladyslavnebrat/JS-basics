const students = [
  'Andrey',
  'Denis',
  'Alex',
  'Nastya',
  'Ninja',
  'Skywoker',
  'Joda',
  'Leo',
];

function printArray(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    console.log(el);
  }
}

printArray(students);

function printArrayForOf(arr) {
  for (let el of arr) {
    console.log(el);
  }
}

printArrayForOf(students);


'use strict';

/**
 * @param {object[]} users
 * @param  {string} name
 * @return {object[]}
 */
function findUsersByName(users, name) {
  return users.filter((obj) => obj.name === name);
}

/**
 * @param {object[]} users
 * @param  {string} str
 * @return {object[]}
 */
function findUsersByString(users, str) {
  return users.filter((user) => user.name.includes(str));
}

// examples
const users = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
];

console.log(findUsersByName(users, 'Denis'));
findUsersByName(users, 'Andrey'); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
findUsersByName(users, 'Anna'); // ===> [ ]

console.log(findUsersByString(users, 'Al')); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
findUsersByString(users, 't'); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
findUsersByString(users, 'Vik'); // ===> [ ]

findUsersByString(users, 'm'); // ===> [ ]
// explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result

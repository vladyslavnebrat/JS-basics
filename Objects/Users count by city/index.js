'use strict';

function usersCountByCity(users) {
  const cities = new Set(users.map((user) => user.city));

  const result = {};

  Array.from(cities).forEach((city) => {
    result[city] = users.filter((u) => u.city === city).length;
  });

  return result;
}

// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }

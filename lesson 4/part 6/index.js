const balance = 15600;

const id = 1001;
let productName = 'IPhone 12 Pro Max';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = null;

console.log(isAvailable && balance >= price);

console.log(isAvailable || price < 10000);

console.log(!(price < 10000));
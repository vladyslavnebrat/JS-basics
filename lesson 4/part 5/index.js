const balance = 25600;

const id = 1001;
let productName = 'IPhone 12 Pro Max';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = null;

const canBuyProduct = balance >= price;

if (canBuyProduct) {
    console.log('You have enough money to buy ' + productName);
} else {
    console.log('You do not have enough money to buy ' + productName);
}

if (isAvailable) {
    console.log('Product ' + productName + ' is available now');
}

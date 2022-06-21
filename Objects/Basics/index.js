const product = {
  id: 1001,
  name: 'IPhone 12 Pro Max',
  isAvailable: true,
  price: 20000,
  color: 'Silver',
  storeAddress: null
};

console.log(product);

//get property
// const productName = product.name;
const productName = product['name'];
console.log(productName);

//add property
// product.deliveryOptions = ['Новая почта', 'Укрпочта'];
product['deliveryOptions'] = ['Новая почта', 'Укрпочта'];
console.log(product);

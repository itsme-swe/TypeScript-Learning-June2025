/*
💥 Calculate total price -- Write a function that calculate the total price of an array of product object. Each product has a price and quantity.
*/

interface Product {
  price: number;
  quantity: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

let cartVal: Product[] = [
  { price: 100, quantity: 2 },
  { price: 100, quantity: 4 },
];

console.log(calculateTotalPrice(cartVal));  // 600

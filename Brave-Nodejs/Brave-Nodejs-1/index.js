//Name: Precious Anuforo
//BRF - 01005
//Practical Exercise: Shopping Cart Total Calculation

import calculateTotal from "./functions.js";

const discount = 10;
const taxRate = 5;

// Array Items
const items = [
  { name: "milk", price: 500, quantity: 2 },
  { name: "sugar", price: 250, quantity: 4 },
  { name: "book", price: 200, quantity: 3 },
  { name: "jeans", price: 20000, quantity: 1 },
  { name: "apple", price: 150, quantity: 5 },
];

// Display the total
console.log(calculateTotal(items, discount, taxRate));

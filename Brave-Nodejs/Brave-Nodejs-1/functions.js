//Module for functions

// Calculate Subtotal function
function calculateSubtotal(items) {
  const newItems = items.map((item) => item.price * item.quantity);
  return newItems.reduce((acc, item) => acc + item, 0);
}
// Apply Discount
function applyDiscount(subtotal, discount) {
  const subtotalDiscount = subtotal * (discount / 100);
  return subtotal - subtotalDiscount;
}

// Calculate Tax
function calculateTax(discountedTotal, taxRate) {
  const tax = discountedTotal * (taxRate / 100);
  const total = discountedTotal + tax;
  //You stated this function should return the total not tax so i did it as instructed
  return total;
}

// Calculate Final Total
export default function calculateTotal(items, discount, taxRate) {
  const subtotal = calculateSubtotal(items);
  const discountedSubtotal = applyDiscount(subtotal, discount);
  const total = calculateTax(discountedSubtotal, taxRate);
  return `Total price in cart is: ${total}`;
}

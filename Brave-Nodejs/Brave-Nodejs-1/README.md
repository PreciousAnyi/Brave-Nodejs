### Practical Exercise: **Shopping Cart Total Calculation**

**Objective:**
Create a simple shopping cart system that calculates the total price of items, including a discount and tax.

---

**Usage**

```bash
cd Brave-Nodejs\Brave-Nodejs-1
node index.js
```

### **Task Description:**

1. **Define the Items:**

   - Create an array of objects representing items in the shopping cart. Each object should have the following properties:
     - `name` (string)
     - `price` (number)
     - `quantity` (number)

2. **Calculate Subtotal:**

   - Write a function `calculateSubtotal` that takes the array of items as an argument and returns the subtotal (sum of the price of each item multiplied by its quantity).

3. **Apply Discount:**

   - Write a function `applyDiscount` that takes the subtotal and a discount percentage as arguments. It should return the subtotal after applying the discount.

4. **Calculate Tax:**

   - Write a function `calculateTax` that takes the discounted total and a tax rate as arguments. It should return the total after applying tax.

5. **Calculate Final Total:**

   - Write a function `calculateTotal` that combines the previous functions to calculate the final total cost of the shopping cart.

6. **Test the Functions:**
   - Test your code with different items, discounts, and tax rates to verify that your functions work correctly.

### **Submission:**

Push your code to a Github repository and submit the link to your repository

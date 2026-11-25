import {test , expect } from '@playwright/test';
test('practice object asssertions', async()=>
{
  const productDetails = {
    name: 'Laptop',
    price: 35000,
    brand: 'Lenovo',
    category: 'Electronics'
  };

  expect(productDetails).toEqual({
    name: 'Laptop',
    price: 35000,
    brand: 'Lenovo',
    category: 'Electronics'
  });

  expect(productDetails).toMatchObject({
    name: 'Laptop',
    brand: 'Lenovo'
  });
expect(productDetails).toHaveProperty('price', 35000);
const email = 'praveena@gmail.com';
expect(email).toContain('@gmail.com');
expect(email).toMatch(/@gmail\.com$/);
expect(email).toHaveLength(18);
const products = [
  { name: 'Laptop', price: 35000 },
  { name: 'Mouse', price: 800 },
  { name: 'Keyboard', price: 1500 }
];

expect(products).toContainEqual({
  name: 'Mouse',
  price: 800
});
const username = '';
const age = null;
let emailAddress;
const result = Number('hello');

// Boolean assertions
expect(username).toBeFalsy();
expect('Praveena').toBeTruthy();

// Null and undefined
expect(age).toBeNull();
expect(emailAddress).toBeUndefined();
expect(age).toBeDefined();

// NaN
expect(result).toBeNaN();
const price = 35000;
const discount = 5000;
const finalPrice = 30000;

expect(price).toBeGreaterThan(30000);
expect(price).toBeGreaterThanOrEqual(35000);

expect(discount).toBeLessThan(10000);
expect(finalPrice).toBeLessThanOrEqual(30000);

expect(0.1 + 0.2).toBeCloseTo(0.3);
function validatePrice(price: number) {
  if (price < 0) {
    throw new Error('Invalid price');
  }
}

expect(() => validatePrice(-100)).toThrow('Invalid price');
expect(() => validatePrice(100)).not.toThrow();
}
);
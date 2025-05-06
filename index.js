import { calculateTax } from './src/tax.js';

const income = 50000;
const tax = calculateTax(income);

console.log(`For income $${income}, tax amount: $${tax}`);
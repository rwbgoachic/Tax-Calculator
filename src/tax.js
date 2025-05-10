import dotenv from 'dotenv';
dotenv.config();

export const calculateTax = (income) => {
  const IRS_API_ENDPOINT = process.env.IRS_API_ENDPOINT;
  const IRS_API_KEY = process.env.IRS_API_KEY;
  
  /* IRS API logic */
  return income * 0.2; // Default 20% tax rate as placeholder
};
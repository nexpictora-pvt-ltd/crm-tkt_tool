import * as yup from 'yup';

export const emailSchema = yup.string().email('Invalid email format').required('Email is required');

export const phoneSchema = yup
  .string()
  .matches(/^\d{10}$/, 'Phone number must be 10 digits')
  .required('Phone number is required');

export const passwordSchema = yup
  .string()
  .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Must contain at least one digit')
  .matches(/[^A-Za-z0-9]/, 'Must contain at least one special character')
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');
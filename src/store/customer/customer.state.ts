/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface Customer {
    date: Date;
    country: any;
    representative: any;
    status: ReactNode;
    verified: any;
    Customer_id: number,
    name: string,
    email: string,
    phone: number,
    address: string,
    total_orders: number,
    created_at: string,
    password_changed_at: string
  }
  
  export type CustomerState = {
    readonly Customers: Customer[] | [];
    readonly selectedCustomer: Customer | null;
    readonly isLoading: boolean | false;
    readonly error: unknown | null;
  };
  
  const INITIAL_STATE: CustomerState = {
    Customers: [],
    selectedCustomer: null,
    isLoading: false,
    error: null,
  };
  
  export default INITIAL_STATE;
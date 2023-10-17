// root-reducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import { viewBillReducer } from "./Customer/customer.reducer";
 

export const rootReducer = combineReducers({
 
  viewBill: viewBillReducer,
   
});

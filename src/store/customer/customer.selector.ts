import { RootState } from "../store";
// import {  } from "./profile.state";
import { CustomerState } from "./customer.state";


export const CustomerSelector = (state: RootState): CustomerState =>
  state.customer;
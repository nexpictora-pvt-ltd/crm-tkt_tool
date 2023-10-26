import { RootState } from "../store";
import { LoginState } from "./login.state";

export const loginSelector = (state: RootState): LoginState =>
  state.login; 
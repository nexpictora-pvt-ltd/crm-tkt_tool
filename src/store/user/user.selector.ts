import { RootState } from "../store";

export const userAuthenticationSelector = (state: RootState) =>
  state.user.isUserAuthenticated;

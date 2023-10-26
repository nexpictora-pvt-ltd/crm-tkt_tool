export type AccountState = {
  isUserAuthenticated: boolean;
};

const INITIAL_STATE: AccountState = {
  isUserAuthenticated: false,
};

export default INITIAL_STATE;


export type AccountState = {
  isUserAuthenticated: boolean;
  userEmail: string | null; 
  userAccountId: string | null;
};

const INITIAL_STATE: AccountState = {
  isUserAuthenticated: false,
  userEmail: null, 
  userAccountId: null,
};

export default INITIAL_STATE;


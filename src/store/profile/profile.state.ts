export interface Profile {
    user_id: number | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    total_orders: number | null;
    hashed_password: string | null;
    created_at: string | null;
    password_changed_at: string | null;
  }
  
  export type ProfileState = {
    readonly profile: Profile;
    readonly isLoading: boolean | false;
    readonly error: unknown | null;
  };
  
  const INITIAL_STATE: ProfileState = {
    profile: {
      user_id: null,
      name: null,
      email: null,
      phone: null,
      address: null,
      total_orders: null,
      hashed_password: null,
      created_at: null,
      password_changed_at: null,
    },
    isLoading: false,
    error: null,
  };
  
  export default INITIAL_STATE;
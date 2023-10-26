export interface User {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  total_orders: number;
  created_at: string;
  password_changed_at: string;
}

export interface LoginResponse {
  session_id: string;
  access_token: string;
  access_token_expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  user: User;
}

export type LoginState = {
  isLoading: boolean;
  error: unknown | null;
  loginResponse: LoginResponse;
};

const INITIAL_STATE: LoginState = {
  isLoading: false,
  error: null,
  loginResponse: {
    session_id: '',
    access_token: '',
    access_token_expires_at: '',
    refresh_token: '',
    refresh_token_expires_at: '',
    user: {
      user_id: 0,
      name: '',
      email: '',
      phone: '',
      address: '',
      total_orders: 0,
      created_at: '',
      password_changed_at: '',
    },
  },
};

export default INITIAL_STATE;

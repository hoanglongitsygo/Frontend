export interface User {
  id?: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  username: string;
  password: string;
  token?: string;
}

export interface Login {
  username: string;
  password: string;
}

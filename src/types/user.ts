export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  active: boolean;
};

export type UserPayload = Omit<User, "id">;

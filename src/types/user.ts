export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  roleId?: number;
  active: boolean;
};

export type UserPayload = Omit<User, "id">;

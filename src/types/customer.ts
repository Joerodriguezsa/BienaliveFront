export type Customer = {
  id: number;
  userId: number;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
};

export type CustomerPayload = Omit<Customer, "id">;

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
};

export type CustomerPayload = Omit<Customer, "id">;

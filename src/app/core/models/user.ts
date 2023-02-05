export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  isAdmin: boolean;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
}

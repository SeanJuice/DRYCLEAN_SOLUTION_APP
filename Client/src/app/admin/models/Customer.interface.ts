export interface CustomerStatus {
  customer_Status_ID: number;
  status_Name: string;
}

export interface CustomerInterface {
  readonly id?: number;

  name: string;

  surname: string;

  shopId: number;

  email: string;

  mobilePhone: string;

  address: string;

  postalCode: string;

  city: string;

  province: string;

  notes: string;
}

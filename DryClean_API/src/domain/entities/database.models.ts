import { AutoMap } from '@automapper/classes';

/**
 * Model User
 *
 */
export class User {
  id: number;
  email: string;
  name: string | null;
  surname: string;
  phoneNumber: number;
  password: string;
  roleId: number;
  createdAt: Date;
  authConfirmToken: number | null;
  isVarrified: boolean | null;
}

/**
 * Model Role
 *
 */
export class Role {
  id: number;
  description: string;
}

/**
 * Model Customer
 *
 */
export class Customer {
  id: number;
  Name: string;
  Surname: string;
  Email: string;
  MobilePhone: string;
  Address: string;
  PostalCode: number;
  City: string;
  Province: string;
  Notes: string;
}

/**
 * Model Order
 *
 */
export class Order {
  id: number;
  @AutoMap()
  invoiceDate: Date;
  @AutoMap()
  collectionTime: Date;
  @AutoMap()
  orderNumber: number;

  @AutoMap()
  VAT: number;
  @AutoMap()
  totalAmount: number;
  @AutoMap()
  totalAmountWithVAT: number;
  @AutoMap()
  userId: number;
}

/**
 * Model OrderLine
 *
 */
export class OrderLine {
  id?: number;
  quantity: number;
  price: number;
  orderId: number;
  serviceId: number;
}

/**
 * Model Service
 *
 */
export class Service {
  id: number;
  name: string;
  picture: string | null;
  price: number;
  status: string;
  serviceTypeId: number;
}

/**
 * Model PaymentInformation
 *
 */
export class PaymentInformation {
  id: number;
  paymentDate: Date;
  paymentclass: string;
  paymentOrderNotes: string | null;
  orderId: number;
}

/**
 * Model Serviceclass
 *
 */
export class Serviceclass {
  id: number;
  name: string;
  description: string;
}

/**
 * Model Employee
 *
 */
export class Employee {
  name: string;
  surname: string;
  employeeCode: number;
  email: string;
  mobilePhone: number;
  address: string;
  postalCode: number;
  city: string;
  province: string;
  notes: string | null;
  shopId: number;
}

/**
 * Model Shop
 *
 */
export class Shop {
  id: number;
  name: string;
  location: string;
}

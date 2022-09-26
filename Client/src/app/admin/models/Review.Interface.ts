import { CustomerInterface } from "./Customer.interface";

export interface Review  {
    review_ID: number;
    stars: number;
    review_Detail: string;
    review_Date: string;
    service_Price: number;
    customer_ID: number;
    customer: CustomerInterface;
}
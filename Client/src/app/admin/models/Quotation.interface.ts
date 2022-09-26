import { CustomerInterface } from "./Customer.interface";

export interface Quotation  {
    quotation_ID: number;
    quotation_Notes: string;
    quotation_Date: string;
    quotation_Expiry: string;
    customer_ID: number;
    quotation_Status_ID: number;
    customer: CustomerInterface;
    quotationStatus: QuotationStatus;
}

export interface QuotationStatus  {
    quotation_Status_ID: number;
    status_Name: string;
    status_Date: string;
}
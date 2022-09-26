import { Service } from "./Service.interface";

export interface Price {
    price_ID: number;
    service_Price: number;
    price_Date: string;
    services: Service[];
}



export interface Service {
    id: string;
    service_Name: string;
    service_Description: string;
    service_Picture: string;
    service_Category_ID: {
        categoryId: string;
        categoryName: string;
    };
    serviceCategory: ServiceCategory;
}



export interface ServiceCategory  {
    id: string;
    serviceCategoryName: string;
    serviceCategoryDescription: string;
    services?: Service[];
}
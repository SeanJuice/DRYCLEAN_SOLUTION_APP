export class PaymentInformationDTO {
  id?: number;

  paymentDate: Date;

  paymentType: number;

  paymentOrderNotes?: string;

  orderId: number;
}

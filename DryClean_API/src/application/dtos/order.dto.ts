import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class OrderLineDTO {
  id?: number;

  @IsDefined()
  @IsNotEmpty()
  quantity: number;

  @IsDefined()
  @IsNotEmpty()
  price: number;
  orderId?: number;

  @IsDefined()
  @IsNotEmpty()
  serviceId: number;
}

export class PaymentInformationDTO {
  id?: number;
  paymentDate: Date;
  paymentType: number;
  paymentOrderNotes?: string;
  orderId: number;
}

export class orderDTO {
  @IsDefined()
  @IsOptional()
  public id: number;

  @IsDefined()
  @IsNotEmpty()
  public invoiceDate: Date;

  @IsDefined()
  @IsNotEmpty()
  public collectionTime: Date;

  @IsDefined()
  @IsNotEmpty()
  public orderNumber: number;

  @IsDefined()
  @IsNotEmpty()
  public VAT: number;

  @IsDefined()
  @IsNotEmpty()
  public totalAmount: number;

  @IsDefined()
  @IsNotEmpty()
  public totalAmountWithVAT: number;

  @IsDefined()
  @IsNotEmpty()
  orders?: OrderLineDTO[];

  @IsDefined()
  @IsNotEmpty()
  paymentInformation?: PaymentInformationDTO;

  @IsDefined()
  @IsNotEmpty()
  public userId: number;
}

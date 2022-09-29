import { AutoMap } from '@automapper/classes';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class OrderLineDTO {
  id?: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  quantity: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  price: number;
  orderId?: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
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
  @AutoMap()
  public invoiceDate: Date;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public collectionTime: Date;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public orderNumber: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public VAT: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public totalAmount: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public totalAmountWithVAT: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  orders?: OrderLineDTO[];

  @IsDefined()
  @IsNotEmpty()
  paymentInformation?: PaymentInformationDTO;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public userId: number;
}

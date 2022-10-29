import { AutoMap } from '@automapper/classes';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { OrderLineDTO } from './orderLine.dto';
import { PaymentInformationDTO } from './PaymentInformation.dto';

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

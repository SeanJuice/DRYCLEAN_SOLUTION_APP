import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class orderDTO {
  @IsDefined()
  @IsOptional()
  public id: number;

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
  public userId: number;

  @IsDefined()
  @IsNotEmpty()
  public price: number;

  @IsDefined()
  @IsNotEmpty()
  public serviceTypeId: number;

  @IsDefined()
  @IsNotEmpty()
  public shopId: number;
}

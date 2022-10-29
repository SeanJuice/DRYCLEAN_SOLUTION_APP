import { AutoMap } from '@automapper/classes';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class OrderLineDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  id: number;

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

import { AutoMap } from '@automapper/classes';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class acceptOrderDTO {
  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public id: number;

  @IsDefined()
  @IsNotEmpty()
  @AutoMap()
  public isAccepted: boolean;
}

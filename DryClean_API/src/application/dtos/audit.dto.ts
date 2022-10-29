import { IsDefined, IsNotEmpty } from 'class-validator';

export default class AuditTrailDTO {
  id: number;

  @IsDefined()
  @IsNotEmpty()
  Date: Date;

  @IsDefined()
  @IsNotEmpty()
  Table: string;

  @IsDefined()
  @IsNotEmpty()
  Operation: string;

  @IsDefined()
  @IsNotEmpty()
  userId: number;
}

import { IsDefined, IsNotEmpty } from 'class-validator';

export class CodeDTO {
  @IsNotEmpty()
  @IsDefined()
  code: number;
}

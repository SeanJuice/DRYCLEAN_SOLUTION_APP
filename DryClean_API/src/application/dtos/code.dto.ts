import { IsDefined, IsNotEmpty } from 'class-validator';

export default class CodeDTO {
  @IsNotEmpty()
  @IsDefined()
  code: number;
}

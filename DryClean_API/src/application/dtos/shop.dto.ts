// eslint-disable-next-line object-curly-newline
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// eslint-disable-next-line import/prefer-default-export
export class ShopDTO {
  @IsOptional()
  readonly id: number;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly location: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly managerName: string;
}

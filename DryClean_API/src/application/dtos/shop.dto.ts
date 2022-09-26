import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class ShopDTO {
  @IsOptional()
  readonly id: number;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

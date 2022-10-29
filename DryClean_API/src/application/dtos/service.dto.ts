import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class serviceDTO {
  @IsDefined()
  @IsOptional()
  @IsNumber()
  readonly id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly picture: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  readonly serviceTypeId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly status: string;
}

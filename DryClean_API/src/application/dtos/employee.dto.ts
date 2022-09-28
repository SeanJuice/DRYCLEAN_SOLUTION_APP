import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EmployeeDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  readonly id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  shopId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  mobilePhone: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  province: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  notes: string;
}

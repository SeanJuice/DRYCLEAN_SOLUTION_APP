import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EmployeeDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  id: number;

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
  @IsNumber()
  employeeCode: number;

  @IsDefined()
  @IsNotEmpty()
  shopId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  mobilePhone: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  postalCode: number;

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

import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CustomerDTO {
  id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  Name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  Surname: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  Email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  MobilePhone: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  Address: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  PostalCode: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  City: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  Province: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  Notes: string;
}

import { Exclude } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class createUserDTO {
  @IsOptional()
  readonly id: number;

  @IsOptional()
  readonly roleId: number;

  @Exclude({ toPlainOnly: true })
  @IsOptional()
  readonly createdAt: Date;

  @Exclude({ toPlainOnly: true })
  @IsOptional()
  readonly authConfirmToken: number;

  @IsOptional()
  readonly isVarrified: boolean;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly surname: string;

  @IsDefined()
  @IsNotEmpty()
  public phoneNumber: number;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  @IsDefined()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}

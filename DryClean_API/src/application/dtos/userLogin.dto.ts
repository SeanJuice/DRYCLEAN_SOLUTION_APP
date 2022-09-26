import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class UserLoginDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  readonly password: string;
}

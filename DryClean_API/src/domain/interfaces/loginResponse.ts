import { Exclude } from 'class-transformer';

export class loginReponse {
  id: number;
  email: string;
  name: string;
  surname: string;
  phoneNumber: number;
  roleId: number;

  @Exclude()
  createdAt: Date;
  @Exclude()
  authConfirmToken: number;

  isVarrified: boolean;

  @Exclude()
  expiresIn: string;

  accessToken: string;
}

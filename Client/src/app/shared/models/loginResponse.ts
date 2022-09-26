export class loginReponse {
  id: number;
  email: string;
  name: string;
  surname: string;
  phoneNumber: number;
  roleId: number;

  createdAt: Date;
  authConfirmToken: number;

  isVarrified: boolean;

  expiresIn: string;

  accessToken: string;
  status?: number;
}

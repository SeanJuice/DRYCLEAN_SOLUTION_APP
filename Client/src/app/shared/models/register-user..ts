export class createUserDTO {
  readonly id?: number;

  readonly roleId: number;

  readonly createdAt: Date;

  readonly authConfirmToken: number;

  readonly isVarrified: boolean;

  readonly name: string;

  readonly surname: string;

  public phoneNumber: number;

  public email: string;
  public readonly password: string;
}

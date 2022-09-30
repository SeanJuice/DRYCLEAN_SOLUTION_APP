import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class EmailService {
  private code;

  constructor(private mailerService: MailerService) {}

  async sendConfirmationEmail(user: User, code: number) {
    const { email, name, surname } = await user;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Nice App! Confirm Email',
      template: 'confirm',
      context: {
        fullName: `${name} ${surname}`,
        code: code,
      },
    });
  }

  async sendConfirmedEmail(user: User) {
    const { email, name, surname } = user;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Nice App! Email Confirmed',
      template: 'confirmed',
      context: {
        fullName: `${name} ${surname}`,
        email,
      },
    });
  }

  async sendAccptedEmail(user: User, orderNumber: number) {
    const { email, name, surname } = user;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Order Accepted',
      template: 'acceptedOrder',
      context: {
        fullName: `${name} ${surname}`,
        email,
        orderNumber,
      },
    });
  }

  async sendRejectEmail(user: User, orderNumber: number) {
    const { email, name, surname } = user;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Order rejected',
      template: 'rejectedOrder',
      context: {
        fullName: `${name} ${surname}`,
        email,
        orderNumber,
      },
    });
  }
}

import { AuthController } from '@applicationLayer|controllers';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/domain/helpers';
import { DataInterceptor } from 'src/domain/helpers/interceptors/data.interceptor';
import { LocalStrategy } from 'src/domain/providers/local.strategy';
import { AuthService, EmailService, UserService } from 'src/domain/services';
import { UserRepository } from 'src/infrastructure/repositories';
import { MailModule } from '../mail.module';
@Module({
  imports: [
    MailModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    JwtStrategy,
    LocalStrategy,
    UserService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    EmailService,
  ],
  exports: [PassportModule],
})
export class AuthModule {}

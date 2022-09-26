import { Module } from '@nestjs/common';
import { AuthModule, ServiceModule } from 'src/domain/modules';
import { MailModule } from '../../domain/modules/mail.module';

@Module({
  imports: [AuthModule, MailModule, ServiceModule, AuthModule, MailModule],
  controllers: [],
  providers: [MailModule],
})
export class AppModule {}

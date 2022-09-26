import {
  AuthModule,
  MailModule,
  ServiceModule,
  ShopModule,
} from '@domainLayer|modules';
import { Module } from '@nestjs/common';
import { EmployeeModule } from '../../domain/modules/employee.module';
import { OrderModule } from './../../domain/modules/order.module';

@Module({
  imports: [
    OrderModule,
    EmployeeModule,
    ShopModule,
    AuthModule,
    MailModule,
    ServiceModule,
    AuthModule,
    MailModule,
  ],
  controllers: [],
  providers: [MailModule],
})
export class AppModule {}

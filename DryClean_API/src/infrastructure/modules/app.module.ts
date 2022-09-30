import { generalMapper } from '@domainLayer|mappers';
import {
  AuthModule,
  MailModule,
  OrderLineModule,
  ServiceModule,
  ShopModule,
} from '@domainLayer|modules';
import { Module } from '@nestjs/common';
import { EmployeeModule } from '../../domain/modules/employee.module';
import { OrderModule } from './../../domain/modules/order.module';
import { automapperModule } from './../external-services/automapper.module';

@Module({
  imports: [
    automapperModule,
    OrderModule,
    EmployeeModule,
    ShopModule,
    OrderLineModule,
    AuthModule,
    MailModule,
    ServiceModule,
    AuthModule,
    MailModule,
  ],
  controllers: [],
  providers: [MailModule, generalMapper],
  exports: [MailModule],
})
export class AppModule {}

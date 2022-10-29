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
import { AuditTrailModule } from '../../domain/modules/audittrail.module';
import { CustomerModule } from '../../domain/modules/customer.module';
import { OrderModule } from '../../domain/modules/order.module';
import { automapperModule } from '../external-services/automapper.module';

@Module({
  imports: [
    AuditTrailModule,
    CustomerModule,
    OrderModule,
    EmployeeModule,
    ShopModule,
    OrderLineModule,

    AuthModule,
    MailModule,
    ServiceModule,
    AuthModule,
    automapperModule,
  ],
  controllers: [],
  providers: [MailModule, generalMapper],
  exports: [MailModule],
})
export class AppModule {}

/*
https://docs.nestjs.com/modules
*/

import { CustomerService } from '@domainLayer|services';
import { CustomerRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [CustomerRepository, CustomerService],
})
export class CustomerModule {}

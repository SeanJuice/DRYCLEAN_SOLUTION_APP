/* eslint-disable import/no-unresolved */
/*
https://docs.nestjs.com/modules
*/

import { CustomerController } from '@applicationLayer|controllers';
import { CustomerService } from '@domainLayer|services';
import { CustomerRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerRepository, CustomerService],
})
export class CustomerModule {}

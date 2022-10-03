import { CustomerRepository } from '@infrastructureLayer|repositories';
import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { BaseService } from './base/base.service';
@Injectable()
export class CustomerService extends BaseService<Customer> {
  constructor(private customerRepository: CustomerRepository) {
    super(customerRepository);
  }
}

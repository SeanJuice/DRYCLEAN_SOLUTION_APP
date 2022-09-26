import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { EmployeeRepository } from 'src/infrastructure/repositories/_index';
import { BaseService } from './base/base.service';
@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(private employeeRepository: EmployeeRepository) {
    super(employeeRepository);
  }
}

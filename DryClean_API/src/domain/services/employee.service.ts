/* eslint-disable import/no-unresolved */
import { EmployeeDTO } from '@applicationLayer|dtos';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { EmployeeRepository } from '../../infrastructure/repositories/_index';

import { BaseService } from './base/base.service';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(private employeeRepository: EmployeeRepository) {
    super(employeeRepository);
  }

  async createEmployee(employee: EmployeeDTO) {
    try {
      return this.employeeRepository.createEmployee(employee);
    } catch (e) {
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

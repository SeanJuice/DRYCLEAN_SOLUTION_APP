import { EmployeeDTO } from '@applicationLayer|dtos';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { EmployeeRepository } from 'src/infrastructure/repositories/_index';
import { Employee as _Employee } from '../entities/database.models';
import { BaseService } from './base/base.service';
@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(
    private employeeRepository: EmployeeRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    super(employeeRepository);
  }

  async createEmployee(employee: EmployeeDTO) {
    const emp = await this.mapper.mapAsync(employee, EmployeeDTO, _Employee);

    try {
      return this.employeeRepository.createEmployee(employee);
    } catch (e) {
      console.log(e);
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

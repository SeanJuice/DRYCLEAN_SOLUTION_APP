/*
https://docs.nestjs.com/controllers#controllers
*/

import { EmployeeDTO } from '@applicationLayer|dtos';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from '../../domain/services/employee.service';

import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('employee')
// @UseGuards(JwtAuthGuard)
@Controller('employee')
// eslint-disable-next-line import/prefer-default-export
export class EmployeeController extends BaseController<EmployeeDTO> {
  constructor(private service: EmployeeService) {
    super(service);
  }

  @Post('createEmployee')
  async createOrder(
    @Body()
    employee: EmployeeDTO,
  ) {
    // console.log(employee);

    return this.service.createEmployee(employee);
  }
}

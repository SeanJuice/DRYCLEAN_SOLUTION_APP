/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from 'src/domain/services/employee.service';
import { EmployeeDTO } from '../dtos/employee.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('employee')
// @UseGuards(JwtAuthGuard)
@Controller('employee')
export class EmployeeController extends BaseController<EmployeeDTO> {
  constructor(private service: EmployeeService) {
    super(service);
  }

  @Post('createEmployee')
  async createOrder(
    @Body()
    employee: EmployeeDTO,
  ) {
    console.log(employee);

    return await this.service.createEmployee(employee);
  }
}

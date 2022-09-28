/*
https://docs.nestjs.com/modules
*/

import { EmployeeController } from '@applicationLayer|controllers';
import { EmployeeRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}

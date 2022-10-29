/*
https://docs.nestjs.com/controllers#controllers
*/

// eslint-disable-next-line import/no-unresolved
import { CustomerService } from '@domainLayer|services';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import CustomerDTO from '../dtos/customer.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('customer')
// @UseGuards(JwtAuthGuard)
@Controller('customer')
export class CustomerController extends BaseController<CustomerDTO> {
  constructor(private service: CustomerService) {
    super(service);
  }
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseService } from 'src/domain/services/base/base.service';
import { serviceService } from 'src/domain/services/_service.service';
import { serviceDTO } from '../dtos/service.dto';

@ApiBearerAuth()
@ApiTags('service')
// @UseGuards(JwtAuthGuard)
@Controller('service')
export class ServiceController extends BaseService<serviceDTO> {
  constructor(private service: serviceService) {
    super(service);
  }

  @Get('/types')
  async getServiceTypes() {
    const types = this.service.getServiceTypes();
    if (!types) {
      throw new NotFoundException('Todo does not exist!');
    }
    return types;
  }
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { serviceService } from 'src/domain/services/_service.service';
import { serviceDTO } from '../dtos/service.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('service')
// @UseGuards(JwtAuthGuard)
@Controller('service')
export class ServiceController extends BaseController<serviceDTO> {
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

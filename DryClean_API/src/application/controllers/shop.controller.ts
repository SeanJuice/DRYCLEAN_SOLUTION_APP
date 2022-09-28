/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ShopService } from 'src/domain/services/shop.service';
import { ShopDTO } from '../dtos/shop.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('shop')
// @UseGuards(JwtAuthGuard)
@Controller('shop')
export class ShopController extends BaseController<ShopDTO> {
  constructor(private service: ShopService) {
    super(service);
  }
}

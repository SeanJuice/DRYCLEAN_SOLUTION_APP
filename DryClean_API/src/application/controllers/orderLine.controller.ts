import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OrderLineService } from 'src/domain/services/orderLine.service';
import { OrderLineDTO } from '../dtos/order.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('order')
// @UseGuards(JwtAuthGuard)
@Controller('orderline')
export class OrderLineController extends BaseController<OrderLineDTO> {
  constructor(private service: OrderLineService) {
    super(service);
  }

  @Get(':id')
  async getMyOrders(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return await this.service.getOrders(id);
  }
}

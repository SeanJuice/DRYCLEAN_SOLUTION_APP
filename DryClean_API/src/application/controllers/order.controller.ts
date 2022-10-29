/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OrderService } from 'src/domain/services/order.service';
import { acceptOrderDTO } from '../dtos/acceptOrder.dto';
import { orderDTO } from '../dtos/order.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('order')
// @UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController extends BaseController<orderDTO> {
  constructor(private service: OrderService) {
    super(service);
  }

  @Get('myOrders/:id')
  async getMyOrders(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return await this.service.getMyOrders(id);
  }

  @Post('createOrder')
  async createOrder(
    @Body()
    order: orderDTO,
  ) {
    return await this.service.createOrder(order);
  }

  @Post('acceptOrder/:id')
  async acceptOrrejectOrder(
    @Body()
    isAccepted: acceptOrderDTO,
    @Param('id') id: number,
  ) {
    return await this.service.AcceptOrder(isAccepted, id);
  }
}

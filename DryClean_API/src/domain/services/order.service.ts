import { orderDTO } from '@applicationLayer|dtos';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Order as _Order } from '@domainLayer|entities';
import { OrderRepository } from '@infrastructureLayer|repositories';
import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order, PrismaClient } from '@prisma/client';
import { BaseService } from './base/base.service';
const prisma = new PrismaClient().user;
// import '../mappers/general.mapper';
@Injectable()
export class OrderService extends BaseService<Order> {
  constructor(
    private ordeRepository: OrderRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    super(ordeRepository);
  }

  getMyOrders(id: number) {
    try {
      return this.ordeRepository.getUserOrders(id);
    } catch (e) {
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // createOrder(@Body() order: orderDTO): Promise<Order | HttpException> {
  //
  async createOrder(@Body() order: orderDTO) {
    let _order = order;
    this.mapper.mapAsync(order, orderDTO, _Order).then(
      (res: any) => {
        _order = res;
      },
      (error) => {
        console.log('error====>', error);
      },
    );
    try {
      return this.mapper.mapAsync(
        await this.ordeRepository.Order(
          order,
          _order.paymentInformation,
          _order.orders,
        ),
        _Order,
        orderDTO,
      );
    } catch (e) {
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { orderDTO } from '@applicationLayer|dtos';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Order as _Order, OrderLine } from '@domainLayer|entities';
import { OrderRepository } from '@infrastructureLayer|repositories';
import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { BaseService } from './base/base.service';
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

  createOrder(@Body() order: orderDTO): Promise<Order | HttpException> {
    const _order = this.mapper.map(order, _Order);

    console.log(_order);

    return this.ordeRepository.create(_order).then((result: Order) => {
      const unMappedOrders = order.orders.map((order) => {
        return {
          ...order,
          orderId: result.id,
        };
      });
      const orders: OrderLine[] = this.mapper.mapArray(
        unMappedOrders,
        OrderLine,
      );
      try {
        this.ordeRepository.addOrderLine(orders);
      } catch (e) {
        return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    });
  }
}

import { OrderRepository } from '@infrastructureLayer|repositories';
import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { BaseService } from './base/base.service';
@Injectable()
export class OrderService extends BaseService<Order> {
  constructor(private ordeRepository: OrderRepository) {
    super(ordeRepository);
  }
}

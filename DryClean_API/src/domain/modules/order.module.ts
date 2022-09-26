/*
https://docs.nestjs.com/modules
*/

import { OrderRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}

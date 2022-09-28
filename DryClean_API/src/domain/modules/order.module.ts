/*
https://docs.nestjs.com/modules
*/

import { OrderController } from '@applicationLayer|controllers';
import { OrderRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}

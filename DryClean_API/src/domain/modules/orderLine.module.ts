/*
https://docs.nestjs.com/modules
*/

import { OrderLineController } from '@applicationLayer|controllers';
import { OrderLineRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { OrderLineService } from '../services/orderLine.service';

@Module({
  imports: [],
  controllers: [OrderLineController],
  providers: [OrderLineRepository, OrderLineService],
})
export class OrderLineModule {}

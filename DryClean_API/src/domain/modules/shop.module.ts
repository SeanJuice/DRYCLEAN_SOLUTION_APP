/*
https://docs.nestjs.com/modules
*/

import { ShopRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { ShopService } from '../services/shop.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ShopService, ShopRepository],
})
export class ShopModule {}

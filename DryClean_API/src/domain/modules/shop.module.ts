/*
https://docs.nestjs.com/modules
*/

import { ShopController } from '@applicationLayer|controllers';
import { ShopRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { ShopService } from '../services/shop.service';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
})
export class ShopModule {}

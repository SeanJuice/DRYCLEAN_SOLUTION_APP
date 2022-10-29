/*
https://docs.nestjs.com/modules
*/

import { ShopController } from '@applicationLayer|controllers';
import { ShopService } from '@domainLayer|services';
import { ShopRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService, ShopRepository],
})
export class ShopModule {}

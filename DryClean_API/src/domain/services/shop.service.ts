import { ShopRepository } from '@infrastructureLayer|repositories';
import { Injectable } from '@nestjs/common';
import { Shop } from '@prisma/client';
import { BaseService } from './base/base.service';
@Injectable()
export class ShopService extends BaseService<Shop> {
  constructor(private shopRepository: ShopRepository) {
    super(shopRepository);
  }
}

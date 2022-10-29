/* eslint-disable import/no-unresolved */
import { Injectable } from '@nestjs/common';
import { Shop } from '@prisma/client';
import { ShopRepository } from 'src/infrastructure/repositories/_index';
import { BaseService } from './base/base.service';

@Injectable()
export class ShopService extends BaseService<Shop> {
  constructor(private shopRepository: ShopRepository) {
    super(shopRepository);
  }
}

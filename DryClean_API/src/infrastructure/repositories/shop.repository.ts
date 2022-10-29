import { PrismaClient, Shop } from '@prisma/client';
import { BaseRepository } from './base.repository';

const prisma = new PrismaClient().shop;

export class ShopRepository extends BaseRepository<typeof prisma, Shop> {
  constructor() {
    super(prisma);
  }
}

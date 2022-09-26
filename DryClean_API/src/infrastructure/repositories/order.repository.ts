import { Order, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().order;

export class OrderRepository extends BaseRepository<typeof prisma, Order> {
  constructor() {
    super(prisma);
  }
}

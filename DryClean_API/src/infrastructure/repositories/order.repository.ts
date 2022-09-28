import { OrderLine } from '@domainLayer|entities';
import { Order, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().order;
const prisma_orderline = new PrismaClient().orderLine;

export class OrderRepository extends BaseRepository<typeof prisma, Order> {
  constructor() {
    super(prisma);
  }

  getUserOrders(_id: number) {
    return prisma.findMany({
      where: {
        id: _id,
      },
    });
  }

  async addOrderLine(orderline: OrderLine[]) {
    return await prisma_orderline.createMany({
      data: {
        ...orderline,
      },
    });
  }
}

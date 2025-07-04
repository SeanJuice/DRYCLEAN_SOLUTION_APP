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
        userId: _id,
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

  async Order(orderInfo, PaymentInfo, OrderLines): Promise<Order> {
    const orderlines = OrderLines.map((line: any) => {
      return line;
    });

    console.log(orderInfo, PaymentInfo, OrderLines);
    let profile: Order = this.repository.create({
      data: {
        ...orderInfo,
        paymentInformation: {
          create: {
            ...PaymentInfo,
          },
        },
        orders: {
          createMany: {
            data: orderlines,
          },
        },
      },
      include: {
        user: true,
        paymentInformation: true,
        orders: true,
      },
    });

    return profile;
  }
}

export class OrderLineRepository extends BaseRepository<
  typeof prisma_orderline,
  OrderLine
> {
  getOrders(id: number) {
    return prisma_orderline.findMany({
      where: {
        orderId: id,
      },
      include: {
        service: true,
      },
    });
  }
  constructor() {
    super(prisma_orderline);
  }
}

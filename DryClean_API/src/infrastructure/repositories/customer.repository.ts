import { Customer, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().customer;

export class CustomerRepository extends BaseRepository<
  typeof prisma,
  Customer
> {
  constructor() {
    super(prisma);
  }
}

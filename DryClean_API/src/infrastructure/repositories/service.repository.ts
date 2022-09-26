import { PrismaClient, Service } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().service;
const prismaType = new PrismaClient().serviceType;

export class ServiceRepository extends BaseRepository<typeof prisma, Service> {
  constructor() {
    super(prisma);
  }

  async getServiceTypes() {
    return await prismaType.findMany();
  }
}

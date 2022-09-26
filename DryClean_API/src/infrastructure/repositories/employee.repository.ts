import { Employee, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().employee;

export class EmployeeRepository extends BaseRepository<
  typeof prisma,
  Employee
> {
  constructor() {
    super(prisma);
  }
}

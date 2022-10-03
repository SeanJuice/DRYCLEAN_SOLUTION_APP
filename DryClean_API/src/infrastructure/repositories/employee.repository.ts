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

  async createEmployee(employee: Employee): Promise<Employee> {
    return await prisma.create({
      data: {
        ...employee,
      },
      include: {
        shop: true,
      },
    });
  }
}

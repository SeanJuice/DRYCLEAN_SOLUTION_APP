import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const serviceTypes = [
    { name: 'Shoe Repair', description: 'Shoe Repairs' },
    { name: 'Dry Cleaning', description: 'Dry Cleaning ' },
    { name: 'Laundry', description: 'Laundry Services' },
    { name: 'Tailoring', description: 'Tailoring Services' },
  ];
  // await prisma.role.deleteMany();

  console.log('Seeding...');
  const count = await prisma.role.count();

  const countType = await prisma.serviceType.count();
  if (count === 0) {
    const role1 = await prisma.role.create({
      data: {
        description: 'Admin',
      },
    });
    const role2 = await prisma.role.create({
      data: {
        description: 'Customer',
      },
    });
  }
  if (countType == 0) {
    //

    const admin = await prisma.user.create({
      data: {
        email: 'admin@gmail.com',
        name: 'Admin',
        surname: 'A',
        phoneNumber: 4444,
        password:
          '$2b$10$66Zj.Gxu9LAY1N.46HBqNuuTez0BrUh/vFW3.81Duf3ZHK9vdFNwG',
        roleId: 2,
        createdAt: new Date('2020-09-26 00:00:00.0000000'),
        authConfirmToken: 22222,
        isVarrified: true,
      },
    });
    serviceTypes.forEach(async (element) => {
      await prisma.serviceType.create({
        data: {
          ...element,
        },
      });
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

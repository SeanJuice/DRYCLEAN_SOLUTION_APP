import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const serviceTypes = [
    { name: 'Shoe Repair', description: 'Shoe Repairs' },
    { name: 'Dry Cleaning', description: 'Dry Cleaning ' },
    { name: 'Laundry', description: 'Laundry Services' },
    { name: 'Tailoring', description: 'Tailoring Services' },
  ];
  //await prisma.role.deleteMany();

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

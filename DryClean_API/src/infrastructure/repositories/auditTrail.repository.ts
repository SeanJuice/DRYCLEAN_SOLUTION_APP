import { AuditTrail, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base.repository';
const prisma = new PrismaClient().auditTrail;

export class AuditTrailRepository extends BaseRepository<
  typeof prisma,
  AuditTrail
> {
  constructor() {
    super(prisma);
  }
}

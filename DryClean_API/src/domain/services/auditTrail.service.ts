import { AuditTrailRepository } from '@infrastructureLayer|repositories';
import { Injectable } from '@nestjs/common';
import { AuditTrail } from '@prisma/client';
import { BaseService } from './base/base.service';

@Injectable()
export class AuditTrailService extends BaseService<AuditTrail> {
  constructor(private customerRepository: AuditTrailRepository) {
    super(customerRepository);
  }
}

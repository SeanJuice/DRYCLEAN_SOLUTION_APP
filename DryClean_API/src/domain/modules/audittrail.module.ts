/*
https://docs.nestjs.com/modules
*/

import { AuditTrailRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { AuditTrailController } from 'src/application/controllers/auditTrail.controller';
import { AuditTrailService } from '../services/auditTrail.service';

@Module({
  imports: [],
  controllers: [AuditTrailController],
  providers: [AuditTrailRepository, AuditTrailService],
})
export class AuditTrailModule {}

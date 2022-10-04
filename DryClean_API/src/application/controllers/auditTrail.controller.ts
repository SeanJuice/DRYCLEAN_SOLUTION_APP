/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuditTrailService } from 'src/domain/services/auditTrail.service';
import { AuditTrailDTO } from '../dtos/audit.dto';
import { BaseController } from './base/base.controller';

@ApiBearerAuth()
@ApiTags('audittrail')
// @UseGuards(JwtAuthGuard)
@Controller('audittrail')
export class AuditTrailController extends BaseController<AuditTrailDTO> {
  constructor(private service: AuditTrailService) {
    super(service);
  }
}

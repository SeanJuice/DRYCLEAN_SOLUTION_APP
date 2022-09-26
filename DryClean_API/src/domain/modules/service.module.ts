import { ServiceController } from '@applicationLayer|controllers';
import { Module } from '@nestjs/common';
import { ServiceRepository } from 'src/infrastructure/repositories/_index';
import { serviceService } from '../services/_service.service';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [serviceService, ServiceRepository],
})
export class ServiceModule {}

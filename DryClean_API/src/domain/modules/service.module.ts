import { ServiceController } from '@applicationLayer|controllers';
import { ServiceRepository } from '@infrastructureLayer|repositories';
import { Module } from '@nestjs/common';
import { serviceService } from '../services/_service.service';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [serviceService, ServiceRepository],
})
export class ServiceModule {}

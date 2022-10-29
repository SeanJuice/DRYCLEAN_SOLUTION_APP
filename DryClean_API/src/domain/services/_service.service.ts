import { Injectable } from '@nestjs/common';
import { Service, ServiceType } from '@prisma/client';
import { ServiceRepository } from 'src/infrastructure/repositories/_index';
import { BaseService } from './base/base.service';

@Injectable()
export class serviceService extends BaseService<Service> {
  constructor(private serviceRepository: ServiceRepository) {
    super(serviceRepository);
  }

  async getServiceTypes(): Promise<ServiceType[]> {
    const types: ServiceType[] = [];
    (await this.serviceRepository.getServiceTypes()).forEach((obj) => {
      types.push(obj);
    });

    return types;
  }
}

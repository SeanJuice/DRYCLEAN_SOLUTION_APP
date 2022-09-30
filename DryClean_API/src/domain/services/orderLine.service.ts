import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { OrderLineRepository } from '@infrastructureLayer|repositories';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderLine } from '@prisma/client';
import { BaseService } from './base/base.service';
// import '../mappers/general.mapper';
@Injectable()
export class OrderLineService extends BaseService<OrderLine> {
  constructor(
    private ordeRepository: OrderLineRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    super(ordeRepository);
  }

  getOrders(id: number) {
    try {
      return this.ordeRepository.getOrders(id);
    } catch (e) {
      return new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

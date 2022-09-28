import { BaseEntity } from '@domainLayer|entities';
import { IBaseService } from '@domainLayer|interfaces';
import { BadGatewayException, Body, Injectable, Param } from '@nestjs/common';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly genericRepository: any) {}

  create(@Body() entity: any): Promise<T> {
    try {
      return new Promise<T>((resolve, reject) => {
        this.genericRepository
          .create(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.getAll();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  findById(@Param('id') id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findById(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  findManyById(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findManyById(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  delete(@Param('id') id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  update(@Param('id') id: number, @Body() entity: T): Promise<T> {
    try {
      return new Promise<T>((resolve, reject) => {
        this.genericRepository.update(id, entity);
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}

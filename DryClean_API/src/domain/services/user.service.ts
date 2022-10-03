import { createUserDTO } from '@applicationLayer|dtos';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/infrastructure/repositories/_index';
import { BaseService } from './base/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    private userrepository: UserRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    super(userrepository);
  }

  async getAllCutomers() {
    let list: createUserDTO[];
    list = await this.userrepository.Customers();
    list = list.map((res: any) => {
      return {
        ...res,
        password: null,
      };
    });
    return <createUserDTO[]>list;
  }

  async count() {
    let num = await await this.userrepository.count();
    return num;
  }
}

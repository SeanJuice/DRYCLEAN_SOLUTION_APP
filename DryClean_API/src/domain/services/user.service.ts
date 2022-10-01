import { createUserDTO } from '@applicationLayer|dtos';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/infrastructure/repositories/_index';
import { BaseService } from './base/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private userrepository: UserRepository) {
    super(userrepository);
  }

  async getAllCutomers() {
    let list: createUserDTO[];
    list = await this.userrepository.Customers();
    return <createUserDTO[]>list;
  }

  async count() {
    let num = await await this.userrepository.count();
    return num;
  }
}

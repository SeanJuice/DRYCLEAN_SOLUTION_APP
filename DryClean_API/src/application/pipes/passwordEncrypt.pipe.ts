/* eslint-disable import/no-unresolved */
import { createUserDTO } from '@applicationLayer|dtos';
import { Injectable, Logger, PipeTransform } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordPipe implements PipeTransform {
  async transform(value: createUserDTO) {
    const saltOrRounds = 10;
    const password = await bcrypt.hash(value.password, saltOrRounds);
    // eslint-disable-next-line no-param-reassign
    value.password = password;

    Logger.log(value);
    return value;
  }
}

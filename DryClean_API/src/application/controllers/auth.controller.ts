import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  // ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService, UserService } from 'src/domain/services/_index';
import { CodeDTO } from '../dtos/code.dto';
import { createUserDTO } from '../dtos/createUser.dto';
import { UserLoginDTO } from '../dtos/userLogin.dto';
import { UserExistException } from '../exceptions/userExisit.exception';
const path = require('path');
@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Body() loginUserDto: UserLoginDTO): Promise<any> {
    Logger.log(loginUserDto);
    return await this.authService.login(loginUserDto);
  }

  @Post('register')
  async register(@Body() user: createUserDTO) {
    Logger.log(user);
    const userCheck = await this.authService.isUserInSystem(user.email);
    if (userCheck) {
      return new UserExistException();
    }
    return this.authService.registerUser(user);
  }

  @Get('/getCustomers')
  async getCustomers() {
    const customers = this.userService.getAllCutomers();
    if (!customers) {
      throw new NotFoundException('Todo does not exist!');
    }
    return customers;
  }

  @Post('/verify')
  async Varify(@Body() body: CodeDTO) {
    return await this.authService.varifyAccount(Number(body.code));
  }
}

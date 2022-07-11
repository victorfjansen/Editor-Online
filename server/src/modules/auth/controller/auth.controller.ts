import { Body, Controller, Get, Headers, Post } from '@nestjs/common';

import { CreateUserDto, GetUserDto } from '../models/dtos';
import { User } from '../models/interfaces';
import { AuthService } from '../services';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async authUser(@Body() userData: GetUserDto): Promise<User | null> {
    return await this.authService.authUser(userData);
  }

  @Get('/userById')
  async getUserById(@Headers('_id') _id: string): Promise<User> {
    return await this.authService.getUserById(_id);
  }

  @Post()
  async createUser(@Body() newUserData: CreateUserDto): Promise<User> {
    return await this.authService.createUser(newUserData);
  }
}

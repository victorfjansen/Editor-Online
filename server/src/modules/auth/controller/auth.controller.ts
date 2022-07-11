import { Body, Controller, Get, Post } from '@nestjs/common';

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

  @Post()
  async createUser(@Body() newUserData: CreateUserDto): Promise<User> {
    return await this.authService.createUser(newUserData);
  }
}

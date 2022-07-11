import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { badRequestException, notFoundException } from 'src/shared';

import { CreateUserDto, GetUserDto } from '../models/dtos';
import { User } from '../models/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('AuthUser') private readonly authModel: Model<User>,
  ) {}

  private async findUser(email: string): Promise<User> {
    const player = await this.authModel.findOne({ email });
    return player;
  }

  async createUser(newUserData: CreateUserDto): Promise<User> {
    const { email } = newUserData;
    const foundUser = await this.findUser(email);

    if (!foundUser) return await this.authModel.create(newUserData);
    else badRequestException('Um usuário com esse email já existe!');
  }

  async authUser(userData: GetUserDto): Promise<User | null> {
    const { username, password } = userData;
    const foundUser = await this.authModel.findOne({ username, password });

    if (foundUser) return foundUser;
    else notFoundException('Usuário não encontrado!');
  }

  async getUserById(_id: string): Promise<User> {
    return await this.authModel.findOne({ _id });
  }
}

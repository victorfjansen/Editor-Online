import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './controller/auth.controller';
import { UserSchema } from './models/schema';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AuthUser', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class ServicesModule {}

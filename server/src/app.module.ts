import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from './modules/auth/services.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin123:admin123@cluster0.wyyp0kf.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

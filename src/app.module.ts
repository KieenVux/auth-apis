import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configDatabase from './config/config.database';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configDatabase],
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://root:123456@mongo:27017/'),
    AccountModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

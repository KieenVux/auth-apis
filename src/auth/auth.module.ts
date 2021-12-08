import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountRepository } from 'src/account/account.repository';
import { Account, AccountSchema } from 'src/account/entities/account.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/strategy.jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccountRepository, JwtStrategy],
  imports: [
    JwtModule.register({
      secret: 'sosecretthatyouwillneverfindout',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
})
export class AuthModule {}

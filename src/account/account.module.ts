import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './entities/account.entity';
import { AccountRepository } from './account.repository';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  exports: [AccountRepository],
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
})
export class AccountModule {}

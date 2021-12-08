import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Account, AccountDocument } from './entities/account.entity';

@Injectable()
export class AccountRepository extends BaseRepository<AccountDocument> {
  constructor(@InjectModel(Account.name) model: Model<AccountDocument>) {
    super(model);
  }
}

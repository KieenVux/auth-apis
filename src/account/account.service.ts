import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcryptjs';
import { CRUDService } from 'src/base/base.service';
import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';
@Injectable()
export class AccountService extends CRUDService<Account, AccountRepository> {
  constructor(repository: AccountRepository) {
    super(repository);
  }

  create(item: Account) {
    // hash the password before save it to database
    Object.assign(item, { password: hashSync(item.password, 10) });
    return this.repository.create(item);
  }
  async findById(id: string) {
    const accountResponse = await this.repository.findOne({ id });
    accountResponse.data.password = undefined;
    return accountResponse;
  }
}

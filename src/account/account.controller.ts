import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { User } from 'src/decorators/user.decorator';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';

@Controller('account')
@ApiTags('Account')
@ApiBearerAuth('Authorization')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() account: Account) {
    return this.accountService.create(account);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  findOne(@User('id') id: string) {
    return this.accountService.findById(id);
  }

  @Patch('')
  @UseGuards(JwtAuthGuard)
  update(@User('id') id: string, @Body() account: Partial<Account>) {
    return this.accountService.update(account, id);
  }

  @Delete('')
  remove(@User('id') id: string) {
    return this.accountService.delete(id);
  }
}

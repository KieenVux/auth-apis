import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guard/role.guard';
import { Public } from 'src/decorators/public.decorator';
import { HasRoles } from 'src/decorators/role.decorator';
import { User } from 'src/decorators/user.decorator';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';

@Controller('account')
@ApiTags('Account')
@ApiBearerAuth('Authorization')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @Public()
  create(@Body() account: Account) {
    return this.accountService.create(account);
  }

  @Get('')
  @HasRoles(Roles.USER)
  findOne(@User('id') id: string) {
    return this.accountService.findById(id);
  }

  @ApiOperation({ description: 'get all available account(for admin only)' })
  @Get('index')
  @HasRoles(Roles.ADMIN)
  findOneForAdmin() {
    return this.accountService.findAll();
  }

  @Patch('')
  update(@User('id') id: string, @Body() account: Partial<Account>) {
    return this.accountService.update(account, id);
  }

  @Delete('')
  @HasRoles(Roles.ADMIN)
  remove(@Param('id') id: string) {
    return this.accountService.delete(id);
  }
}

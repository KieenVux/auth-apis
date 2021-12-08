import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginReq } from './dto/login.dto';

@Controller('auth')
@ApiTags('Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  async login(@Body() loginReq: LoginReq, @Res() response: Response) {
    this.authService.login(loginReq, response);
  }
}
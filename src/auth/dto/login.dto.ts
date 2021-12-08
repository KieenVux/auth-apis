import { IsEmail, Length } from 'class-validator';

export class LoginReq {
  @IsEmail()
  email: string;
  @Length(6, 20)
  password: string;
}

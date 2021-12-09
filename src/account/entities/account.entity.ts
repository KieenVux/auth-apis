import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEnum, Length } from 'class-validator';
import { Document } from 'mongoose';
import { Roles } from 'src/auth/guard/role.guard';
import { BaseSchema } from 'src/base/base.schema';
export type AccountDocument = Account & Document;

@Schema({ collection: 'account' })
export class Account extends BaseSchema {
  @Prop()
  @Length(6, 30)
  name: string;

  @Prop({ unique: true })
  @IsEmail()
  email: string;

  @Prop()
  @Length(10, 30)
  password: string;

  @Prop({ enum: Roles, type: Array })
  @IsEnum(Roles, {
    each: true,
  })
  role: Roles[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);

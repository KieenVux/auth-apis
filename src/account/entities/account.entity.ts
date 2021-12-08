import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, Length } from 'class-validator';
import { Document } from 'mongoose';
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
}

export const AccountSchema = SchemaFactory.createForClass(Account);

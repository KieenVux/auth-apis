import { Prop } from '@nestjs/mongoose';

export class BaseSchema {
  @Prop({ type: Date })
  createdAt: Date;
  @Prop({ type: Date })
  updatedAt: Date;
  @Prop({ type: Date })
  deletedAt: Date;
}

export type BaseDocument = BaseSchema & Document;

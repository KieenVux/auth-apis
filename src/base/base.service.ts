import { Document, FilterQuery } from 'mongoose';
import { BaseRepository } from './base.repository';
import { BaseSchema } from './base.schema';

export class CRUDService<
  Schema extends BaseSchema,
  Repository extends BaseRepository<Schema & Document>,
> {
  protected repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  create(item: Schema) {
    return this.repository.create(item);
  }

  findById(id: string) {
    return this.repository.findOne({ id } as FilterQuery<Schema & Document>);
  }

  update(item: Partial<Schema>, id: string) {
    return this.repository.update(item, { id } as FilterQuery<
      Schema & Document
    >);
  }

  delete(id: string) {
    return this.repository.deleteById({ id } as FilterQuery<Schema & Document>);
  }
  findAll() {
    return this.repository.findAll();
  }
}

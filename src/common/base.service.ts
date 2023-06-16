import { Model, ModelCtor } from "sequelize-typescript";

export class BaseService<T extends Model> {
  protected readonly repository: ModelCtor<T>;

  private readonly PATTERN_EQUALS = 'eq';
  private readonly PATTERN_NOT_EQUALS = 'neq';
  private readonly PATTERN_GREATER_THAN = 'gte';
  private readonly PATTERN_LESS_THAN = 'lte';
  private readonly PATTERN_LIKE = 'like';

  constructor(repository: ModelCtor<T>) {
    this.repository = repository;
  }

  async findAll(): Promise<T[]> {
    

    return this.repository.findAll();
  }

  async findOne(id: string): Promise<T> {
    return this.repository.findByPk(id);
  }

  async create(data: any): Promise<T> {
    data.created_at = new Date();
    return this.repository.create(data);
  }

  async update(id: string, data: any): Promise<T> {
    data.updated_at = new Date();
    const record = await this.repository.findByPk(id);
    if (!record) throw new Error('Record ID not found');
    return record.update(data);
  }

  async remove(id: string): Promise<T> {
    const record = await this.repository.findByPk(id);
    if (record) await record.destroy();
    else throw new Error('Record ID not found');

    return record;
  }
}
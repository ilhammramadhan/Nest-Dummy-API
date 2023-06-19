import { Iplm } from './../../iplm/entities/iplm.entity';
import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
  HasOne,
  HasMany,
} from 'sequelize-typescript';

@Table({ tableName: 'plus_teamrole', timestamps: false })
export class Teamrole extends Model {
  @Column({
    primaryKey: true,
  })
  code: string;

  @Column
  name: string

  @HasMany(() => Iplm)
  iplm: Iplm[]

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  created_at: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  updated_at: Date;

  @Column({ defaultValue: 'system' })
  created_by: string;

  @Column({ defaultValue: 'system' })
  updated_by: string;
}

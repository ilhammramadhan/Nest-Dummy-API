import { Teamrole } from './../../teamrole/entities/teamrole.entity';
import { Iplm } from './../../iplm/entities/iplm.entity';
import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
  HasOne,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'plus_team', timestamps: false })
export class Team extends Model {
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

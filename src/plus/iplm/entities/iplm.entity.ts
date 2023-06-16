import { Iplmrole } from './../../iplmrole/entities/iplmrole.entity';
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
  
@Table({ tableName: 'plus_iplm' })
export class Iplm extends Model {
  @Column({
    primaryKey: true,
  })
  code: string;

  @Column
  first_name: string

  @Column
  last_name: string

  @Column
  initial: string

  @Column
  duty_ratio: string
  
  @Column
  duty_type: string

  @Column
  duty_hours: string

  @Column
  letter_ratio: string

  @Column
  letter_type: string

  @ForeignKey(() => Iplmrole)
  @Column
  plm_role_code: string

  @BelongsTo(() => Iplmrole)
  pimrole: Iplmrole

  @Column({
    field: 'created_at',
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
  })
  updatedAt: Date;

  @Column({ defaultValue: 'system' })
  created_by: string;

  @Column({ defaultValue: 'system' })
  updated_by: string;
}

import { Teamrole } from './../../teamrole/entities/teamrole.entity';
import { Team } from './../../team/entities/team.entity';
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
  
@Table({ tableName: 'plus_iplm', timestamps: false })
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

  @Column({ type: DataType.TIME })
  duty_start_time: string

  @Column({ type: DataType.TIME })
  duty_end_time: string

  @Column
  email: string

  @Column
  letter_ratio: string

  @Column
  letter_type: string

  @ForeignKey(() => Iplmrole)
  @Column
  plm_role_code: string

  @BelongsTo(() => Iplmrole)
  pimrole: Iplmrole

  @ForeignKey(() => Team)
  @Column
  team_code: string

  @ForeignKey(() => Teamrole)
  @Column
  team_role_code: string

  @BelongsTo(() => Teamrole)
  teamrole: Teamrole

  @BelongsTo(() => Team)
  team: Team

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: new Date()
  })
  created_at: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: new Date()
  })
  updated_at: Date;

  @Column({ defaultValue: 'system' })
  created_by: string;

  @Column({ defaultValue: 'system' })
  updated_by: string;
}

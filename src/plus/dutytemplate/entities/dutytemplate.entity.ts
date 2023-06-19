import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
  HasOne,
} from 'sequelize-typescript';
  
@Table({ tableName: 'plus_dutytemplate', timestamps: false })
export class Dutytemplate extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  _id: number;

  @Column
  status_template_roster: string

  @Column({
    type: DataType.DATE
  })
  duty_date: Date

  @Column({
    type: DataType.TEXT
  })
  list_plm_duty: string

  @Column
  template_name: string

  @Column
  duty_name: string

  @Column
  workday_type: string

  @Column({
    type: DataType.TIME,
  })
  workday_start: string

  @Column({
    type: DataType.TIME
  })
  workday_end: string

  @Column({
    type: DataType.TEXT,
  })
  exclusion_content: string

  @Column
  unit_measure_workday: string

  @Column
  no_unit_plm: string

  @Column
  no_plm_required_duty: string

  @Column
  status_template: string

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

import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
  HasOne,
} from 'sequelize-typescript';
  
@Table({ tableName: 'plus_dutyroster', timestamps: false })
export class Dutyroster extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  _id: number;

  @Column
  status: string

  @Column({
    type: DataType.DATE
  })
  duty_start_date: Date

  @Column({
    type: DataType.DATE
  })
  duty_end_date: Date

  @Column({
    type: DataType.TEXT
  })
  duty_description: string

  @Column({
    type: DataType.TEXT
  })
  duty_template_content: string

  @Column
  type: string

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

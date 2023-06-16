import {
  Table,
  Model,
  Column,
  DataType,
  Sequelize,
  HasOne,
} from 'sequelize-typescript';
  
@Table({ tableName: 'plus_iplm' })
export class Iplm extends Model {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

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

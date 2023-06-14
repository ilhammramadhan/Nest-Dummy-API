import {
Table,
Column,
Model
} from 'sequelize-typescript'

@Table({tableName : 'Parcel'})
export class Parcel extends Model {
  
  @Column({
    primaryKey : true,
    autoIncrement : true,
    unique:true
  })
  id : number

  @Column
  UPLType:string

  @Column
  area:number

  @Column
  lot_no:string

  @Column
  parcel_no:string
}


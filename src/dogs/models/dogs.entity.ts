import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

export interface Dog {
  id: number;
  name: string;
  age: number;
  height: number;
  breed: string;
  createdAt: Date;
  updateAt: Date;
  deleteAt?: Date;
}

@Table({
  tableName: 'dogs',
  freezeTableName: true,
  paranoid: true,
})
export class DogEntity extends Model<Dog> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  height: number;

  @Column
  breed: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updateAt: Date;

  @DeletedAt
  @Column
  deletedAt?: Date;
}

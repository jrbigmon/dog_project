import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User, UserEntity } from '../../users/models/users.entity';

export interface Dog {
  id: number;
  name: string;
  age: number;
  height: number;
  breed: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

@Table({
  tableName: 'dogs',
  freezeTableName: true,
  paranoid: true,
})
export class DogEntity extends Model<Dog> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'user_id', allowNull: false })
  public userId!: number;

  @BelongsTo(() => UserEntity)
  public user: User;

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
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt?: Date;
}

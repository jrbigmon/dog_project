import { Dog, DogEntity } from './../../dogs/models/dogs.entity';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';

export interface User {
  id: number;
  name: string;
  dogs: Dog[];
}

@Table({
  tableName: 'users',
  freezeTableName: true,
})
export class UserEntity extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => DogEntity)
  public dogs: Dog[];
}

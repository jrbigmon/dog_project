import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DogEntity } from './dogs/models/dogs.entity';
import { DogModule } from './dogs/dogs.module';

const modules = [DogModule];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      port: 3306,
      username: 'root',
      password: '',
      database: 'project_dogs',
      autoLoadModels: true,
      models: [DogEntity],
    }),
    ...modules,
  ],
})
export class AppModule {}

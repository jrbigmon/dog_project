import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';
import { DogService } from './dogs.service';
import { DogEntity } from './models/dogs.entity';
import { UserEntity } from '../users/models/users.entity';

const models = SequelizeModule.forFeature([DogEntity, UserEntity]);

@Module({
  imports: [models],
  controllers: [DogController],
  providers: [DogService],
  exports: [DogService],
})
export class DogModule {}

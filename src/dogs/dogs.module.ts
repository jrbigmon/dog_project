import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';
import { DogService } from './dogs.service';
import { DogEntity } from './models/dogs.entity';

const models = SequelizeModule.forFeature([DogEntity]);

@Module({
  imports: [models],
  controllers: [DogController],
  providers: [DogService],
  exports: [DogService],
})
export class DogModule {}

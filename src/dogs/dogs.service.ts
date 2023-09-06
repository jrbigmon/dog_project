import { Injectable } from '@nestjs/common';
import { Dog, DogEntity } from './models/dogs.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DogService {
  constructor(
    @InjectModel(DogEntity) private readonly repository: typeof DogEntity,
  ) {}

  public async getList(): Promise<Dog[]> {
    const result = await this.repository.findAll();
    return result;
  }

  public async create(value: Dog): Promise<Dog> {
    const result = await this.repository.create(value);
    return result?.toJSON();
  }
}

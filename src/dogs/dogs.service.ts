import { Injectable } from '@nestjs/common';
import { Dog, DogEntity } from './models/dogs.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

export type DogFilters = {
  deleted: boolean;
  name: string;
};

@Injectable()
export class DogService {
  constructor(
    @InjectModel(DogEntity) private readonly repository: typeof DogEntity,
  ) {}

  private validateIfNumber(value: string | number): boolean {
    if (value && !Number.isNaN(Number(value))) return true;

    return false;
  }

  public async getOne(id: string | number): Promise<Dog> {
    if (this.validateIfNumber(id)) {
      return await this.repository.findByPk(Number(id));
    }

    return null;
  }

  public async getList(filters?: DogFilters): Promise<Dog[]> {
    const { deleted = false, name } = filters;

    return await this.repository.findAll({
      paranoid: !Boolean(deleted),
      where: {
        name: {
          [Op.like]: `%${name || ''}%`,
        },
      },
      include: [{ association: 'user', attributes: ['name'] }],
    });
  }

  public async create(value: Dog): Promise<Dog> {
    const result = await this.repository.create(value);
    return result?.toJSON();
  }

  public async update(
    id: string | number,
    value: Partial<Dog>,
  ): Promise<boolean> {
    if (this.validateIfNumber(id)) {
      const result = await this.repository.update(value, {
        where: { id: Number(id) },
      });

      return result?.[0] > 0;
    }

    return false;
  }

  public async delete(id: string | number): Promise<Dog> {
    if (this.validateIfNumber(id)) {
      const dog = await this.repository.findByPk(id);

      if (dog) {
        await dog.destroy();
        return dog;
      }
    }

    return null;
  }
}

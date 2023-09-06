import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Dog } from './models/dogs.entity';
import { DogFilters, DogService } from './dogs.service';
import { Response } from 'express';

@Controller('dogs')
export class DogController {
  constructor(private readonly service: DogService) {}

  @Get()
  public async getDogs(
    @Query() filters: DogFilters,
    @Res() res: Response,
  ): Promise<Response<Dog[] | { error: string }>> {
    try {
      const result = await this.service.getList(filters);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(505).json({
        error: err.message,
      });
    }
  }

  @Get(':id')
  public async getOneDog(@Param('id') id: string): Promise<Dog> {
    return await this.service.getOne(id);
  }

  @Post()
  public async createDog(@Body() body: Dog): Promise<Dog> {
    return await this.service.create(body);
  }

  @Put(':id')
  public async updateDog(
    @Param('id') id: string,
    @Body() body: Dog,
  ): Promise<boolean> {
    return await this.service.update(id, body);
  }

  @Delete(':id')
  public async deleteDog(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response<Dog>> {
    const result = await this.service.delete(id);

    return res.status(204).json(result);
  }
}

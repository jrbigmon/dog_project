import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Dog } from './models/dogs.entity';
import { DogService } from './dogs.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly service: DogService) {}

  @Get()
  public async getDogs(): Promise<Dog[]> {
    return await this.service.getList();
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
}

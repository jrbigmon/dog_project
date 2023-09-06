import { Body, Controller, Get, Post } from '@nestjs/common';
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
    console.log();
    return await this.service.create(body);
  }
}

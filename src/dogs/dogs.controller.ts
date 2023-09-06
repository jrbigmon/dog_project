import { Controller, Get } from '@nestjs/common';
import { Dog } from './models/dogs.entity';
import { DogService } from './dogs.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly service: DogService) {}

  @Get()
  public async getDogs(): Promise<Dog[]> {
    return await this.service.getList();
  }
}

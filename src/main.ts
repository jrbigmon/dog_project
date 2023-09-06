import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('MAIN');
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  logger.log(`Starting application on port ${port}`);
  logger.log(`http://localhost:${port}`);
}
bootstrap();

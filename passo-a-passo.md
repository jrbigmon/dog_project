1 - nest new project_name;
2 - yarn add sequelize sequelize-typescript mysql2 sqlite3;
3 - remover os arquivos app.controller.ts, app.service.ts e app.controller.spect.ts;
4 - remover as importações dentro app module para o app.controller e app.service;
5 - realizar as configurações do sequelize module

```typescript
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

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
      models: [],
    }),
  ],
})
export class AppModule {}
```

6 - criar o modelo de relacionamento do banco de dados (models);
exemplo:

```typescript
@Table
export class DogsEntity extends Model<Dogs> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  height: number;

  @Column
  breed: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updateAt: Date;

  @DeletedAt
  @Column
  deletedAt?: Date;
}
```

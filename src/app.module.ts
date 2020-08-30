import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";
import { Category } from './entities/category.model';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'desafio3.sqlite',
      entities: [Category],
      synchronize: true,
      migrations: [
        "src/migrations/**/*.ts"
      ],
    }),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule { }

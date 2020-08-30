import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.model';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private CategoryRepo: Repository<Category>, //Generic
  ) { }

  @Get()
  async index(): Promise<Category[]> {
    return this.CategoryRepo.find();
  }

  @Post()
  async store(@Body() body: Category): Promise<Category> {
    const category = this.CategoryRepo.create(body);
    return this.CategoryRepo.save(category);
  }
}
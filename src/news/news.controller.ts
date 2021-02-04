import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddNewsData, EditNewsData, NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly service: NewsService) {}

  @Get()
  public async list() {
    return await this.service.list();
  }

  @Get('/:id')
  public async get(@Param('id') id: string) {
    return await this.service.get(id);
  }

  @Post()
  public async create(@Body() data: AddNewsData) {
    return await this.service.add(data);
  }

  @Put()
  public async edit(@Body() data: EditNewsData) {
    return await this.service.edit(data);
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    await this.service.remove(id);
  }
}

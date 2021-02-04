import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsRepository } from './news.repository';
import { NewsMapper } from './news';

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [NewsRepository, NewsService, NewsMapper],
})
export class NewsModule {}

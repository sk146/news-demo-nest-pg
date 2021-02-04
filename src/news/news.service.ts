import { Injectable } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { News, NewsId } from './news';
import { NewsRepository } from './news.repository';
import { Tag } from './tag';

export class AddNewsData {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  tags: string[];
}

export class EditNewsData extends AddNewsData {
  @IsNotEmpty()
  id: string;
}

@Injectable()
export class NewsService {
  constructor(private readonly news: NewsRepository) {}
  public async add(data: AddNewsData) {
    const tags = data.tags.map((tag) => new Tag(tag));
    const news = new News(
      NewsId.next(),
      data.title,
      data.description,
      tags,
      new Date(),
    );
    return await this.news.add(news);
  }

  public async edit(data: EditNewsData) {
    const tags = data.tags.map((tag) => new Tag(tag));
    const news = new News(
      new NewsId(data.id),
      data.title,
      data.description,
      tags,
      new Date(),
    );
    return await this.news.edit(news);
  }

  public async list() {
    return await this.news.list();
  }

  public async get(id: string) {
    return await this.news.get(id);
  }

  public async remove(id: string) {
    await this.news.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { News, NewsId } from './news';
import { NewsRepository } from './news.repository';

export class AddNewsData {
  title: string;
  description: string;
}

export class EditNewsData extends AddNewsData {
  id: string;
}

@Injectable()
export class NewsService {
  constructor(private readonly news: NewsRepository) {}
  public async add(data: AddNewsData) {
    const news = new News(
      NewsId.next(),
      data.title,
      data.description,
      new Date(),
    );
    return await this.news.add(news);
  }

  public async edit(data: EditNewsData) {
    const news = new News(
      new NewsId(data.id),
      data.title,
      data.description,
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

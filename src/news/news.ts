import { v4 as UUID } from 'uuid';
import { Tag } from './tag';

export class News {
  constructor(
    public readonly id: NewsId,
    public readonly title: string,
    public readonly description: string,
    public readonly tags: Tag[],
    public readonly date: Date,
  ) {}
}

export class NewsId {
  constructor(public readonly id: string) {}
  static next(): NewsId {
    return new NewsId(UUID());
  }
  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return this.id;
    }
  }
}

export class NewsMapper {
  toArray(news: News): any[] {
    return [
      String(news.id),
      news.title,
      news.description,
      JSON.stringify(news.tags),
      news.date,
    ];
  }

  toInstance(row: any): News {
    return new News(
      new NewsId(row['id']),
      row['title'],
      row['description'],
      row['tags'],
      row['date'],
    );
  }
}

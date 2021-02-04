import { Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { News, NewsMapper } from './news';

export class NewsRepository {
  constructor(
    @Inject('PgClient') private readonly connect: Pool,
    private readonly mapper: NewsMapper,
  ) {}

  public async add(news: News) {
    const sql = `INSERT INTO public.news (id, title, description, date) VALUES ($1, $2, $3, $4) returning *`;
    const res = await this.connect.query(sql, this.mapper.toArray(news));
    return this.mapper.toInstance(res.rows[0]);
  }

  public async edit(news: News) {
    const sql = `UPDATE news SET title = $2, description = $3, date = $4 WHERE id = $1 returning *`;
    const res = await this.connect.query(sql, this.mapper.toArray(news));
    return this.mapper.toInstance(res.rows[0]);
  }

  public async list() {
    const sql = `SELECT * FROM news`;
    const res = await this.connect.query(sql);
    return res.rows.map(this.mapper.toInstance);
  }

  public async get(id: string) {
    const sql = `SELECT * FROM news WHERE id = $1`;
    const res = await this.connect.query(sql, [id]);
    return this.mapper.toInstance(res.rows[0]);
  }

  public async remove(id: string) {
    const sql = `DELETE FROM news WHERE id = $1`;
    await this.connect.query(sql, [id]);
  }
}

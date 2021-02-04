import { Pool } from 'pg';

export const databaseProviders = [
  {
    provide: 'PgClient',
    useFactory: async () => {
      const pool = new Pool({
        user: 'app',
        host: 'localhost',
        database: 'news',
        password: '12345',
        port: 54321,
      });
      return pool;
    },
  },
];

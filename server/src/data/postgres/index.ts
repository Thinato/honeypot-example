import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class PostgresDB  {
  client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.DB_PRODUCTION_URI,
    });

    this.client.connect();
  }

  async query(query: string, values: any[] = []) {
    const { rows } = await this.client.query(query, values);

    console.log('rows', rows);

    return rows;
  }
}

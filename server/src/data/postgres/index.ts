import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { IPostgresDB } from './interface';

@Injectable()
export class PostgresDB implements IPostgresDB {
  client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.POSTGRES_URI,
    });

    this.client.connect();
  }

  async query(query: string, values: any[] = []) {
    const { rows } = await this.client.query(query, values);

    console.log('rows', rows);

    return rows;
  }
}

import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { IHoneypotDB } from './interface';

@Injectable()
export class HoneypotDB implements IHoneypotDB {
  client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.POSTGRES_URI,
    });

    this.client.connect();
  }

  async query(query: string, values: any[] = []) {
    const { rows } = await this.client.query(query, values);

    return rows;
  }
}

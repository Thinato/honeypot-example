import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class HoneypotDB {
  client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.DB_HONEYPOT_URI,
    });

    this.client.connect();
  }

  async query(query: string, values: any[] = []) {
    const { rows } = await this.client.query(query, values);

    return rows;
  }
}

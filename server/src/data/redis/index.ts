import Redis from 'ioredis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisDB {
  client: Redis;

  constructor() {
    this.client = new Redis();
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string): Promise<string> {
    return this.client.set(key, value);
  }
}

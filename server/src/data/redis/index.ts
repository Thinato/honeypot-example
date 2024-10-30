import Redis from 'redis';
import { IRedisDB } from './interface';

export class RedisDB implements IRedisDB {
  client: Redis.RedisClientType;

  constructor() {
    this.client = Redis.createClient();
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string): Promise<string> {
    return this.client.set(key, value);
  }
}

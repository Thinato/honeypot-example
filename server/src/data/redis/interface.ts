export interface IRedisDB {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<string>;
}

export const IRedisDB = Symbol('IRedisDB');

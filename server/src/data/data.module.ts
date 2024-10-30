import { Module } from '@nestjs/common';
import { RedisDB } from './redis';
import { IRedisDB } from './redis/interface';
import { IPostgresDB } from './postgres/interface';
import { PostgresDB } from './postgres';
import { IHoneypotDB } from './honeypot/interface';
import { HoneypotDB } from './honeypot';

@Module({
  providers: [
    {
      provide: IRedisDB,
      useClass: RedisDB,
    },
    {
      provide: IPostgresDB,
      useClass: PostgresDB,
    },
    {
      provide: IHoneypotDB,
      useClass: HoneypotDB,
    },
  ],
})
export class DataModule {}

import { Module } from '@nestjs/common';
import { RedisDB } from './redis';
import { PostgresDB } from './postgres';
import { HoneypotDB } from './honeypot';

@Module({
  exports: [RedisDB, PostgresDB, HoneypotDB],
  providers: [RedisDB, PostgresDB, HoneypotDB],
})
export class DataModule {}

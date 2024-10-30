import { Module } from '@nestjs/common';
import { PersonController } from './controller';
import { PersonService } from './service';

@Module({
  controllers: [PersonController],
  imports: [],
  providers: [PersonService],
})
export class PersonModule {}

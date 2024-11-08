import { Module } from '@nestjs/common';
import { PersonController } from './controller';
import { PersonService } from './service';
import { PersonRepository } from './repository';
import { DataModule } from '../data/data.module';

@Module({
  controllers: [PersonController],
  imports: [DataModule],
  providers: [PersonService, PersonRepository],
})
export class PersonModule {}

import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entity';
import { PersonRepository } from './repository';
import { RedisDB } from '../data/redis';
import { PersonResult } from './result';

@Injectable()
export class PersonService {
  constructor(
    private readonly repository: PersonRepository,
    private readonly cache: RedisDB,
  ) {}

  async findPerson(ip: string, doc: string): Promise<PersonResult> {
    const requestAmount = await this.cache.get(ip);
    let result: PersonEntity;

    if (requestAmount) {
      if (parseInt(requestAmount) >= 10) {
        result = await this.repository.getPersonByDocument(doc, true);
        return PersonResult.ok(result);
      } else {
        await this.cache.set(ip, (parseInt(requestAmount) + 1).toString());
      }
    } else {
      await this.cache.set(ip, '1');
    }

    result = await this.repository.getPersonByDocument(doc, false);

    if (!result) {
      return PersonResult.error(['Person not found']);
    }
    return PersonResult.ok(result);
  }
}

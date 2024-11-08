import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entity';
import { DataStatements } from '../data/statements';
import { PostgresDB } from '../data/postgres';
import { HoneypotDB } from '../data/honeypot';

@Injectable()
export class PersonRepository {
  constructor(
    private readonly db: PostgresDB,
    private readonly honeypot: HoneypotDB,
  ) {}

  async getPersonByDocument(
    document: string,
    useHoneypot: boolean,
  ): Promise<PersonEntity> {
    let personData: any;

    if (useHoneypot) {
      personData = await this.honeypot.query(
        DataStatements.GET_PERSON_BY_DOCUMENT,
        [document],
      );
    } else {
      personData = await this.db.query(DataStatements.GET_PERSON_BY_DOCUMENT, [
        document,
      ]);
    }

    if (personData.length > 0) return this.buildPersonEntity(personData[0]);
    else return null
  }

  buildPersonEntity(data: any): PersonEntity {
    return PersonEntity.create(data);
  }
}

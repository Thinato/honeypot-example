import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entity';
import { IPostgresDB } from '../data/postgres/interface';
import { IHoneypotDB } from '../data/honeypot/interface';
import { DataStatements } from '../data/statements';

@Injectable()
export class PersonRepository {
  constructor(
    private readonly db: IPostgresDB,
    private readonly honeypot: IHoneypotDB,
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

    console.log('personData', personData);

    return this.buildPersonEntity(personData);
  }

  buildPersonEntity(data: any): PersonEntity {
    return PersonEntity.create(data);
  }
}

import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entity';
import { IPersonRepository } from '../Repository/Person/interface';

@Injectable()
export class PersonService {
  constructor(private readonly repository: IPersonRepository) {}

  async findPerson(doc: string): Promise<PersonEntity> {
    return {} as any;
  }
}

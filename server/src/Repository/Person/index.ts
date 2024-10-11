import { Injectable } from '@nestjs/common';
import { IPersonRepository } from './interface';

@Injectable()
export class PersonRepository implements IPersonRepository {
  constructor(private readonly db: any) {}

  async getPersonByDocument(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

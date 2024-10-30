export class PersonEntity {
  name: string;
  document: string;
  birth_date: Date;
  gender: string;

  relations: any[];

  constructor() {}

  static create(data: any): PersonEntity {
    if (typeof data !== 'object') throw new Error('Invalid data type');

    const keys = Object.keys(data);

    if (!keys.includes('document') && !keys.includes('name'))
      throw new Error('Invalid data');

    return {
      document: data.document,
      name: data.name,
      birth_date: data.birth_date,
      gender: data.gender,
      relations: data.relations || [],
    };
  }
}

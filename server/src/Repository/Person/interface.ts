export interface IPersonRepository {
  getPersonByDocument(document: string): Promise<any>;
}

export const IPersonRepository = Symbol('IPersonRepository');

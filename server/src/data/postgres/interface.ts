export interface IPostgresDB {
  query(query: string, values: any[]): Promise<any[]>;
}

export const IPostgresDB = Symbol('IPostgresDB');

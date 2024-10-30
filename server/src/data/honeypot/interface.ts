export interface IHoneypotDB {
  query(query: string, values: any[]): Promise<any[]>;
}

export const IHoneypotDB = Symbol('IHoneypotDB');

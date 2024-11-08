import { PersonEntity } from './entity';

export class PersonResult {
  static ok(data: PersonEntity) {
    return {
      success: true,
      errors: [],
      data,
    };
  }

  static error(errors: string[]) {
    return {
      success: false,
      errors,
      data: null,
    };
  }
}

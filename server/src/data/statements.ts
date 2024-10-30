export enum DataStatements {
  GET_PERSON_BY_DOCUMENT = 'SELECT * FROM person WHERE document = $1',
  GET_PERSON_RELATIONS = 'SELECT * FROM person_relations WHERE person_document = $1',
}

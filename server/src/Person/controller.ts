import { Controller, Get, Ip, Param, Request } from '@nestjs/common';
import { PersonService } from './service';
import { PersonEntity } from './entity';

@Controller()
export class PersonController {
  constructor(private readonly service: PersonService) {}

  @Get('/:document')
  getPersonInfo(
    @Ip() ip: string,
    @Request() req: any,
    @Param('document') document: string,
  ): Promise<PersonEntity> {
    console.log('IP:', ip);
    console.log('Document:', document);
    return this.service.findPerson(document);
  }
}

import { Controller, Get, Ip, Param, Request } from '@nestjs/common';
import { PersonService } from './service';
import { PersonResult } from './result';

@Controller()
export class PersonController {
  constructor(private readonly service: PersonService) {}

  @Get('/person/:document')
  async getPersonInfo(
    @Ip() ip: string,
    @Request() req: any,
    @Param('document') document: string,
  ): Promise<PersonResult> {
    console.log('IP:', ip);
    console.log('Document:', document);
    return await this.service.findPerson(ip, document);
  }
}

import { Controller, Get, Ip, Param, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/:document')
  // getPersonInfo(
  //   @Ip() ip: string,
  //   @Request() req: any,
  //   @Param('document') document: string,
  // ): string {
  //   console.log('IP:', ip);
  //   console.log('Document:', document);
  //   return document;
  // }
}

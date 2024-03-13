import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('msg/:msg')
  getMsg(@Param('msg') msg: string) : string {
    return 'Bonjour ' + msg;
  }

  @Get('number/:number')
  getNumber(@Param('number', ParseIntPipe) number: number) : number {
    return number + 10;
  }



}

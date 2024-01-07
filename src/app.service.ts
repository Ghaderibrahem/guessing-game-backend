import { Injectable } from '@nestjs/common';
import { AppGateway } from './app.gateway';
@Injectable()
export class AppService {
  constructor(private appGateway: AppGateway) {}
  getHello(): string {
    return 'Hello World!';
  }
}

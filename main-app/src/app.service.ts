import {  ClientProxyFactory, ClientProxy , Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private client :ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
          options:{
          url:'redis://localhost:6379',
          }
    })
  }
  getHello() {
    return this.client.send<string, string>('getHello', 'hello');
  }
}

import {  ClientProxyFactory, ClientProxy , Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private client :ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
          options:{
            host:'127.0.0.1',
            port:8080
          }
    })
  }
  getHello() {
    return this.client.send<string, string>('getHello', 'hello');
  }
}

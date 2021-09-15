// import { ClientOptions, ClientProxyFactory, MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { Logger} from '@nestjs/common';

// const logger = new Logger('main');

// const microserviceOptions:ClientOptions = {
//     transport: Transport.TCP,
//     options:{
//       host:'127.0.0.1',
//       port:8080
//     }
//    }

// const client = ClientProxyFactory.create(microserviceOptions);

// client.send<string, string>('getHello', 'hello').subscribe(result => logger.log("this is result: "+result));

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);

}
bootstrap();
import { otelSDK } from 'tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await otelSDK.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NEST_API1_SERV_PORT)
  .then(() => {
    console.log(`Subiu: http://localhost:${process.env.NEST_API1_SERV_PORT}`);
  })
  .catch(err => {
    console.error('Erro:', err);
  });
}
bootstrap();

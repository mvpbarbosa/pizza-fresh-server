import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
  .setTitle('PizzaFresh')
  .setDescription('Aplicação para gestão das mesas de uma pizzaria')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('auth')
  .addTag('table')
  .addTag('product')
  .addTag('user')
  .addTag('order')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();

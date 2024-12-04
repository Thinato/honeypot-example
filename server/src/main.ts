import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Replace with your frontend's URL
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    // credentials: true, // Allow cookies if needed
  });

  await app.listen(process.env.PORT || 3000);
  console.log(process.env.PORT);
}
bootstrap();

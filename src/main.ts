import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Store from 'connect-redis';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import { redis } from './utils/redis';

dotenv.config()

async function bootstrap() {
  const RedisStore = Store(session);
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(session({
    store: new RedisStore({client: redis}),
    name: 'votingapp',
    secret: '994ikk34k3k42kkk3kk3k3k',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 1000 * 60 * 60 * 24 
    }
  }));

  await app.listen(3000);
}
bootstrap();

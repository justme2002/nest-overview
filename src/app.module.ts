import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddlewareMiddleware } from './middlewares/logger-middleware/logger-middleware.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './models/User';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "huy.hoang",
    password: "huy2002109",
    database: "user",
    entities: [Account],
    synchronize: true,
    logging: true,
    autoLoadEntities: true
  }), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddlewareMiddleware).forRoutes(CatController)
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log(req.body)
    next();
  }
}

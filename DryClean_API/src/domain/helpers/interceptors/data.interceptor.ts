/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next.handle().pipe(
      map((data) => {
        return {
          ...instanceToPlain(data),
        };
      }),
    );
  }
}
// return next.handle().pipe(
//   map((data) => {
//     return {
//       data: instanceToPlain(data),
//     };
//   }),
// );

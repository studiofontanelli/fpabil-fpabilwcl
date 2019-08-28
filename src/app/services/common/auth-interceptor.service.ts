import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

import { NGXLogger } from 'ngx-logger';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler){
    //this.log.debug('Request is on the way...');
    const modReq = req.clone(
      {
        headers: req.headers.append("auth", "minimmi")
      }
    );

    //return next.handle(modReq);
    return next.handle(req);
  }

  constructor(private log: NGXLogger) { 


  }
}

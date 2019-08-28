import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

import { NGXLogger } from 'ngx-logger';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptorService implements HttpInterceptor {

  constructor(private log: NGXLogger) { 


  }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    this.log.info('Outgoing request');
    this.log.info('url: ' + req.url);
    return next.handle(req).pipe(
        tap ( event => {
          if(event.type == HttpEventType.Response){
            this.log.info('Incoming response');
            this.log.info('body: ' + JSON.stringify(event.body));
            
          }  
        }

        )
    );
  }

}

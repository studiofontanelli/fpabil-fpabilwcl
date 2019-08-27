import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

import {Provincia} from 'src/app/models/common/provincia.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {

  constructor(private log: NGXLogger, private http:HttpClient) {


   }

   public getProvince(){

    this.log.debug('getting province....');
    return this.http.get< {Provincia} >(environment.fpabilblEndpoint + 'anagrafiche/province')
    .pipe( 
      map( responseData => { 
        this.log.debug('responseData= ' + JSON.stringify(responseData));
        const postsArray: Provincia[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
          this.log.debug('key= ' + key);
          postsArray.push(responseData[key]);

        }
      }
      return postsArray;
      }));
    

        

      
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

import {Provincia} from 'src/app/models/common/provincia.model';
import {Comune} from 'src/app/models/common/comune.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {

  error = new Subject<string>();

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

  public getComuniByProvincia(siglaProvincia: string){

    this.log.debug('getComuniByProvincia ' + siglaProvincia);


    let searchParams = new HttpParams();
    searchParams = searchParams.append('codprovincia', siglaProvincia);
    

    return this.http.get<{Comune}>(
      environment.fpabilblEndpoint + 'anagrafiche/comuni/byprovincia',
    {
      params: searchParams,
      observe: 'response'
    }
    )
    .pipe( 
      map( responseData => { 
        this.log.debug('responseData elenco comuni ' + JSON.stringify(responseData));
        const postsArray: Comune[] = [];
        for(const key in responseData.body){
          /*
          if(responseData.hasOwnProperty(key)){
            this.log.debug('key= ' + key);
            postsArray.push(responseData.body[key]);
          }
          */
         postsArray.push(responseData.body[key]);
      }
      return postsArray;
      }));
  }

}

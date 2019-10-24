import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { Richiedente } from '../models/richiedente/richiedente.model';


@Injectable({
  providedIn: 'root'
})
export class FpabilService {

  constructor(private log: NGXLogger, private http:HttpClient) {


  }

  onSave(richiedente: Richiedente){
    this.log.debug("FpabilService: onSave.....");

  }

}

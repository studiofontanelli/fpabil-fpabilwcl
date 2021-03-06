import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {map} from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

import { environment } from 'src/environments/environment';


import {Provincia} from 'src/app/models/common/provincia.model';
import {Comune} from 'src/app/models/common/comune.model';
import { AnagraficaService } from './services/common/anagrafica.service';
import { Richiedente } from './models/richiedente/richiedente.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fpabil-fpabilwcl';

  richiedenteSelected: Richiedente = new Richiedente();
  
  elencoProvince: Provincia [] = [];
  elencoComuni: Comune [] = [];
  isLoading = false;
  error = null;
  


  constructor(private http: HttpClient, private log: NGXLogger, private anagraficaService: AnagraficaService) { 
    this.log.debug('APP COMPONENT....' +  environment.fpabilblEndpoint);
     
    let obs =  this.http.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe((response) => 
        console.debug('RESPONSE ' + response)
    );

    
    
    //this.getProvince();
  }

  ngOnInit() {
   
    this.onFetchProvince();
    this.onFetchComuniByProvincia();
    this.log.debug('AppComponent:ngOnInit done');
  }

onFetchProvince(){
  this.isLoading = true; 
  this.anagraficaService.getProvince().subscribe( province =>{
     this.isLoading = false; 
     this.elencoProvince = province;
     this.log.debug('elencoProvince= ' + JSON.stringify(this.elencoProvince));
  }, error => {
    this.isLoading = false; 
    this.log.error('Si è verificato un errore: ' + error.message);
    this.error = error.message;
    this.log.error('Error message: ' + this.error);
  });

}

onFetchComuniByProvincia(){
  const prov = '001';
  this.anagraficaService.getComuniByProvincia(prov).subscribe( result =>{
     
     this.elencoComuni = result;
     this.log.debug('elencoComuni= ' + JSON.stringify(this.elencoComuni));
  }, error => {
    this.isLoading = false; 
    this.log.error('Si è verificato un errore: ' + error.message);
    this.error = error.message;
    this.log.error('Error message: ' + this.error);
  });

}


  


}

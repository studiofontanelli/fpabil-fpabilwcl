import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

import { environment } from 'src/environments/environment';


import {Provincia} from 'src/app/models/common/provincia.model';
import { AnagraficaService } from './services/common/anagrafica.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fpabil-fpabilwcl';

  elencoProvince: Provincia [] = [];
  isLoading = false;

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
    this.log.debug('AppComponent:ngOnInit done');
  }

onFetchProvince(){
  this.isLoading = true; 
  this.anagraficaService.getProvince().subscribe( province =>{
     this.isLoading = false; 
     this.log.debug('province= ' + JSON.stringify(province));
     this.elencoProvince = province;
     this.log.debug('elencoProvince= ' + JSON.stringify(this.elencoProvince));
  });

}


  


}

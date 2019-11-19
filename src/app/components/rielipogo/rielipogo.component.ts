import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FpabilService } from 'src/app/services/fpabil.service';
import { Richiedente } from 'src/app/models/richiedente/richiedente.model';
import { Operatore } from 'src/app/models/operatore/operatore.model';
import { Persona } from 'src/app/models/persona/persona.model';
import { SalvaRichiestaRequest } from 'src/app/models/salva-richiesta-request.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-rielipogo',
  templateUrl: './rielipogo.component.html',
  styleUrls: ['./rielipogo.component.css']
})
export class RielipogoComponent implements OnInit {


   richiedente: Richiedente;
   operatore: Operatore;
   elencoPersona: Persona[];
   
  constructor(private log: NGXLogger, private anagraficaService: AnagraficaService, 
              private dataService: DataService,  private router: Router, private fpabilService: FpabilService) { 
    
    //this.getAllProvince();
  }

  ngOnInit() {
    
    this.operatore = this.dataService.operatore;
  }


  onSave() {
    
    this.log.debug("RielipogoComponent: onSave: operatore....." + JSON.stringify(this.operatore));
   
    /*
    this.salvaRichiestaRequest.richiedente = this.dataService.richiedente;
    this.salvaRichiestaRequest.elencoPersona = this.dataService.elencoPersona;
    this.salvaRichiestaRequest.operatore = this.dataService.operatore;
    */

    /*
    this.salvaRichiestaRequest.operatore = this.operatore;
    this.salvaRichiestaRequest.richiedente = this.richiedente;
    this.salvaRichiestaRequest.elencoPersona = this.elencoPersona;
    */
    this.fpabilService.onSaveRichiesta(this.dataService.operatore, 
        this.dataService.richiedente, this.dataService.elencoPersona);
    


  }

}

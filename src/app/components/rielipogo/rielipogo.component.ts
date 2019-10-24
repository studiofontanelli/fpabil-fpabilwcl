import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FpabilService } from 'src/app/services/fpabil.service';
import { Richiedente } from 'src/app/models/richiedente/richiedente.model';

@Component({
  selector: 'app-rielipogo',
  templateUrl: './rielipogo.component.html',
  styleUrls: ['./rielipogo.component.css']
})
export class RielipogoComponent implements OnInit {


  richiedente: Richiedente

  constructor(private log: NGXLogger, private anagraficaService: AnagraficaService, 
              private dataService: DataService,  private router: Router, private fpabilService: FpabilService) { 
    
    //this.getAllProvince();
  }

  ngOnInit() {
  }


  onSave() {
    this.log.debug("RielipogoComponent: onSave: saving data.....");
    this.richiedente = this.dataService.richiedente;
    this.fpabilService.onSave(this.richiedente);
    


  }

}

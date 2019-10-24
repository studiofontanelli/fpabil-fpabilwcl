import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NGXLogger } from 'ngx-logger';
import { Operatore } from 'src/app/models/operatore/operatore.model';
import { utils } from 'protractor';

@Component({
  selector: 'app-operatore-edit',
  templateUrl: './operatore-edit.component.html',
  styleUrls: ['./operatore-edit.component.css']
})
export class OperatoreEditComponent implements OnInit {


  @Input() operatore: Operatore= new Operatore();

  constructor(private log: NGXLogger, private router: Router, private dataService: DataService) {

   }

  ngOnInit() {
    this.log.debug('OperatoreEditComponent - ngOnInit: RICHIEDENTE=' + this.dataService.richiedente.nome);
    if(this.dataService.operatore)
     this.operatore = this.dataService.operatore;

  }

  onBack(){
    this.router.navigate(['/richiedente']);

  }

  onNext(){

    this.dataService.operatore = this.operatore;

    this.log.debug("this.dataService.elencoPersona= " + this.dataService.elencoPersona);
    if(this.dataService.elencoPersona == undefined || this.dataService.elencoPersona.length == 0){
      this.log.debug("OperatoreEditComponent: ANCORA NESSUNA PERSONA AGGIUNTA");
      this.router.navigate(['/persona/new']);
    }
    else{
      this.log.debug("elencoPersona size= " + this.dataService.elencoPersona.length);
      this.router.navigate(['/persona']);
    }
  }

}

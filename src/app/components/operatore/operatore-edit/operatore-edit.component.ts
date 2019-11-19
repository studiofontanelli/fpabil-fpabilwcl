import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NGXLogger } from 'ngx-logger';
import { Operatore } from 'src/app/models/operatore/operatore.model';
import { utils } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Provincia } from 'src/app/models/common/provincia.model';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';
import { Comune } from 'src/app/models/common/comune.model';
import { StatoEstero } from 'src/app/models/common/stato-estero.model';

@Component({
  selector: 'app-operatore-edit',
  templateUrl: './operatore-edit.component.html',
  styleUrls: ['./operatore-edit.component.css']
})
export class OperatoreEditComponent implements OnInit {

  operatoreForm: FormGroup;
  submitted = false;
  tipoSedeLegaleList =[{"id": "I", "descrizione": "Italia"},{"id": "E", "descrizione": "Estero"}];
  @Input() operatore: Operatore= new Operatore();

  elencoProvince: Provincia [] = [];
  elencoComuni: Comune [] = [];
  elencoStatiEstero: StatoEstero[] = [];

  constructor(private log: NGXLogger, private router: Router, 
    private dataService: DataService, private anagraficaService: AnagraficaService) {

   }

  ngOnInit() {
    this.log.debug('OperatoreEditComponent - ngOnInit: RICHIEDENTE=' + this.dataService.richiedente.nome);
    this.operatore.tipoStatoSedeLegale = "I";
    this.getAllStatiEstero();

    this.operatoreForm = new FormGroup({
      'gruppo': new FormControl(null, Validators.required),
      'codice': new FormControl(null, Validators.required),
      'partitaIva': new FormControl(null, Validators.required),
      'codiceFiscale': new FormControl(null, Validators.required),
      'tipoStatoSedeLegale': new FormControl(null),
      'comuneSedeLegale': new FormControl(null),
      'capSedeLegale': new FormControl(null),
      'indirizzoSedeLegale': new FormControl(null),
      'provinciaSedeLegale': new FormControl(null),
      'cittaEsteraSedeLegale': new FormControl(null),
      'statoEsteroSedeLegale': new FormControl(null),
      'telefono': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required)
    });

    if(this.dataService.operatore)
     this.operatore = this.dataService.operatore;

     this.getAllProvince();

  }

  getAllProvince(){
    this.anagraficaService.getProvince().subscribe( 
      province =>{
        this.elencoProvince = province;
      }
    );
  }
  public getAllStatiEstero(){
    this.anagraficaService.getStatiEstero().subscribe( 
      result =>{
        this.elencoStatiEstero = result;
      }
    );

  }

  getComuniByProvincia(){
    this.anagraficaService.getComuniByProvincia(this.operatore.provinciaSedeLegale).subscribe( 
      elencoComuni =>{
        this.elencoComuni = elencoComuni;
      }
    );
  }

  onChangeTipoSedeLegale(){
    this.submitted = false;
    this.log.debug("onChangeTipoSedeLegale");
  }

  onChangeProvincia(){
    this.log.debug("onChangeProvincia");
    this.getComuniByProvincia();
  }

  onBack(){
    this.router.navigate(['/richiedente']);

  }

  onNext(){
    this.submitted = true;
    console.log(this.operatoreForm);
    this.log.debug("GRUPPO= " + this.operatore.gruppo);
    this.log.debug("CODICE= " + this.operatore.codice);

    
    if(this.operatoreForm.invalid){
      this.log.error("FORM IS INVALID");
      return;  
    }
    
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

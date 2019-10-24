import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Provincia } from 'src/app/models/common/provincia.model';
import { NGXLogger } from 'ngx-logger';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';
import { Router } from '@angular/router';
import { Richiedente } from 'src/app/models/richiedente/richiedente.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-richiedente-edit',
  templateUrl: './richiedente-edit.component.html',
  styleUrls: ['./richiedente-edit.component.css']
})
export class RichiedenteEditComponent implements OnInit {
  
  richiedenteForm: FormGroup;
  submitted = false;

  
  @Input() richiedente: Richiedente= new Richiedente();
  elencoProvince: Provincia [] = [];

  isLoading = false;
  error = null;
  
  constructor(private formBuilder: FormBuilder, 
              private log: NGXLogger, private anagraficaService: AnagraficaService, private dataService: DataService,  
              private router: Router) { 
    
    //this.getAllProvince();
  }

  ngOnInit() {

  this.richiedenteForm = new FormGroup({
    'nome': new FormControl(null, Validators.required),
    'cognome': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'telefono': new FormControl(null, [Validators.required])
  });

    this.getAllProvince();
    //  this.log.debug('RichiedenteEditComponent - ngOnInit: RICHIEDENTE=' + this.dataService.richiedente);
    if( this.dataService.richiedente){
      this.richiedente = this.dataService.richiedente;
    }
   
  }


  private getAllProvince(){
    //this.isLoading = true; 
    this.log.debug('RichiedenteEditComponent - getAllProvince: GETTING PROVINCE');
    this.anagraficaService.getProvince().subscribe( province =>{
       this.elencoProvince = province;
       //this.log.debug('elencoProvince= ' + JSON.stringify(this.elencoProvince));
    }, error => {
      //this.isLoading = false; 
      this.log.error('Si è verificato un errore: ' + error.message);
      this.error = error.message;
      this.log.error('Error message: ' + this.error);
    });
  
  }

  onNext(){

    this.submitted = true;
    console.log(this.richiedenteForm);
    if(this.richiedenteForm.invalid){
      this.log.info("FORM IS INVALID");
      return;  
    }
    //this.richiedente.nome = this.richiedenteForm.controls.nome.value;
    //this.log.info('nome richiedente: ' + this.richiedente.nome);
    this.dataService.richiedente = this.richiedente;
    this.router.navigate(['/operatore']);

  }

}

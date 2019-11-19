import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Provincia } from 'src/app/models/common/provincia.model';
import { NGXLogger } from 'ngx-logger';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';
import { Router } from '@angular/router';
import { Richiedente } from 'src/app/models/richiedente/richiedente.model';
import { DataService } from 'src/app/services/data.service';
import { Comune } from 'src/app/models/common/comune.model';
import { StatoEstero } from 'src/app/models/common/stato-estero.model';
import { FpabilService } from 'src/app/services/fpabil.service';
import { TestRequest } from 'src/app/models/test-request.model';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-richiedente-edit',
  templateUrl: './richiedente-edit.component.html',
  styleUrls: ['./richiedente-edit.component.css']
})
export class RichiedenteEditComponent implements OnInit {
  
  richiedenteForm: FormGroup;
  submitted = false;
  tipoStatoNascitaList = 
                    [
                        {"id": "I", "descrizione": "Italia"},
                        {"id": "E", "descrizione": "Estero"}
                      ]
                    


  
  @Input() richiedente: Richiedente= new Richiedente();
  elencoProvince: Provincia [] = [];
  elencoComuni: Comune [] = [];
  elencoStatiEstero: StatoEstero[] = [];

  isLoading = false;
  error = null;
  
  constructor(private formBuilder: FormBuilder, 
              private log: NGXLogger, 
              private anagraficaService: AnagraficaService, private dataService: DataService,  private fpabilService: FpabilService,
              private router: Router, private http:HttpClient, private spinner: NgxSpinnerService) { 
    
    //this.getAllProvince();
  }

  ngOnInit() {

    this.spinner.show();
    this.richiedente.tipoStatoNascita = "I";

    this.richiedenteForm = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'cognome': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'telefono': new FormControl(null, [Validators.required]),
      'dataNascita': new FormControl(null, [Validators.required]),
      'tipoStatoNascita': new FormControl(null, [Validators.required]),
      'comuneNascita': new FormControl(null),
      'provinciaNascita': new FormControl(null),
      'cittaEsteraNascita': new FormControl(null),
      'statoEsteroNascita': new FormControl(null)
    });

    this.getAllProvince();
    //  this.log.debug('RichiedenteEditComponent - ngOnInit: RICHIEDENTE=' + this.dataService.richiedente);
    
    if( this.dataService.richiedente){
      this.richiedente = this.dataService.richiedente;
      if(this.richiedente.provinciaNascita != null){
        this.getComuniByProvincia();
      }
    }

    this.getAllStatiEstero();

    /*
    setTimeout(() => {
      this.spinner.hide();
      }, 5000);
    */

    this.spinner.hide();
  }

  private getAllStatiEstero(){
    
    this.log.debug("RichiedenteEditComponent - getAllStatiEstero:");
    //this.elencoStatiEstero =  this.anagraficaService.getStatiEstero();
   this.anagraficaService.getStatiEstero().subscribe( 
      result => {
        this.elencoStatiEstero = result;
      });
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

  private getComuniByProvincia(){
    this.log.debug('RichiedenteEditComponent - getComuniByProvincia: GETTING COMUNI BY PROVINCIA');
    this.anagraficaService.getComuniByProvincia(this.richiedente.provinciaNascita).subscribe( 
      elencoComini =>{
      this.elencoComuni = elencoComini;
      //this.log.debug('elencoProvince= ' + JSON.stringify(this.elencoProvince));
   }, error => {
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

  onChangeTipoStatoNascita(){
    //this.log.debug("onChangeTipoStatoNascita=" + this.richiedenteForm.controls.tipoStatoNascita.value);

    this.log.debug('tipoStatoNascita= ' + this.richiedente.tipoStatoNascita);
    
    
    const postData: TestRequest = {
      "param": "CIAO A TUTTI"
    };
    
    this.fpabilService.testPost("postData").subscribe(
      data =>{
        this.log.debug("data=" + data);

      }

    );


    this.fpabilService.testSaveRichiesta();

    

    /*
   var url: string =  "http://127.0.0.1:8080/fpabilbl/rest/richiesta/testPost";


   this.log.debug('url= ' + url);

   const body: TestRequest = new TestRequest("CIAO");
   this.http.post<any>(url,body).subscribe(


   ); 
   */

    /*
    this.subscribers.conferma = this.inserisciAccreditamentoService.confermaInserimentoAccreditamento(this.operatoreServiziModel).subscribe(
            data => {
                this.userService.getProfilatura();
                this.inserisciAccreditamentoService.clean();
                this.router.navigate([RoutingAccreditamento.ACCREDITAMENTO_INSERIMENTO_SUCCESS], { queryParams: { message: MessageAccreditamentoSuccess.inserimento }, skipLocationChange: true });
            },
            err => {
                if (err instanceof ExceptionVO && err.status == '200') {
                    this.messageError = err.message;
                }
                else
                    this.messageError = MessageRestError.INPUTERROR;

                this.loaderPrincipale = false;
                this.showMessageError = true;
            });

*/


  }

  onChangeProvincia(){

    this.spinner.show();
    //this.log.debug("onChangeTipoStatoNascita=" + this.richiedenteForm.controls.tipoStatoNascita.value);

    this.getComuniByProvincia();

    this.spinner.hide();

    


  }

  

}

import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona.model';
import { TipoDocumento } from 'src/app/models/common/tipo-documento.model';
import { NGXLogger } from 'ngx-logger';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnagraficaService } from 'src/app/services/common/anagrafica.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  
  tipoDocumentoList: TipoDocumento[] = [];
  personaForm: FormGroup;
  submitted = false;
  
  @Input() persona: Persona= new Persona();

  tipoRischiestaList = 
    [
      {"id": "A", "descrizione": "Abilitare"},
      {"id": "D", "descrizione": "Disabilitare"}
    ]
    
  yesNoList = 
    [
      {"id": "Y", "descrizione": "Si"},
      {"id": "N", "descrizione": "No"}
    ]  

  constructor(private log: NGXLogger, private router: Router, private route: ActivatedRoute,  
      private dataService: DataService, private anagraficaService: AnagraficaService) {
    this.route.params.subscribe(
      (params) =>{
        log.debug("PersonaEditComponent: id= " + params.id);
        if(params.id != undefined){
          this.persona = this.dataService.getPersona(+params.id);
          log.debug("PersonaEditComponent: persona= " + this.persona);
        }
      }
    )

    this.getTipiDocumento();
  }

  ngOnInit() {

    this.persona.tipoRichiesta = "A";

    this.personaForm = new FormGroup({
      'id': new FormControl(null),
      'nome': new FormControl(null, Validators.required),
      'cognome': new FormControl(null, Validators.required),
      'dataNascita': new FormControl(null, Validators.required),
      'codiceFiscale': new FormControl(null, Validators.required),
      'telefono': new FormControl(null, Validators.required),
      'tipoRichiesta': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'tipoDocumento': new FormControl(null),
      'numeroDocumento': new FormControl(null),
      'dataRilascioDocumento': new FormControl(null),
      'richiestaCertificatoDigitale': new FormControl(null)
      
    });
  }
  
  private getTipiDocumento(){
    this.anagraficaService.getTipiDocumento().subscribe( 
      result =>{
        this.tipoDocumentoList = result;
      }
    );
  }

  onChangeTipoRichiesta(){
    this.log.debug("onChangeTipoRichiesta= "+ this.persona.tipoRichiesta);
  }

  onSave(){
    //this.persona.cognome = "CACACE";
    //this.persona.id =  this.dataService.elencoPersona.length + 1;
    this.dataService.savePersona(this.persona);
    this.router.navigate(['/persona']);
    
  }

  onAnnulla(){
    this.router.navigate(['/persona']);
    
  }

}

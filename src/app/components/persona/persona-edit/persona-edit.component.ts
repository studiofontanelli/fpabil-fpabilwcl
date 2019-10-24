import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona.model';
import { NGXLogger } from 'ngx-logger';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  @Input() persona: Persona= new Persona();

  constructor(private log: NGXLogger, private router: Router, private route: ActivatedRoute,  private dataService: DataService) {
    this.route.params.subscribe(
      (params) =>{
        log.debug("PersonaEditComponent: id= " + params.id);
        if(params.id != undefined){
          this.persona = this.dataService.getPersona(+params.id);
          log.debug("PersonaEditComponent: persona= " + this.persona);
        }

      }

    )
  }

  ngOnInit() {
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

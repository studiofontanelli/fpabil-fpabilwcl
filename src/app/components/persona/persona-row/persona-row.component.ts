import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona.model';
import { NGXLogger } from 'ngx-logger';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'tr[app-persona-row]',
  templateUrl: './persona-row.component.html',
  styleUrls: ['./persona-row.component.css']
})
export class PersonaRowComponent implements OnInit {

  @Input('persona-data') persona: Persona;
  //@Output('onSelectPersona') onSelectPersona = new EventEmitter();
  @Output('onDeletePersona') onDeletePersona = new EventEmitter();

  constructor(private log: NGXLogger, private router: Router, private route: ActivatedRoute,  private dataService: DataService) {
    
  }

  ngOnInit() {
  }


  updatePersona() {
    this.log.debug("updatePersona...." + this.persona.id);
    this.router.navigate(['persona', this.persona.id, 'edit']);
    //this.onSelectPersona.emit(this.persona);

  }

  deletePersona() {
    this.log.debug("PersonaRowComponent: deletePersona...." + this.persona.id);
    this.onDeletePersona.emit(this.persona);

  }

}

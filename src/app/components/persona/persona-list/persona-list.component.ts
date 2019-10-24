import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Persona } from 'src/app/models/persona/persona.model';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  title: string;

  @Output('updatePersona') updatePersona = new EventEmitter<Persona>();


  constructor(private log: NGXLogger, private router: Router, private dataService: DataService) {
    this.title= "Elenco persone associate";

   }

  ngOnInit() {
    this.log.debug("# PERSONE= " + this.dataService.elencoPersona.length);

  }

  onBack(){
    this.router.navigate(['/operatore']);

  }

  onNext(){
    this.router.navigate(['/riepilogo']);

  }

  addPersona(){
    this.router.navigate(['/persona/new']);

  }

  onSelectPersona(persona: Persona) {
    const personaCopy = Object.assign({}, persona);
    this.updatePersona.emit(personaCopy);
    this.router.navigate(["persona", persona.id, "edit"]);
  }

  onDeletePersona(persona: Persona) {
    this.log.debug("PersonaListComponent: onDeletePersona: deleting persona " + persona.id);
    this.dataService.deletePersona(persona);
  }


}

import { Injectable } from '@angular/core';
import { Richiedente } from '../models/richiedente/richiedente.model';
import { Operatore } from '../models/operatore/operatore.model';
import { Persona } from '../models/persona/persona.model';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public richiedente: Richiedente;
  public operatore: Operatore;
  public elencoPersona =  [];
  



  constructor() { 

  }

  getElencoPersone(){
    return this.elencoPersona;
    
  }

  getPersona(id:number): Persona{
    return this.elencoPersona.find(persona => persona.id === id);
    
  }


  deletePersona(persona: Persona) {
    const index = this.elencoPersona.indexOf(persona);
    if (index >= 0) {
      this.elencoPersona.splice(index, 1);
    }
  }
  private updatePersona(persona: Persona) {
    const idx = this.elencoPersona.findIndex((v) => v.id === persona.id);
    alert(idx);
    if (idx !== -1) {
      this.elencoPersona[idx] = persona;
    }
  }

  private createPersona(persona: Persona) {
    persona.id = this.elencoPersona.length + 1;
    this.elencoPersona.splice(0, 0, persona);

  }

  savePersona(persona: Persona) {
    if (persona.id > 0) {
      this.updatePersona(persona);
    } else {
      this.createPersona(persona);
    }
  }

  

}

import { Richiedente } from './richiedente/richiedente.model';
import { Operatore } from './operatore/operatore.model';
import { Persona } from './persona/persona.model';

export class SalvaRichiestaRequest {

    public richiedente:  Richiedente;
    public operatore: Operatore;
    public elencoPersone: Persona[];


    constructor(operatore: Operatore, richiedente: Richiedente, elencoPersone: Persona[]){
        this.operatore = operatore;
        this.richiedente = richiedente;
        this.elencoPersone = elencoPersone;
     }
}

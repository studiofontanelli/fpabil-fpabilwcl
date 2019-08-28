import { Provincia } from './provincia.model';

export class Comune {

    public codice:    string;
    public descrizione: string;
    public provincia: Provincia;
    

    constructor(codice: string, descrizione: string, provincia: Provincia){
        this.codice = codice;
        this.descrizione = descrizione;
        this.provincia = provincia;
    }
}

export class Persona {

    public nome:    string;
    public cognome: string;
    public codiceFiscale: string;
    public dataNascita: Date;

    constructor(nome: string, cognome: string, codiceFiscale: string){
        this.nome = nome;
        this.cognome = cognome;
        this.codiceFiscale = codiceFiscale;
    }
}

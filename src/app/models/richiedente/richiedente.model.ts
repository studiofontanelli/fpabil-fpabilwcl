export class Richiedente {
    
    public nome:    string;
    public cognome: string;
    public dataNascita: Date;
    public natoInItalia: boolean;
    public comuneNascita: string;
    public provinciaNascita: string;
    public statoEsteroNascita: string;
    public cittaEsteraNascita: string;
    telefono: string;
    email: string;
    tipoStatoNascita: string;
    

    /*
    constructor(nome: string, cognome: string){
        this.nome = nome;
        this.cognome = cognome;
    }
    */
    constructor(){
        this.nome = "";
        this.cognome = "";
    }
}
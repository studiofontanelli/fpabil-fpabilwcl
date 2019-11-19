import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { Richiedente } from '../models/richiedente/richiedente.model';
import { Operatore } from '../models/operatore/operatore.model';
import { Persona } from '../models/persona/persona.model';
import { Provincia } from '../models/common/provincia.model';
import { SalvaRichiestaRequest } from '../models/salva-richiesta-request.model';
import { SalvaRichiestaResponse } from '../models/salva-richiesta-response.model';
import { Observable } from 'rxjs';
import { TestRequest } from '../models/test-request.model';
import { GenericResponse } from '../models/generic-response.model';


@Injectable({
  providedIn: 'root'
})
export class FpabilService {

  public testRequest: TestRequest;
  
  constructor(private log: NGXLogger, private http:HttpClient) {

  }


  private handleError(errorResponse: HttpErrorResponse){
    console.error('errorResponse ' + errorResponse);
  }

  testPost(request: string): Observable<GenericResponse> {
    this.log.debug("FpabilService: request= " + request);
    const body: TestRequest = new TestRequest(request);

    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');   
    let options = {
            headers: httpHeaders
        }; 

    //const header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
      };

    var url: string =  environment.fpabilblEndpoint + 'richiesta/testPost';
    this.log.debug("FpabilService: body= " + JSON.stringify(body));
    
    return this.http.post<GenericResponse>(url, JSON.stringify(body), httpOptions); 



  }



  onSaveRichiesta(operatore: Operatore, richiedente: Richiedente, elencoPersone: Persona[]){

    const body = new SalvaRichiestaRequest(operatore, richiedente, elencoPersone)
    var url: string =  environment.fpabilblEndpoint + 'richiesta/save';
    
    this.log.debug("FpabilService: onSave.....body= " + JSON.stringify(body));
    this.log.debug("FpabilService: onSave.....url= " + url);
    this.http.post(url, body ).subscribe(
      
      responseData => {
        console.log(responseData);    
      }); 
      
    

  }

  testSaveRichiesta() {
    this.log.debug("FpabilService: testSaveRichiesta");
    const body: SalvaRichiestaRequest  = {
          "operatore": {
            "codice": "7",
            "gruppo": "B",
            "codiceFiscale": "FNTOP",
            "partitaIva": "XXX",
            "tipoStatoSedeLegale": "I",
            "comuneSedeLegale": "001272",
            "provinciaSedeLegale": "001",
            "indirizzoSedeLegale": "Via Brofferio 8/B",
            "capSedeLegale": "10036",
            "statoEsteroSedeLegale": "string",
            "cittaEsteraSedeLegale": "string",
            "telefono": "011 8988877",
            "telefonoSecondario": "011 8988877",
            "email": "operatore@gmail.com",
            "fax": "xxx"
          },
          "richiedente": {
            "nome": "Andrea",
            "cognome": "Fontanelli",
            "dataNascita": new Date(),
            "natoInItalia": true,
            "comuneNascita": "001272",
            "provinciaNascita": "001",
            "tipoStatoNascita": "I",
            "telefono": "0299888282",
            "statoEsteroNascita": "",
            "cittaEsteraNascita": "",
            "email": "richiedente@gmail.com"
          },
          "elencoPersone": [
            {
              "id": 0,
              "nome": "Cicillo",
              "cognome": "Cacace",
              "dataNascita": new Date(),
              "email": "persona@gmail.com",
              "tipoRichiesta": "A",
              "richiestaCertificatoDigitale": "true",
              "tipoDocumento": "CI",
              "numeroDocumento": "0489797947987423",
              "dataRilascioDocumento": new Date()
            }
          ]
          }
    
    var url: string =  environment.fpabilblEndpoint + 'richiesta/save';
    
    this.log.debug("FpabilService: onSave.....body= " + JSON.stringify(body));
    
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json",
        "Accept": "application/json"
      })
    };

  

    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.post(url, JSON.stringify(body), httpOptions ).subscribe(
        responseData => {
          console.log(responseData);    
        }); 

  }

/*
  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:8080/auth', JSON.stringify({ username: username, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            console.log(response);    
        }); 
}
*/

}

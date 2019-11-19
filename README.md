# FpabilFpabilwcl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## CONFIGURAZIONI PRELIMINARI
### Installare Node 

Download frome here: 

https://nodejs.org/it/

#### Installare angular cli
    
sudo npm i -g @angular/cli@latest

Installazione ultima versione di angular

#### NPM CONFIG

Per la configurazione di npm, in particolare del proxy:

npm config edit
npm config set proxy http://proxy.csi.it:3128
npm config set https-proxy http://proxy.csi.it:3128

per cancellare una key di npm

npm config delete proxy
npm config delete https-proxy

NB: all'interno della rete CSI occorre configurare il proxy e rimuoverlo fuori


# Creazione del progetto angular fpabil-fpabilwcl

ng new fpabil-fpabilwcl

posizionarsi nella directory  fpabil-fpabilwcl e lanciare ng serve: la componente potrà essere visualizzata al seguente indirizzo:

http://localhost:4200


La pagina index.html chiama 

<app-root>Loading application....</app-root>  ovvero il component app.component

## Come aggiungere un nuovo componente

ng generate component <component_name> --spec false

## Bootstrap

In questo progetto viene utilizzato Bootstrap 

### Installazione locale Bootstrap
installare bootstrap (localmente) occorre eseguire il comando:

npm install --save bootstrap@3

per dire a angular di utilizzare bootstrap occorre modificare il file angular-cli.json

"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],


# Logging 

Per il logging utilizziamo un modulo ngx-logger

## Installazione

Per installare ngx-logger lanciamo il comando:

npm install --save ngx-logger

## Configurazione

Nel root module importiamo:

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


# Utilizzo di angular cli

## Come creare una classe 

Per creare una classe occorre lanciare il seguente comando:

ng g class models/persona/persona --type=model

In questo modo la classe creata avrà la seguente estensione:

persona.model.ts nel folder app/models/persona

## Come generare un component
Per creare un componente lanciare il seguente comando:

ng g component components/common/header 

Il component verrà creato nel folder

app/components/common/header 

# Come creare un servizio

ng generate service services/common/anagrafica



# Spinner

https://www.npmjs.com/package/ngx-spinner


npm install ngx-spinner --save

Loader spinner
https://github.danielcardoso.net/load-awesome/animations.html


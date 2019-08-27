import { Component } from '@angular/core';
import { LogEngineService } from './services/log-engine/log-engine.service';


import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fpabil-fpabilwcl';

  /*
  constructor(private logger: NGXLogger) {
    this.logger.debug("Debug message");
    this.logger.info("Info message");
    this.logger.log("Default log message");
    this.logger.warn("Warning message");
    this.logger.error("Error message");
  }
  */

  constructor(private logService: LogEngineService, private log: NGXLogger) { 

    this.logService.debug('DEBUG');
    this.logService.info("INFO");
    this.logService.warn("WARN");
    this.logService.error("ERROR");


    this.log.debug('MAREMMA CANE');
  }

 /*constructor() {
  
}
*/

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  title = "Logging in Angular";
  logStatement = "no logging";

  constructor() { }

  ngOnInit() {
  }

  createLogStatement (level, message) {
    let SEPARATOR = " ";
    let date = this.getCurrentDate();
    return "[" + level + "]" + SEPARATOR + date + SEPARATOR + message;
  }

  log(level, message) {
    this.logStatement = this.createLogStatement (level, message);
    switch (level) {
      case 'debug' : {
        console.debug(this.logStatement);
        break;
      }
      case 'warning' : {
        console.warn(this.logStatement);
        break;
      }
      case 'info' : {
        console.info(this.logStatement);
        break;
      }
      case 'error' : {
        console.error(this.logStatement);
        break;
      }
    }
  }

  getCurrentDate () {
    let now = new Date();
    return "[" + now.toLocaleString() + "]";
  }

}

import { Component, OnInit } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private log: NGXLogger) { 


  }

  ngOnInit() {

    this.log.debug('FooterComponent:ngOnInit: done');
  }

}

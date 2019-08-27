import { Component, OnInit } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private log: NGXLogger) { }

  ngOnInit() {

    this.log.debug('HeaderComponent:ngOnInit done');
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { LoggerModule } from 'ngx-logger';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './components/common/logger/logger.component';

import { LogEngineService } from './services/log-engine/log-engine.service';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      //serverLoggingUrl: `${environment.apiUrl}api/logs`,
      level:environment.logLevel,
      //serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

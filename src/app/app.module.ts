import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { LoggerModule } from 'ngx-logger';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';


import { AuthInterceptorService } from './services/common/auth-interceptor.service';
import { LoggingInterceptorService } from './services/common/logging-interceptor.service';
import { RichiedenteEditComponent } from './components/richiedente/richiedente-edit/richiedente-edit.component';
import { OperatoreEditComponent } from './components/operatore/operatore-edit/operatore-edit.component';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';
import { RielipogoComponent } from './components/rielipogo/rielipogo.component';
import { PersonaEditComponent } from './components/persona/persona-edit/persona-edit.component';
import { PersonaRowComponent } from './components/persona/persona-row/persona-row.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RichiedenteEditComponent,
    OperatoreEditComponent,
    PersonaListComponent,
    RielipogoComponent,
    PersonaEditComponent,
    PersonaRowComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}api/logs`,
      level:environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [HttpClientModule, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true},
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptorService, 
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

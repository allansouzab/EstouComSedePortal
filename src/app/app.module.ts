import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SolicitarRevisaoComponent } from './solicitar-revisao/solicitar-revisao.component';
import { AcompanharComponent } from './acompanhar/acompanhar.component';
import { Agenda2030Component } from './agenda2030/agenda2030.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'
import { IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SolicitarRevisaoComponent,
    AcompanharComponent,
    Agenda2030Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

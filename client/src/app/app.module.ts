import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Heder1Component } from './heder1/heder1.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {KorisnikServiceService} from './korisnik-service.service';
import { HomePageComponent } from './home-page/home-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PocetnaComponent } from './pocetna/pocetna.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Heder1Component,
    HeaderComponent,
    RegisterComponent,
    HomePageComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [KorisnikServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
